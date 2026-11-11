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

## 2026-11-11 — Responsive tablet 768px layout refinement (screen3.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: write a media query @media (min-width: 768px) for tablet layout optimizing container width, 4-column filter buttons, week calendar spacing, 2-column booking details grid, and pricing box padding according to PA#2 rubric and Figma design.
Kept: base 360px mobile styling, HTML structure, semantic tags, and design tokens.
Changed: added @media (min-width: 768px) block overriding .page-wrapper (max-width: 720px), .filter-grid (repeat(4, 1fr)), .week-bar gap, .booking-details (2-column grid 120px 1fr), and .pricing-box (padding: 24px).
Rejected: writing duplicate styles already inherited from mobile, using !important or overflow-x: hidden.
By hand: visual alignment verification against 768px Figma reference image and running checks for zero horizontal scroll.

## 2026-11-11 — Desktop 1440px 2-column layout implementation (screen3.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: implement desktop layout for 1200px-1440px viewports with a 2-column grid (left: timeline card, studio address, chat link ~60%; right: GS-1024 booking card ~40%) while keeping header, title, filters, and footer full width, without modifying HTML structure, and append a new entry to AI-LOG.md.
Kept: exact HTML structure, all design tokens, mobile-first and tablet styling.
Changed: added desktop media query @media (min-width: 1024px) configuring .page-wrapper (max-width: 1200px, padding: 48px 48px 64px), main (display: grid, grid-template-columns: 1.3fr 1fr, gap: 32px), title/filters spanning 1 / -1, and placing timeline/address/chat in column 1 and booking card in column 2.
Rejected: using position: sticky or overflow scrollbars (forbidden by project rubric), altering HTML elements or class names.
By hand: verified zero horizontal scroll across 360px, 768px, 1280px, and 1440px viewports via Playwright.

## 2026-11-11 — Desktop layout refinement: move studio address to right column & fix top container padding (screen3.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: fix missing top padding on desktop header and move the studio address card ("GradStudio · TP. Hồ Chí Minh · Địa chỉ sẽ gửi khi đã cọc") to the right column directly underneath the booking payment card. Append a new entry to AI-LOG.md.
Kept: exact HTML structure, semantic tags, all mobile and tablet layouts, zero !important, zero overflow-x: hidden.
Changed: added missing --sp-64: 64px design token in :root so that padding: var(--sp-48) var(--sp-48) var(--sp-64) on .page-wrapper resolves correctly without falling back to 0px (providing 48px top padding on desktop); updated @media (min-width: 1024px) grid positioning to place .studio-address into column 2, row 4 directly beneath .booking-card, and aligned .chat-link in column 1, row 4. Synchronized both screen3.css and assets/css/screen3.css.
Rejected: hardcoded pixel values bypassing tokens, rearranging HTML DOM elements, using negative margins.
By hand: verified against user reference screenshots and confirmed zero horizontal overflow (document.documentElement.scrollWidth <= document.documentElement.clientWidth) across 360px, 768px, 1280px, and 1440px via Playwright automated tests.

## 2026-11-11 — Desktop timeline schedule column sizing refinement (screen3.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: update timeline schedule frame size ("phần ngày tháng") to match Figma inspect specifications: W 576, H 685 Hug, vertical auto-layout with 24px gap between timeline card and chat link ("Quản lý studio: xem lại cuộc trò chuyện").
Kept: exact HTML structure, all design tokens, mobile/tablet styling, zero !important, zero overflow-x: hidden.
Changed: in @media (min-width: 1024px), updated .page-wrapper > main grid to use a dedicated 576px track for column 1 (grid-template-columns: 576px 1fr) with grid-template-rows: auto auto max-content max-content auto auto; set .timeline-card and .chat-link width to 576px with padding: var(--sp-32) and adjusted week-day / list spacing so the column frame hugs to ~685px with an exact 24px gap between the card and chat link; kept .booking-card spanning rows 3-5 and .studio-address in row 6 with 24px gap.
Rejected: modifying HTML structure, adding wrapper divs, fixed height hardcoding that breaks text scaling.
By hand: verified against Figma frame specs (576 x 685 Hug, gap 24) and confirmed 0 horizontal scroll across 360px, 768px, 1280px, and 1440px via Playwright automated tests.

## 2026-11-11 — GS-1024 booking card dimensions and auto-layout update (screen3.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: update GS-1024 booking card frame size according to Figma inspect specifications: W 736 Fill, H 818 Hug, Auto layout vertical, Gap 24px, Padding 24px all sides, Corner radius 2px, Fill kraft (#ECE5D8).
Kept: exact HTML structure, all design tokens, mobile/tablet styling, zero !important, zero overflow-x: hidden.
Changed: in @media (min-width: 1024px) and @media (min-width: 1440px), updated container max-width to 1440px so that on 1440px desktop viewports, column 2 resolves exactly to 736px (576px + 32px gap + 736px = 1344px content); configured .booking-card and .studio-address to width: 100% (max-width: 736px) and exactly 736px at 1440px; verified gap: var(--sp-24) (24px) and padding: var(--sp-24) (24px); adjusted desktop title font-size to 1.75rem, spacing in .booking-details and .pricing-box to naturally hug content to ~802-818px height.
Rejected: fixed height that clips contents or forces scrollbars, modifying HTML tags.
By hand: verified against Figma inspector values (W 736 Fill, H 818 Hug, Gap 24, Padding 24) and tested horizontal scroll on 360px, 768px, 1024px, 1280px, and 1440px via Playwright with 0 overflow errors.

## 2026-11-11 — Status filter buttons sizing refinement on desktop (screen3.css)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: resize the 4 status filter buttons ("Tất cả 1", "Chờ cọc 1", "Đã đặt lịch 0", "Hoàn thành 0") to be compact and fit nicely above the timeline schedule card, matching the design reference.
Kept: exact HTML structure, all design tokens, mobile/tablet button styling, zero !important, zero overflow-x: hidden.
Changed: in @media (min-width: 1024px), scoped section[aria-label="Bộ lọc trạng thái"] to grid-column: 1 and grid-row: 2 (sitting directly above .timeline-card in column 1 rather than spanning the full width); switched .filter-grid to display: flex with flex-wrap: wrap and gap: var(--sp-8); set .filter-btn to width: auto with padding: var(--sp-8) var(--sp-16) and min-height: 44px (touch target compliant) so the buttons hug their content neatly within ~437px width above the 576px timeline card.
Rejected: spanning filter buttons across full desktop width (1 / -1), modifying HTML elements.
By hand: verified against user reference screenshots (media_1794368992943_a17b6bad.png vs media_1794369002525_cd9d817a.png) and confirmed 0 horizontal scroll across 360px, 768px, 1024px, 1280px, and 1440px via Playwright automated tests.
