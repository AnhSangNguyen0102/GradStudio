/**
 * Zero-dependency Responsive & Horizontal Scroll Check
 * Uses Node.js built-in http, fs, child_process, and WebSocket to control Chrome via CDP.
 */

import { spawn } from 'node:child_process';
import fs from 'node:fs';
import http from 'node:http';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distDir = path.resolve(__dirname, '../client/dist');

if (!fs.existsSync(distDir)) {
  console.error('client/dist not found. Please run "npm run build --prefix client" first.');
  process.exit(1);
}

// 1. Simple SPA HTTP server for client/dist
const mimeTypes = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.css': 'text/css',
  '.woff2': 'font/woff2',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split('?')[0];
  let filePath = path.join(distDir, urlPath);

  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(distDir, 'index.html');
  }

  const ext = path.extname(filePath);
  const contentType = mimeTypes[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Error loading file');
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
const port = server.address().port;
console.log(`Local test server running at http://127.0.0.1:${port}`);

// 2. Launch headless Chrome with remote debugging
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const debugPort = 9222 + Math.floor(Math.random() * 500);

const chromeProc = spawn(chromePath, [
  '--headless=new',
  `--remote-debugging-port=${debugPort}`,
  '--disable-gpu',
  '--no-first-run',
  '--no-default-browser-check',
  'about:blank',
]);

// Wait for Chrome CDP port to be ready
async function waitForCDP(port, attempts = 30) {
  for (let i = 0; i < attempts; i++) {
    try {
      const res = await fetch(`http://127.0.0.1:${port}/json/version`);
      if (res.ok) {
        const data = await res.json();
        return data.webSocketDebuggerUrl;
      }
    } catch {
      await new Promise((r) => setTimeout(r, 200));
    }
  }
  throw new Error('Chrome remote debugging port timed out.');
}

let wsUrl;
try {
  wsUrl = await waitForCDP(debugPort);
} catch (err) {
  console.error('Failed to connect to Chrome:', err);
  chromeProc.kill();
  server.close();
  process.exit(1);
}

// Helper to send CDP command over WebSocket
class CDPClient {
  constructor(url) {
    this.ws = new WebSocket(url);
    this.id = 1;
    this.callbacks = new Map();
    this.ready = new Promise((resolve) => {
      this.ws.onopen = resolve;
    });
    this.ws.onmessage = (event) => {
      const msg = JSON.parse(event.data);
      if (msg.id && this.callbacks.has(msg.id)) {
        const { resolve, reject } = this.callbacks.get(msg.id);
        this.callbacks.delete(msg.id);
        if (msg.error) reject(msg.error);
        else resolve(msg.result);
      }
    };
  }

  async send(method, params = {}) {
    await this.ready;
    const msgId = this.id++;
    return new Promise((resolve, reject) => {
      this.callbacks.set(msgId, { resolve, reject });
      this.ws.send(JSON.stringify({ id: msgId, method, params }));
    });
  }

  close() {
    this.ws.close();
  }
}

// Connect to browser target and create a new page
const browserCdp = new CDPClient(wsUrl);
const { targetId } = await browserCdp.send('Target.createTarget', {
  url: `http://127.0.0.1:${port}/styleguide`,
});
const pageWsRes = await fetch(`http://127.0.0.1:${debugPort}/json`);
const targets = await pageWsRes.json();
const target = targets.find((t) => t.id === targetId);
const pageCdp = new CDPClient(target.webSocketDebuggerUrl);

await pageCdp.send('Page.enable');
await pageCdp.send('DOM.enable');

const widths = [360, 768, 1280];
let allPassed = true;

console.log('='.repeat(80));
console.log(' GradStudio /styleguide Horizontal Scroll & Viewport Check');
console.log('='.repeat(80));

for (const width of widths) {
  // Set viewport
  await pageCdp.send('Emulation.setDeviceMetricsOverride', {
    width,
    height: 900,
    deviceScaleFactor: 1,
    mobile: width < 768,
  });

  // Navigate to styleguide
  await pageCdp.send('Page.navigate', { url: `http://127.0.0.1:${port}/styleguide` });
  await new Promise((r) => setTimeout(r, 600)); // wait for React render

  // Evaluate scroll width vs client width
  const evalResult = await pageCdp.send('Runtime.evaluate', {
    expression: `
      (() => {
        const scrollW = document.documentElement.scrollWidth;
        const clientW = document.documentElement.clientWidth;
        const hasScroll = scrollW > clientW;
        
        // Find any elements exceeding clientWidth
        const overflowEls = [...document.querySelectorAll('body *')]
          .filter(e => {
            const rect = e.getBoundingClientRect();
            return rect.right > clientW + 1;
          })
          .map(e => e.tagName + (e.className ? '.' + e.className.split(' ').join('.') : ''));
        
        return {
          scrollW,
          clientW,
          hasScroll,
          overflowCount: overflowEls.length,
          sampleOverflow: overflowEls.slice(0, 3)
        };
      })()
    `,
    returnByValue: true,
  });

  const res = evalResult.result.value;
  const passed = !res.hasScroll && res.overflowCount === 0;

  if (!passed) {
    allPassed = false;
  }

  const statusStr = passed ? '\x1b[32mPASS (No sideways scroll)\x1b[0m' : '\x1b[31mFAIL\x1b[0m';
  console.log(
    `Width: ${width.toString().padEnd(4)}px | scrollWidth: ${res.scrollW}px | clientWidth: ${res.clientW}px | ${statusStr}`,
  );
  if (!passed) {
    console.log(`  Overflow elements (${res.overflowCount}):`, res.sampleOverflow);
  }
}

console.log('='.repeat(80));

// Cleanup
pageCdp.close();
browserCdp.close();
chromeProc.kill();
server.close();

if (!allPassed) {
  console.error('Horizontal scroll check FAILED.');
  process.exit(1);
} else {
  console.log(
    'Horizontal scroll check PASSED: /styleguide has 0 sideways scroll at 360, 768, 1280px.',
  );
  process.exit(0);
}
