#!/usr/bin/env python3
"""Automated checks for the GradStudio PA#2 static pages.

Run from the repository root:   python3 checks/run_checks.py
Add --screenshots to also re-take screenshots/ (off by default, because the
submitted screenshots are taken by hand in DevTools and must not be overwritten).
Needs:  Python 3 + the `playwright` package with Chromium installed.

What it does for every *.html file in the repository root:
  * serves the repo on localhost and opens each page at 360, 768 and 1280 px
  * fails on sideways scrolling and lists elements wider than the viewport
  * fails on position:fixed/sticky, scrolling inner boxes, text-overflow:ellipsis
  * fails on forbidden strings (demo controls, "Đã xác nhận") and on href="#"
  * checks links (target file and #fragment exist), external URLs, <script> tags
  * checks <html lang>, <title>, exactly one <h1>, heading order, image alt,
    duplicate ids, label/for and aria-describedby targets, unclosed tags
  * with --screenshots only: saves screenshots (JS turned off) to screenshots/
  * writes a human-readable report to checks/results.md

It is NOT the W3C validator (that needs the network): validate each page at
https://validator.w3.org/#validate_by_input and save a screenshot to checks/.
"""
import datetime
import functools
import http.server
import socketserver
import sys
import threading
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlparse

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
WIDTHS = [360, 768, 1280]
FORBIDDEN_TEXT = ["Đặt lại demo", "Mô phỏng", "Màn 1", "Màn 2", "Màn 3", "Đã xác nhận"]
VOID = {"area", "base", "br", "col", "embed", "hr", "img", "input", "link", "meta",
        "source", "track", "wbr"}

MEASURE_JS = """
() => {
  const vw = document.documentElement.clientWidth;
  const label = e => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') +
    (typeof e.className === 'string' && e.className ? '.' + e.className.trim().split(/\\s+/)[0] : '');
  const bad = [], wide = [];
  for (const e of document.querySelectorAll('body *')) {
    const s = getComputedStyle(e);
    if (s.position === 'fixed' || s.position === 'sticky') bad.push(label(e) + ' position:' + s.position);
    if (s.textOverflow === 'ellipsis') bad.push(label(e) + ' text-overflow:ellipsis');
    const sc = ['auto', 'scroll'];
    if ((sc.includes(s.overflowY) && e.scrollHeight > e.clientHeight + 1) ||
        (sc.includes(s.overflowX) && e.scrollWidth > e.clientWidth + 1))
      bad.push(label(e) + ' has its own scrollbar (overflow ' + s.overflowX + '/' + s.overflowY + ')');
    const r = e.getBoundingClientRect();
    if (r.width > 0 && r.right > vw + 1) wide.push(label(e) + ' right=' + Math.round(r.right));
  }
  return {
    sw: document.documentElement.scrollWidth, cw: vw,
    bodySw: document.body.scrollWidth, bad: bad.slice(0, 15), wide: wide.slice(0, 10),
    text: document.body.innerText
  };
}
"""


