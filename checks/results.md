# checks/results.md

Generated 2026-11-11 10:09 by `python3 checks/run_checks.py` (Playwright + Chromium, pages served from localhost).

Screenshots (JS turned off) are in `screenshots/<page>-<width>.png`.

**Not covered here:** the W3C validator (needs network), contrast ratios, keyboard use, reading the page as a person. Do those by hand and record them in `AI-LOG.md` / `checks/`.

## lich-chup-cua-toi.html

| Result | Check | Detail |
|---|---|---|
| PASS | starts with <!doctype html> |  |
| PASS | html lang="vi" | lang='vi' |
| PASS | has a non-empty <title> | Lịch chụp của tôi – GradStudio |
| PASS | viewport meta tag |  |
| PASS | meta charset |  |
| PASS | exactly one <h1> | found 1 |
| PASS | heading levels do not skip |  |
| PASS | every <img> has alt | 0 without |
| PASS | no duplicate ids |  |
| PASS | every label[for] points to an id |  |
| PASS | every aria-describedby points to an id |  |
| PASS | tags are balanced |  |
| PASS | no external URLs (network is blocked when marked) |  |
| PASS | no <script> (content is visible with JavaScript off) |  |
| FAIL | all 4 links work (no '#', targets exist) | index.html -> file not found; index.html -> file not found; admin-tu-van.html -> file not found |
| PASS | no sideways scroll at 360px |  |
| PASS | no fixed/sticky, own scrollbars, ellipsis at 360px |  |
| PASS | no forbidden demo text / 'Đã xác nhận' |  |
| PASS | no sideways scroll at 768px |  |
| PASS | no fixed/sticky, own scrollbars, ellipsis at 768px |  |
| PASS | no sideways scroll at 1280px |  |
| PASS | no fixed/sticky, own scrollbars, ellipsis at 1280px |  |

## Whole site

- External network requests while loading all pages: 0 
- Failed checks: 1
