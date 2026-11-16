/**
 * WCAG 2.1 Contrast Ratio Checker
 * GradStudio Design System – Zero dependencies Node.js script.
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const tokensPath = path.resolve(__dirname, '../client/src/styles/tokens.css');

// Calculate relative luminance for a hex color
function getLuminance(hex) {
  const cleanHex = hex.replace('#', '').trim();
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const toLinear = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
}

// Calculate WCAG contrast ratio between two hex colors
function getContrastRatio(hex1, hex2) {
  const lum1 = getLuminance(hex1);
  const lum2 = getLuminance(hex2);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Read and extract color variables from tokens.css
function parseTokens() {
  const css = fs.readFileSync(tokensPath, 'utf8');
  const colorMap = {};
  const varRegex = /(--color-[a-z0-9-]+)\s*:\s*(#[0-9a-fA-F]{6})/g;
  let match;
  while ((match = varRegex.exec(css)) !== null) {
    colorMap[match[1]] = match[2].toUpperCase();
  }
  return colorMap;
}

const colorMap = parseTokens();

// The defined text/background pairs used throughout GradStudio UI
const pairsToCheck = [
  { fg: '--color-text', bg: '--color-bg', desc: 'Main text on paper background' },
  { fg: '--color-text', bg: '--color-surface', desc: 'Main text on card surface' },
  { fg: '--color-text', bg: '--color-kraft', desc: 'Main text on kraft paper' },
  { fg: '--color-text-muted', bg: '--color-bg', desc: 'Muted text on paper background' },
  { fg: '--color-text-muted', bg: '--color-surface', desc: 'Muted text on card surface' },
  { fg: '--color-text-muted', bg: '--color-kraft', desc: 'Muted text on kraft paper' },
  { fg: '--color-text-on-dark', bg: '--color-dark', desc: 'Cream text on dark background' },
  { fg: '--color-brand', bg: '--color-bg', desc: 'Brand brown on paper background' },
  { fg: '--color-brand', bg: '--color-surface', desc: 'Brand brown on card surface' },
  { fg: '--color-brand-hover', bg: '--color-bg', desc: 'Brand brown hover on paper background' },
  { fg: '--color-surface', bg: '--color-accent', desc: 'Cream button text on accent primary' },
  { fg: '--color-text-on-dark', bg: '--color-accent', desc: 'Cream text on accent primary' },
  { fg: '--color-text-on-dark', bg: '--color-accent-hover', desc: 'Cream text on accent hover' },
  { fg: '--color-accent-on-dark', bg: '--color-dark', desc: 'Accent highlight on dark background' },
  { fg: '--color-accent', bg: '--color-accent-soft', desc: 'Accent text on soft accent badge' },
  { fg: '--color-success', bg: '--color-success-bg', desc: 'Success text on success background' },
  { fg: '--color-warning', bg: '--color-warning-bg', desc: 'Warning text on warning background' },
  { fg: '--color-danger', bg: '--color-danger-bg', desc: 'Danger text on danger background' },
  {
    fg: '--color-disabled-text',
    bg: '--color-disabled-bg',
    desc: 'Disabled text on disabled background',
  },
];

console.log('='.repeat(94));
console.log(' WCAG 2.1 Color Contrast Check – GradStudio Design Tokens');
console.log('='.repeat(94));
console.log(
  '| ' +
    'Pair Description'.padEnd(42) +
    ' | ' +
    'Foreground'.padEnd(11) +
    ' | ' +
    'Background'.padEnd(11) +
    ' | ' +
    'Ratio'.padEnd(8) +
    ' | ' +
    'Result' +
    ' |',
);
console.log('-'.repeat(94));

let hasFail = false;
let passedCount = 0;

for (const pair of pairsToCheck) {
  const fgHex = colorMap[pair.fg];
  const bgHex = colorMap[pair.bg];

  if (!fgHex || !bgHex) {
    console.error(`Missing token definition: ${pair.fg} (${fgHex}) or ${pair.bg} (${bgHex})`);
    hasFail = true;
    continue;
  }

  const ratio = getContrastRatio(fgHex, bgHex);
  const pass = ratio >= 4.5;
  const resultStr = pass ? '\x1b[32mPASS (AA)\x1b[0m' : '\x1b[31mFAIL (<4.5)\x1b[0m';

  if (!pass) {
    hasFail = true;
  } else {
    passedCount++;
  }

  const ratioStr = ratio.toFixed(2) + ':1';
  console.log(
    `| ${pair.desc.padEnd(42)} | ${(fgHex + ' (' + pair.fg.replace('--color-', '') + ')').slice(0, 11).padEnd(11)} | ${(bgHex + ' (' + pair.bg.replace('--color-', '') + ')').slice(0, 11).padEnd(11)} | ${ratioStr.padEnd(8)} | ${resultStr.padEnd(19)} |`,
  );
}

console.log('='.repeat(94));
console.log(`Summary: ${passedCount}/${pairsToCheck.length} pairs passed WCAG AA (>= 4.5:1).`);

if (hasFail) {
  console.error('\nFAILED: One or more color pairs failed the WCAG 4.5:1 threshold.');
  process.exit(1);
} else {
  console.log('\nSUCCESS: All color pairs meet or exceed the WCAG AA 4.5:1 requirement.');
  process.exit(0);
}