class Lint(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.stack, self.errors = [], []
        self.ids, self.fors, self.describedby = [], [], []
        self.links, self.externals, self.headings = [], [], []
        self.scripts = 0
        self.h1 = 0
        self.lang = None
        self.title_seen = False
        self._in_title = False
        self.title_text = ""
        self.img_no_alt = 0
        self.inline_style = 0

    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if tag == "html":
            self.lang = a.get("lang")
        if tag == "title":
            self._in_title, self.title_seen = True, True
        if tag == "script":
            self.scripts += 1
        if tag == "h1":
            self.h1 += 1
        if len(tag) == 2 and tag[0] == "h" and tag[1] in "123456":
            self.headings.append(int(tag[1]))
        if "id" in a:
            self.ids.append(a["id"])
        if tag == "label" and a.get("for"):
            self.fors.append(a["for"])
        if a.get("aria-describedby"):
            self.describedby.extend(a["aria-describedby"].split())
        if tag == "img" and "alt" not in a:
            self.img_no_alt += 1
        if "style" in a:
            self.inline_style += 1
        for key in ("href", "src"):
            v = a.get(key)
            if v is None:
                continue
            if v.startswith(("http://", "https://", "//")):
                self.externals.append(f"<{tag} {key}={v}>")
            elif tag == "a":
                self.links.append(v)
        if tag == "a" and "href" not in a:
            pass
        if tag not in VOID:
            self.stack.append(tag)

    def handle_startendtag(self, tag, attrs):
        # <br/> style; treat like start of a void element
        if tag not in VOID:
            self.handle_starttag(tag, attrs)
            self.stack.pop()
        else:
            self.handle_starttag(tag, attrs)

    def handle_endtag(self, tag):
        if tag == "title":
            self._in_title = False
        if tag in VOID:
            return
        if self.stack and self.stack[-1] == tag:
            self.stack.pop()
        else:
            self.errors.append(f"unexpected </{tag}> (open: {self.stack[-3:]})")
            if tag in self.stack:
                while self.stack and self.stack.pop() != tag:
                    pass

    def handle_data(self, data):
        if self._in_title:
            self.title_text += data


def lint_page(path: Path):
    raw = path.read_text(encoding="utf-8")
    lint = Lint()
    lint.feed(raw)
    res = []  # (status, check, detail)

    def add(ok, name, detail=""):
        res.append(("PASS" if ok else "FAIL", name, detail))

    add(raw.lstrip().lower().startswith("<!doctype html>"), "starts with <!doctype html>")
    add(lint.lang == "vi", 'html lang="vi"', f"lang={lint.lang!r}")
    add(lint.title_seen and lint.title_text.strip() != "", "has a non-empty <title>", lint.title_text.strip())
    add('name="viewport"' in raw, "viewport meta tag")
    add('charset' in raw.lower(), "meta charset")
    add(lint.h1 == 1, "exactly one <h1>", f"found {lint.h1}")
    skips = [(a, b) for a, b in zip(lint.headings, lint.headings[1:]) if b > a + 1]
    add(not skips, "heading levels do not skip", str(skips) if skips else "")
    add(lint.img_no_alt == 0, "every <img> has alt", f"{lint.img_no_alt} without")
    dups = sorted({i for i in lint.ids if lint.ids.count(i) > 1})
    add(not dups, "no duplicate ids", ", ".join(dups))
    miss_for = sorted({f for f in lint.fors if f not in lint.ids})
    add(not miss_for, "every label[for] points to an id", ", ".join(miss_for))
    miss_desc = sorted({d for d in lint.describedby if d not in lint.ids})
    add(not miss_desc, "every aria-describedby points to an id", ", ".join(miss_desc))
    add(not lint.errors and not lint.stack, "tags are balanced",
        "; ".join(lint.errors[:3]) + (f" still open: {lint.stack}" if lint.stack else ""))
    add(not lint.externals, "no external URLs (network is blocked when marked)", "; ".join(lint.externals[:5]))
    add(lint.scripts == 0, "no <script> (content is visible with JavaScript off)",
        f"{lint.scripts} script tag(s)" if lint.scripts else "")
    if "text-overflow" in raw and "ellipsis" in raw:
        add(False, "no ellipsis in inline CSS", "found in HTML")
    return lint, raw, res


def check_links(page: Path, lint: Lint, pages: dict):
    res = []
    bad = []
    for href in lint.links:
        if href in ("#", ""):
            bad.append(f"empty or '#' link: {href!r}")
            continue
        if href.startswith(("mailto:", "tel:")):
            continue
        u = urlparse(href)
        target = page if u.path == "" else (page.parent / unquote(u.path)).resolve()
        if not target.is_file():
            bad.append(f"{href} -> file not found")
            continue
        if u.fragment:
            ids = pages.get(target.name)
            if ids is None or u.fragment not in ids:
                bad.append(f"{href} -> #{u.fragment} not found")
    res.append(("PASS" if not bad else "FAIL", f"all {len(lint.links)} links work (no '#', targets exist)", "; ".join(bad)))
    return res


class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args, **kwargs):
        pass


def serve(root: Path):
    handler = functools.partial(QuietHandler, directory=str(root))
    httpd = socketserver.TCPServer(("127.0.0.1", 0), handler)
    threading.Thread(target=httpd.serve_forever, daemon=True).start()
    return httpd


