# Project Rules – GradStudio PA#2 (static)

Read `brief.md` first. These rules are mandatory. If a request conflicts with a rule, say so instead of silently ignoring the rule.

## Stack and commands
- Stack: plain static HTML + CSS. No JavaScript, no framework, no build step, no npm. Every piece of content must be visible with JavaScript turned off (the pages are marked that way).
- Pages at the repo root: `index.html` (Screen 1), `admin-tu-van.html` (Screen 2), `lich-chup-cua-toi.html` (Screen 3). They link to each other with relative links (`href="admin-tu-van.html"`).
- Styles: `assets/css/style.css`. A CSS framework is optional; if used, download it into `assets/css/` and load it with `<link>`. No CDN and no external URLs for fonts, images or icons.
- Fonts: system font stack, or self-hosted WOFF2 in `assets/fonts/`. Images and icons: our own SVG or files in `assets/`.
- View: `python3 -m http.server 8000`, then open http://localhost:8000
- Check: `python3 checks/run_checks.py` (writes `checks/results.md`; it re-takes `screenshots/` only with `--screenshots`, because the submitted screenshots are DevTools captures). The W3C validator is run by hand, on every page, 0 errors.
- ALWAYS run the check before committing. NEVER say a check passed unless it was actually run; say which checks were not run.
- Do not add a file, dependency or feature the pages do not need.

## Using the AI assistant (course rules)
- AI is allowed. Every use is declared in `AI-LOG.md`; the assistant writes the entries itself (see "AI-LOG protocol" below).
- We own the code. Anything a teammate cannot explain scores zero, even if it runs. So: keep HTML and CSS simple, add short comments for non-obvious CSS choices, and after each task explain in plain words what you changed and why.
- NEVER put API keys, real user data, real people's photos or names, or a classmate's work into prompts or files. Sample data only (the example story).
- Never invent image sources, licences, product-owner citations, check results or scores.

## AI-LOG protocol (the assistant does this automatically)
`AI-LOG.md` holds entries only. Its structure and the rules for it live here, in this file. Course rules behind it: declare every use of AI; it is an account, not a transcript; a team that declares heavy use and can explain it all scores higher than one that declares nothing; anything we cannot explain scores zero.

- When: after every task in which you wrote, changed or advised on something for this repository, and BEFORE your final reply, append ONE entry to the end of `AI-LOG.md`. Append only: never edit, reorder or delete earlier entries unless the person asks. Mention the new entry in one line in your reply.
- Format, exactly these lines (three honest lines are enough, no transcript, no pasted prompts):

  ```md
  ## <YYYY-MM-DD> — <what you were working on>
  Tool: <Claude Code / Copilot / Cursor / something else / none>
  Asked for: <the task you gave it, in one sentence>
  Kept: <what you took as it came>
  Changed: <what you rewrote, and why>
  Rejected: <what you threw away, and why>
  By hand: <the parts you wrote yourself>
  ```

- Tool: the tool and model you are running as (for example `Claude Code, Claude Sonnet 5.5`). Date: today's local date. Asked for: the person's request in one sentence, in their intent, not a long quote.
- Write only what this conversation shows. Fill Changed and Rejected when the person asked you to revise or drop something, or when you fixed your own output after a failed check (name the check, e.g. `run_checks.py` FAIL on sideways scroll at 360px). Write Kept as what you delivered and the person did not ask to change.
- What only the person can know (what they rewrote or wrote by hand, whether they checked it in a browser) is written as `(person to fill in)`. Never guess it, never write "none" when you do not know, and never write that the person verified something.
- Never write PASS or "checked" unless that check was run in this session. Never put API keys, real user data, real people's names or photos in the log.
- Before submitting, the team replaces every `(person to fill in)` with the truth: "I wrote this part myself" is a good entry.

