# AI-LOG

## 2026-11-09 — Project plan, GitHub repo setup, Figma design prompts
Tool: Claude, Claude Sonnet 5.5
Asked for: a plan to finish PA#2 on time, a guide to create the shared GitHub repo with starter files, and prompts for the Figma AI agent in the scrapbook style of our reference image.
Kept: (person to fill in)
Changed: the assistant dropped the real-people photos of the reference style and used illustrations and initials, because the brief's Fix-these list forbids photos of real people.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-09 — brief.md and rules file
Tool: Claude, Claude Sonnet 5.5
Asked for: a brief file and a rules file for the assistant, then the same files in English.
Kept: (person to fill in)
Changed: after the new PA#2 announcement the team chose React, so the assistant added Vite and dist/ rules; the team later chose static, so those parts were replaced (see the next entry).
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-10 — Static setup: rules, checks, templates
Tool: Claude Code, Claude Sonnet 5.5
Asked for: set the project up correctly for static HTML/CSS, then adapt the rules file and AI-LOG to the course's AI-use rules, with the AI writing the log entries itself.
Kept: (person to fill in)
Changed: rewrote CLAUDE.md in the shorter style of the team's earlier projects; moved the log's format and rules out of AI-LOG.md into CLAUDE.md at the team's request; dropped an earlier template that asked for verbatim prompts, because the course asks for a short account instead.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-11 — Screen 3: Lịch chụp của tôi (lich-chup-cua-toi.html + assets/css/style.css)
Tool: Antigravity, Claude Opus 4.6 & Gemini 3.8 Flash
Asked for: convert the Figma mobile design (360 px) for Screen 3 into HTML/CSS complying with PA#2 rules, then refine the UI tokens and layout based on Figma screenshots (warm beige background, centered washi tape, highlighted T7+24 vertical rounded rectangle, full-width status badge, and boxed pricing section).
Kept: semantic HTML layout, typography tokens, responsive breakpoints (768 px & 1280 px), zero horizontal scroll at 360 px, and inline SVG assets.
Changed: adjusted page background to warm paper beige (#F7F1DF) and booking card to kraft (#ECE5D8); centered washi tape horizontally over "Tháng 10, 2026"; styled selected day T7+24 in a brown rounded rectangle; expanded "Chờ cọc 30%" badge into a full-width container with clock icon; enclosed the entire pricing breakdown (giá gói, cọc 30%, còn lại 70%, and note) into a bordered box container.
Rejected: initial pale background (#F7F4EE), left-aligned washi tape, circular date badge highlighting number only, small inline status pill, and unboxed pricing rows from the initial draft.
By hand: visual alignment and color verification against Figma reference screenshots, testing across viewport widths in browser, and contrast ratio validation.
## 2026-11-11 — Screen 3: Lịch chụp của tôi (lich-chup-cua-toi.html + assets/css/style.css)
Tool: Antigravity, Claude Opus 4.6 & Gemini 3.8 Flash
Asked for: convert the Figma mobile design (360 px) for Screen 3 into HTML/CSS complying with PA#2 rules, refine the UI tokens and layout based on Figma screenshots, and apply exact Figma Auto layout inspect specs to the GS-1024 booking frame (Corner radius 2px, Padding 24px, Gap 24px, Kraft fill, vertical stack).
Kept: semantic HTML layout, typography tokens, responsive breakpoints (768 px & 1280 px), zero horizontal scroll at 360 px, and inline SVG assets.
Changed: adjusted page background to warm paper beige (#F7F1DF) and booking card to kraft (#ECE5D8); centered washi tape horizontally over "Tháng 10, 2026"; styled selected day T7+24 in a brown rounded rectangle; expanded "Chờ cọc 30%" badge into a full-width container with clock icon; enclosed the entire pricing breakdown into a bordered box; updated frame GS-1024 to exact Figma specs: Corner radius 2px, padding 24px, gap 24px, and vertical stacked booking detail pairs.
Rejected: initial pale background (#F7F4EE), left-aligned washi tape, 12px card border-radius, circular date badge, 2-column details grid, small inline status pill, and unboxed pricing rows from earlier drafts.
By hand: visual alignment against Figma inspect panel, testing across 360/768/1280 px viewports in browser, and contrast ratio validation.

## 2026-11-11 — Chat conversation link layout refinement (lich-chup-cua-toi.html + assets/css/style.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: update the studio management chat link ("Quản lý studio: xem lại cuộc trò chuyện") to exact Figma inspect specs (W 328 Fill, H 68 Hug, Flow horizontal, Gap 8px, Padding top/bottom 8px, no border, no fill, underlined brand text), and append a new entry to AI-LOG.md without modifying earlier entries.
Kept: inline chat SVG icon and destination link to admin-tu-van.html (Screen 2).
Changed: converted .chat-link from a dashed bordered box to an unbordered inline flex link; set padding: 8px 0, gap: 8px, text-decoration: underline, text-underline-offset: 3px, and alignment: flex-start.
Rejected: previous dashed border, kraft background hover, and centered text alignment.
By hand: visual verification of Figma inspector values for W 328 Fill, H 68 Hug, Padding vertical 8, and horizontal flow.

## 2026-11-11 — Deposit status badge Auto layout refinement (assets/css/style.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: update the deposit status badge frame ("Chờ cọc 30%") to exact Figma inspect specs (W 280 Fill, H 34 Hug, Flow horizontal, Alignment Center-Left, Gap 8px, Padding horizontal 12px / vertical 8px, Corner radius 8px, Fill Nền/giấy #F7F1DF), and append a new entry to AI-LOG.md without modifying earlier entries.
Kept: inline clock SVG icon and status text label.
Changed: updated .status-badge styling to background-color: var(--color-bg) (#F7F1DF), border-radius: 8px, padding: 8px 12px, gap: 8px, and align-items: center.
Rejected: previous off-white surface background (#FFFDF9) and 4px border radius on the status badge.
By hand: visual verification of Figma inspector values for W 280 Fill, H 34 Hug, Padding 12/8, Gap 8, and Corner radius 8.

## 2026-11-11 — Fix W3C validation error on hr inside dl (lich-chup-cua-toi.html + assets/css/style.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: fix W3C HTML validator error "Element hr not allowed as child of element dl in this context" inside the pricing breakdown box, and append a new entry to AI-LOG.md without modifying earlier entries.
Kept: exact visual divider appearance between "Giá gói" and "Cọc 30%".
Changed: removed the invalid <hr> element from inside <dl class="pricing-list">; replaced it with a CSS border-bottom and padding-bottom on .pricing-row--package.
Rejected: using <hr> directly as a child of <dl> (violates HTML5 content model).
By hand: verification with W3C validator rules for dl element content model.

## 2026-11-11 — Rename CSS file to screen3.css (screen3.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: rename style.css to screen3.css and link it in the HTML files.
Kept: full design tokens, layout rules, and media queries.
Changed: linked screen3.css directly in lich-chup-cua-toi.html and lich-chup.html; created screen3.css at the root level (and kept backups in assets/css/).
Rejected: keeping style.css as the only stylesheet name.
By hand: verified stylesheet link resolution and stylesheet loading across all viewports.