def main():
    pages = sorted(p for p in ROOT.glob("*.html"))
    if not pages:
        print("No *.html files in the repository root yet.")
        return 1
    if not (ROOT / "index.html").is_file():
        print("index.html (the first page) is missing")
    # Screenshots are opt-in: the ones in screenshots/ are DevTools captures.
    take_shots = "--screenshots" in sys.argv[1:]
    shots = ROOT / "screenshots"
    if take_shots:
        shots.mkdir(exist_ok=True)

    lints = {}
    for p in pages:
        lints[p.name] = lint_page(p)
    id_map = {p.resolve().name: set(lints[p.name][0].ids) for p in pages}

    httpd = serve(ROOT)
    base = f"http://127.0.0.1:{httpd.server_address[1]}"
    all_rows = []
    failed = 0
    external_requests = []

    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        for p in pages:
            lint, raw, res = lints[p.name]
            res = list(res) + check_links(p.resolve(), lint, {k: v for k, v in id_map.items()})
            for w in WIDTHS:
                # JS ON: measure.  JS OFF (only with --screenshots): screenshot.
                ctx = browser.new_context(viewport={"width": w, "height": 900})
                pg = ctx.new_page()
                pg.on("request", lambda r: external_requests.append(r.url)
                      if not r.url.startswith(base) and not r.url.startswith("data:") else None)
                pg.goto(f"{base}/{p.name}")
                m = pg.evaluate(MEASURE_JS)
                ok = m["sw"] <= m["cw"] and m["bodySw"] <= m["cw"] + 1
                res.append(("PASS" if ok else "FAIL", f"no sideways scroll at {w}px",
                            f"scrollWidth={m['sw']} clientWidth={m['cw']}; wider than viewport: {m['wide']}" if not ok else ""))
                res.append(("PASS" if not m["bad"] else "FAIL", f"no fixed/sticky, own scrollbars, ellipsis at {w}px",
                            "; ".join(m["bad"])))
                if w == WIDTHS[0]:
                    found = [t for t in FORBIDDEN_TEXT if t.lower() in m["text"].lower()]
                    res.append(("PASS" if not found else "FAIL", "no forbidden demo text / 'Đã xác nhận'", ", ".join(found)))
                ctx.close()
                if take_shots:
                    ctx = browser.new_context(viewport={"width": w, "height": 900}, java_script_enabled=False)
                    pg = ctx.new_page()
                    pg.goto(f"{base}/{p.name}")
                    pg.screenshot(path=str(shots / f"{p.stem}-{w}.png"), full_page=True)
                    ctx.close()
            all_rows.append((p.name, res))
        browser.close()
    httpd.shutdown()

    ext = sorted(set(external_requests))
    now = datetime.datetime.now().strftime("%Y-%m-%d %H:%M")
    out = [f"# checks/results.md", "",
           f"Generated {now} by `python3 checks/run_checks.py` (Playwright + Chromium, pages served from localhost).", "",
           ("Screenshots re-taken by this run (JS turned off) in `screenshots/<page>-<width>.png`."
            if take_shots else
            "Screenshots not taken by this run: `screenshots/` holds the team's DevTools captures."), "",
           "**Not covered here:** the W3C validator (needs network), contrast ratios, keyboard use, "
           "reading the page as a person. Do those by hand and record them in `AI-LOG.md` / `checks/`.", ""]
    for name, res in all_rows:
        out += [f"## {name}", "", "| Result | Check | Detail |", "|---|---|---|"]
        for status, check, detail in res:
            if status == "FAIL":
                failed += 1
            out.append(f"| {status} | {check} | {detail.replace('|', '/')} |")
        out.append("")
    out += ["## Whole site", "",
            f"- External network requests while loading all pages: {len(ext)} {ext if ext else ''}",
            f"- Failed checks: {failed}", ""]
    if ext:
        failed += 1
    (ROOT / "checks" / "results.md").write_text("\n".join(out), encoding="utf-8")
    print("\n".join(out))
    return 1 if failed else 0


if __name__ == "__main__":
    sys.exit(main())