## Content and data
- All displayed text is in Vietnamese with full diacritics. Docs and code comments are in English.
- The pages share no code, so copy facts exactly from the example story in `brief.md`. Fixed story: Saturday 24/10/2026; customer Linh (Nguyễn Thùy Linh); Admin Thảo; make-up 13:00–14:00 with Mai; shoot 14:00–16:00 with Tuấn in Phòng B; Gói Tốt nghiệp Premium (2 giờ, 30 ảnh chỉnh); 1.800.000đ, deposit 540.000đ, remaining 1.260.000đ; booking GS-1024.
- Status names, exactly. Conversations: Chưa trả lời / Đang tư vấn / Đã chốt lịch / Hoàn thành. Bookings: Chờ cọc 30% (Screen 3 may show "Đã thống nhất lịch · Chờ cọc 30%") / Đã đặt lịch / Hoàn thành. Never "Đã xác nhận" for a conversation.
- Only say the studio holds the slot after the deposit succeeds.
- Do not build anything from the brief's "Not building" list.

## Forbidden (the "Fix these" list)
- Photos of real people or realistic faces. Use SVG illustrations or initials.
- Demo controls: Màn 1/2/3, Đặt lại demo, Mô phỏng… Use real links that say who continues ("Nhân viên studio: mở cuộc trò chuyện này").
- `href="#"`, an empty `href`, or a link to something that does not exist. Unbuilt items are removed or plain text "(chưa có)".
- Actions with no page yet (Thanh toán cọc 30%, send message) are `<button disabled>` with a visible note linked by `aria-describedby`.
- A floating chat (`position: fixed/sticky`) or a column with its own scrollbar (`overflow: auto/scroll`). The whole page scrolls as one.
- Truncated labels (`…`, `text-overflow: ellipsis`). A clash or status shown by colour or hatching alone: always icon + text.

## Design and accessibility
- Style: warm scrapbook / film-journal (cream paper, polaroid frames, washi tape, handwritten notes) in CSS and SVG only. Handwriting style is decorative only, never for labels, buttons or important facts.
- Text contrast at least 4.5:1. Visible focus state. Keyboard works.
- Works at 360, 768 and 1280 px with no sideways scroll. On small screens the resource calendar is a vertical list by time.
- Mobile first; breakpoints 768 px and 1024 px (Screen 2 adds 1200 px). No fixed widths on layout boxes (`max-width`, `minmax(0, …)`, `fr`).
- Spacing only from the scale 4/8/12/16/24/32/48 (+64/80) via `--space-*` / `--sp-*`. Never `!important`.
- Never hide overflow with `overflow-x: hidden/clip` on `html`, `body` or a wrapper: fix the element that sticks out.
- Standalone buttons and links at least 44 px tall at 360 px; body text at least 16 px.
- Each page: `<!doctype html>`, `<html lang="vi">`, `<meta charset>`, viewport meta, its own `<title>`, exactly one `<h1>`, headings that do not skip levels.
- Semantic elements: `header`, `nav`, `main`, `section`, `article`, `aside`, `form`, `fieldset`/`legend`, `label for`, `ul`/`ol`, `table` or `dl` for tabular data, `time` for times. No `div`/`span` where a meaningful element exists. Images have `alt` (`alt=""` if decorative); decorative inline SVG has `aria-hidden="true"`.

## Git
- No direct pushes to `main`. One branch per task, a Pull Request, one teammate reviews.
- Small commits with clear messages (e.g. `feat: add resource calendar as vertical list`).
- Commit the final state and tag `pa2` before zipping the repository folder (with `.git`).

## Done when
- [ ] The 3 pages open directly and show the required state, with JavaScript off
- [ ] `python3 checks/run_checks.py` shows 0 FAIL; W3C validator shows 0 errors on each page
- [ ] Every item under "Forbidden" is checked by a person, not only by the script
- [ ] `PROTOTYPE.md` lists each page, image sources and disabled buttons
- [ ] `AI-LOG.md` has an entry for every use of AI and no `(person to fill in)` is left
- [ ] `checks/`, `screenshots/` and `SELF_ASSESSMENT_REPORT.md` hold real evidence
