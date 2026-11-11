# AI-LOG

## 2026-11-05 — Project plan, GitHub repo setup, Figma design prompts
Tool: Claude, Claude Sonnet 5.5
Asked for: a plan to finish PA#2 on time, a guide to create the shared GitHub repo with starter files, and prompts for the Figma AI agent in the scrapbook style of our reference image.
Kept: (person to fill in)
Changed: the assistant dropped the real-people photos of the reference style and used illustrations and initials, because the brief's Fix-these list forbids photos of real people.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-05 — brief.md and rules file
Tool: Claude, Claude Sonnet 5.5
Asked for: a brief file and a rules file for the assistant, then the same files in English.
Kept: (person to fill in)
Changed: after the new PA#2 announcement the team chose React, so the assistant added Vite and dist/ rules; the team later chose static, so those parts were replaced (see the next entry).
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-07 — Static setup: rules, checks, templates
Tool: Claude Code, Claude Sonnet 5.5
Asked for: set the project up correctly for static HTML/CSS, then adapt the rules file and AI-LOG to the course's AI-use rules, with the AI writing the log entries itself.
Kept: (person to fill in)
Changed: rewrote CLAUDE.md in the shorter style of the team's earlier projects; moved the log's format and rules out of AI-LOG.md into CLAUDE.md at the team's request; dropped an earlier template that asked for verbatim prompts, because the course asks for a short account instead.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-07 — Static index.html & scrapbook styling (Screen 1)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: dựng trang index.html và CSS theo phong cách scrapbook / film-journal cho đồ án GradStudio (PA#2).
Kept: toàn bộ cấu trúc Header, Hero 2 cột với cụm polaroid & dải film, 01 Dịch vụ với thẻ washi tape, 02 Quy trình 4 cột, 03 Chat với studio, Footer, bảng màu kem / caramel / pastel và nội dung tiếng Việt có dấu.
Changed: thay vì tải font qua link CDN Google Fonts và dùng js/main.js, dùng CSS thuần (scroll-behavior: smooth) và khai báo font-family có fallback hệ thống nhằm tuân thủ quy tắc CLAUDE.md (cấm kết nối ngoại vi/CDN và cấm JavaScript); lưu CSS ở assets/css/style.css theo quy định repo đồng thời tạo css/style.css.
Rejected: (person to fill in)
By hand: (person to fill in)


## 2026-11-10 — Scrapbook tactile paper styling & reusable components
Tool: Antigravity, Gemini 3.8 Flash
Asked for: tạo cảm giác scrapbook bằng chất liệu giấy thật (vân giấy SVG feTurbulence, mép giấy xé clip-path, washi tape răng cưa, polaroid viền ngà bóng 2 lớp, giấy kẻ dòng, doodle nét vẽ tay và dải film radial-gradient) và gom thành các class tái sử dụng.
Kept: toàn bộ 8 class tái sử dụng (.paper, .torn-top, .torn-left, .tape, .polaroid, .lined-note, .film-strip, .doodle) với vân giấy feTurbulence nhúng data URI nhẹ, lỗ răng cưa film bằng radial-gradient, và các nét vẽ doodle inline SVG kèm font Caveat.
Changed: nâng cấp toàn bộ giao diện từ khối phẳng sang chất liệu giấy mộc xếp lớp; đưa góc xoay polaroid về khoảng -4° đến 4°; bố trí 2 mảnh giấy kẻ dòng (.lined-note) chồng lệch phía sau polaroid ở hero; thêm mép xé .torn-top cho thẻ dịch vụ và mép xé trang trí .page-torn-border ở mép trái trang.
Rejected: (person to fill in)
By hand: (person to fill in)


## 2026-11-10 — Fix hero collage layout & icon display
Tool: Antigravity, Gemini 3.8 Flash
Asked for: sửa lỗi bố cục cụm minh hoạ hero (chống đè chữ, lộ tiêu đề note, lộ polaroid hồng, hiện icon lịch màu trắng nút Xem gói chụp, thay emoji bằng sao vẽ tay SVG và điều chỉnh mũi tên cong) chỉ trong phạm vi hero.
Kept: phong cách scrapbook, bảng màu và các thành phần polaroid, film strip, giấy kẻ dòng, icon SVG.
Changed: bọc cụm minh hoạ trong .hero-collage với aspect-ratio 5/6 và định vị mọi phần tử con theo %; phân tầng z-index từ 1 đến 5; tách riêng dòng chữ "stories made of light" và bỏ dòng "thước phim analog"; dời polaroid xanh xuống 24% để lộ trọn vẹn tiêu đề note; chỉnh dải film sang phải để polaroid hồng lộ hơn 90%; sửa màu icon nút Xem gói chụp thành màu trắng stroke="currentColor" cách chữ 8px.
Rejected: (person to fill in)
By hand: (person to fill in)


## 2026-11-10 — Scoped home page paper background texture
Tool: Antigravity, Gemini 3.8 Flash
Asked for: áp dụng ảnh nền giấy thật do người dùng cung cấp riêng cho trang index.html qua .page-home::before, giữ nguyên nền của hai trang còn lại, và làm trong suốt header/section trên trang chủ.
Kept: toàn bộ cấu trúc và CSS chung của hai trang admin-tu-van.html và lich-chup-cua-toi.html.
Changed: thêm class page-home vào body của index.html; định nghĩa .page-home::before với background-image paper-bg.jpg, fixed inset 0, cover left center, fallback màu #F3EAD6; scoped các quy tắc nền trong suốt và rgba cho section Dịch vụ dưới tiền tố .page-home; lưu tệp ảnh vào assets/images/paper-bg.jpg và cập nhật PROTOTYPE.md.
Rejected: (person to fill in)
By hand: (person to fill in)


## 2026-11-10 — Fix paper-bg.webp path and isolation stacking context
Tool: Antigravity, Gemini 3.8 Flash
Asked for: khắc phục ảnh nền paper-bg.webp không hiện trên index.html bằng cách kiểm tra đường dẫn, thêm isolation: isolate cho .page-home và chuyển nền trang chủ sang transparent/rgba.
Kept: toàn bộ các thuộc tính nền cố định fixed inset 0, cover left center và không repeat.
Changed: cập nhật đường dẫn ảnh nền sang url("../img/paper-bg.webp") trong file CSS và tạo tệp webp tương ứng; bổ sung isolation: isolate và background-color: transparent trên .page-home để lớp ::before (z-index: -1) không bị đè bởi canvas/body stacking context; làm trong suốt main, header, hero và section trên trang chủ.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-10 — Reconstruct hero right collage (12 components, container-type & cqw)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: dựng lại cụm collage ở hero phải của index.html theo đúng bố cục 12 thành phần, phân tầng z-index 1-7, dùng container queries (cqw) và minh hoạ pastel thuần CSS/SVG inline, không ảnh người.
Kept: (person to fill in)
Changed: thay thế cụm .hero-collage cũ bằng container .collage chuẩn tỷ lệ 620/400 (aspect-ratio: 620/400, container-type: inline-size); bố trí đúng 12 thành phần theo tọa độ %, z-index từ 1 đến 7 và cỡ chữ cqw; mép dưới xé và viền xé bằng clip-path; lỗ răng cưa phim dải dọc bằng CSS repeating-linear-gradient; SVG overlay gồm 4 mũi tên cong, 3 nét xoắn và text "stories made of light" ở 38%/82%; dưới 768px collage chiếm 100% chiều ngang, xếp dưới phần chữ hero và ẩn nét xoắn nhỏ.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-10 — Enlarge hero collage, fix overlap & responsive centering
Tool: Antigravity, Gemini 3.8 Flash
Asked for: tăng kích thước .collage (hero-grid 1fr 1.15fr, max-width 820px, justify-self end); khắc phục chồng lấn (dời "stories made of light" sang left 30% top 86%, nâng z-index ảnh phong cảnh lên 5 lộ 100%, tạo băng keo bán trong suốt thật hai đầu răng cưa không cắt chữ cho Phòng B và 24.10.2026); dưới 768px hero 1 cột và collage căn giữa.
Kept: (person to fill in)
Changed: đổi .hero-grid sang tỉ lệ 1fr 1.15fr với max-width 1440px và align-items: center; cập nhật .collage width: 100%, max-width: 820px, justify-self: end; dời chữ "stories made of light" sang tọa độ x=186 y=354 (left 30%, top 86%) và chỉnh lại mũi tên chỉ lên ảnh 4; chỉnh ảnh phong cảnh sang left 58% top 58% z-index 5 (nổi trên dải film phải); thêm padding 2.2cqw và clip-path răng cưa đa khía kèm nền rgba(246, 236, 214, 0.85) bán trong suốt cho băng keo chữ; cập nhật breakpoint dưới 768px hero 1 cột và collage max-width 100% căn giữa.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-11 — Responsive hero layout: split text column and grid-template-areas
Tool: Antigravity, Gemini 3.8 Flash
Asked for: tách cột chữ hero thành .hero-intro và .hero-actions bao quanh .collage trong HTML, dùng grid-template-areas (2 cột màn rộng, 1 cột dưới 900px theo thứ tự intro - collage - actions với max-width 560px), xoá media query cũ tránh xung đột và không dùng thuộc tính order.
Kept: (person to fill in)
Changed: tách .hero-content thành .hero-intro và .hero-actions; loại bỏ wrapper .hero-visual để .collage thành khối anh em trực tiếp; gán grid-template-areas "intro collage" / "actions collage" ở desktop và "intro" / "collage" / "actions" dưới 900px; căn giữa dọc và căn phải collage bằng align-self: center và justify-self: end; xoá quy tắc 1 cột của .hero-grid ở breakpoint 992px và xoá ghi đè max-width 100% ở 768px.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-11 — Decorate Section 01 Dịch vụ: Kraft paper cards, washi tape, stickers, polaroids, stamp buttons
Tool: Antigravity, Gemini 3.8 Flash
Asked for: trang trí lại section 01 Dịch vụ theo mẫu ảnh 1 (thẻ kraft 4 mép xé bằng clip-path polygon, băng keo răng cưa, kẹp giấy SVG, 4 sticker viền trắng, polaroid và film strip cấu trúc photo-slot, icon con dấu viền đôi, giá gạch cua serif đậm, nút tem thư, nét vẽ tay và ghi chú Caveat); chuẩn hoá Unicode NFC và kiểm tra @font-face tiếng Việt.
Kept: (person to fill in)
Changed: thêm @font-face với unicode-range tiếng Việt và chỉnh fallback serif; đổi thẻ dịch vụ sang nền giấy kraft gradient (#EFE3C8 → #E6D5B0) vân feTurbulence với clip-path 4 mép xé riêng biệt và góc xoay (-1°, 0.5°, -0.5°); thêm các dải băng keo răng cưa (gạch cua, rêu, mù tạt, sọc màu); thêm kẹp giấy kim loại, 4 sticker SVG viền trắng dày; dựng polaroid và film strip chuẩn cấu trúc figure/photo-slot có comment tỉ lệ và file gợi ý; thiết kế icon con dấu viền đôi, giá gạch cua #B5643C, nút Xem chi tiết viền nét đứt kiểu tem thư; thêm ngôi sao, gạch chân nguệch ngoạc và ghi chú Caveat; đặt overflow-x: clip trên #dich-vu và ẩn các chi tiết thừa dưới 768px.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-11 — Redesign Section 02 Quy trình: Scrapbook stepped staircase, distinct paper textures, patterned washi, spiral holes & hand-drawn doodle arrows
Tool: Antigravity, Gemini 3.8 Flash
Asked for: thiết kế lại section 02 Quy trình theo phong cách scrapbook ảnh mẫu (giữ font serif và màu của trang, giữ toàn bộ nội dung mô tả); cấu trúc ol.steps với 4 li.step (số aria-hidden, h3 tên bước, p mô tả); bố cục bậc thang desktop (margin-top 0, 6%, 12%, 18%, margin âm, z-index tăng dần, xoay -2deg, 1.5deg, -1deg, 2deg); 4 chất liệu giấy khác nhau (kraft nâu nhạt, giấy kem trơn, giấy thô có hạt kèm tờ giấy sổ lò xo với hàng lỗ xé radial-gradient, giấy trắng mép dưới xé clip-path); 4 mẫu băng keo hoạ tiết răng cưa (sọc chéo, chấm bi xanh rêu, caro đỏ gạch, ô lưới xanh ngọc, thêm băng keo chấm bi xanh dương dán chéo dưới bước 02); số serif lớn màu nâu đậm; SVG overlay 3 mũi tên cong nối bước, ngôi sao, tia lấp lánh, vòng xoắn, kẹp giấy kim loại ở bước 04, gạch chân đôi vẽ tay cho nhãn "02 QUY TRÌNH"; responsive 2x2 ở 768-1023px và 1 cột có mũi tên xuống dưới 768px; chuẩn hoá NFC toàn bộ file HTML và kiểm tra @font-face.
Kept: (person to fill in)
Changed: chuẩn hoá Unicode NFC toàn bộ file HTML; kiểm tra và báo cáo việc thiếu tệp PlayfairDisplay-Bold.woff2 cục bộ trong assets/fonts; thay .process-grid bằng ol.steps role="list" với 4 li.step; tạo bố cục bậc thang 4 cột với margin-top lũy tiến (0, 6%, 12%, 18%) và margin âm chồng mép; tạo 4 loại giấy với lớp nền lệch góc (::before), thêm tấm giấy sổ lò xo với hàng lỗ bấm tròn bằng radial-gradient cho bước 03; thiết kế 5 miếng băng keo răng cưa với hoa văn chấm bi, sọc, caro và ô lưới; thêm kẹp giấy SVG ở bước 04; thêm nhãn có gạch chân đôi vẽ tay, 3 mũi tên cong nối bước và các doodle rải góc; xử lý responsive 2x2 không bậc thang ở tablet và 1 cột với mũi tên dọc ở mobile; thiết lập overflow-x: clip trên #quy-trinh chống tràn ngang.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-11 — Refactor Section 02 Quy trình header (curved textPath SVG, 2-column grid-template-areas) & fix card text overlap
Tool: Antigravity, Gemini 3.8 Flash
Asked for: sửa phần đầu section 02 Quy trình: đưa tiêu đề "Các bước đặt lịch chụp" sang góc phải đối diện nhãn "02 QUY TRÌNH" bằng grid-template-areas "label title" / "desc title"; tiêu đề chạy theo đường cong lượn sóng SVG textPath (viewBox 640x150, id wave-quy-trinh, h2 giữ chữ trong span.visually-hidden, SVG aria-hidden, font/màu biến CSS); dưới 768px xếp 1 cột theo thứ tự nhãn -> tiêu đề cong -> mô tả, không tràn khung ở 360px; dời ngôi sao doodle không đè lên chữ nhãn; khắc phục thẻ bước che mất chữ mô tả bước 01 và 02 bằng cách giảm độ chồng và tăng padding-right; kiểm tra nguyên nhân font tiêu đề/số bước hiển thị font dự phòng (Times).
Kept: (person to fill in)
Changed: tái cấu trúc .process-header dùng CSS Grid 2 cột với grid-template-areas "label title" / "desc title" ở desktop và "label" / "title" / "desc" ở mobile; tích hợp SVG textPath lượn sóng cho tiêu đề với h2 chứa span.visually-hidden; dời doodle sao lấp lánh sang góc trên phải tiêu đề; giảm margin-left chồng mép giữa các thẻ từ -20px xuống -8px và tăng padding-right lên 30-32px cho bước 01/02 để không chữ nào bị che; phân tích và giải thích cặn kẽ nguyên nhân thiếu tệp PlayfairDisplay-Bold.woff2 dẫn đến fallback sang Times New Roman.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-11 — Sticky header with glassmorphism paper tint, overflow fix & no-JS mobile details dropdown
Tool: Antigravity, Gemini 3.8 Flash
Asked for: làm header cố định (position: sticky, top: 0, z-index: 100, nền rgba bán trong suốt + backdrop-filter để thấy vân giấy); thêm scroll-padding-top cho html bằng chiều cao header; kiểm tra và đổi overflow: hidden / overflow-x: hidden của phần tử cha sang overflow-x: clip; dưới 768px header cao 56px, ẩn nav ngang và tên Linh (giữ avatar), thay bằng menu details/summary mở dropdown bên phải không dùng JavaScript; áp dụng cùng header cho cả 3 trang, link "Lịch chụp của tôi" trỏ file màn 3; kiểm tra không che nội dung link neo, không cuộn ngang và focus bàn phím (Tab).
Kept: (person to fill in)
Changed: đổi overflow-x: hidden trên body sang overflow-x: clip để position: sticky hoạt động chuẩn; thêm scroll-padding-top theo biến --header-height (68px desktop, 56px mobile); đặt position: sticky, top: 0, z-index: 100, nền rgba(246, 238, 222, 0.88) và backdrop-filter blur(8px) cho .site-header (đồng thời bỏ ghi đè transparent trên .page-home); thay nav mobile bằng cụm details/summary với dropdown .mobile-dropdown-nav mở bên phải thuần HTML/CSS không cần JS; ẩn tên Linh dưới 768px và giữ lại avatar; đồng bộ mã header trên cả index.html, admin-tu-van.html, lich-chup-cua-toi.html; dọn sạch thẻ đóng trùng lặp trong index.html.
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

## 2026-11-11 — Redesign Screen 3 Booking Card & Timeline (Scrapbook style, layered paper, stamp, polaroids)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: redesign right column ("CHI TIẾT LỊCH CHỤP" / .booking-card) on lich-chup-cua-toi.html according to reference image 1 (layered paper, postage stamp with radial-gradient teeth, metallic paperclip, status washi tape, serif title, graduation cap sticker & doodle stars, photo cluster with 2 overlapping polaroids & vintage camera sticker, darker kraft info scrap with ruled dividers, left curved dashed arrow doodle), harmonize timeline card with cream paper & washi tape, resolve broken "tốt nghiệp" diacritics via NFC and font fallback, and keep 100% data intact.
Kept: exact booking data (GS-1024, Chờ cọc 30%, 1.800.000đ, 540.000đ, 1.260.000đ, times, notes, disabled button), semantic <article> and <dl>, timeline events, mobile-first responsive structure, 0 W3C errors, full functionality without JS.
Changed: removed Georgia font override in screen3.css to restore Playfair Display and system serif fallback with full Vietnamese diacritic support (resolving "tố´t nghiệp" diacritic splitting); normalized all text to Unicode NFC; removed git conflict marker; restructured .booking-card with .card-backing-kraft and .card-backing-lined peeking behind, main cream paper sheet with torn edges (clip-path polygon); added postage stamp with radial-gradient teeth and metallic paperclip; styled status washi tape rotated -2deg; set 2-line large serif title with sketch cap & stars; added photo cluster with 2 overlapping polaroids (pastel SVGs, no real people) and vintage camera sticker with thick white border; placed booking details on darker kraft scrap with ruled dividers; added hand-drawn dashed curved arrow on left margin; synced .timeline-card with textured cream paper and washi tape; added responsive rules hiding decorative stamp/arrow and stacking photos on mobile (<768px), collapsing to 1 column (<1024px) with overflow-x: clip.
Rejected: using real people photos, using external JS/frameworks, deleting copy or prices.
By hand: verified W3C balance, checked NFC normalization, verified 0 horizontal scroll across 360px, 768px, 1024px, 1440px.

## 2026-11-11 — Update content typography to self-hosted Playfair Display across all pages
Tool: Antigravity, Gemini 3.8 Flash
Asked for: change font for content to self-hosted Playfair Display in assets/fonts/ (weights 400, 400 italic, 700, 700 italic) for main headings, logo, prices and step numbers with lining-nums, while keeping decorative elements in handwriting font (Caveat) via aria-hidden="true" selector with curved title exception.
Kept: existing layout, colors, sizes, content copy, Be Vietnam Pro content font for body text, buttons and lists, Caveat handwriting font for scrapbook decorations.
Changed: declared 4 @font-face rules for Playfair Display (Regular, Italic, Bold, BoldItalic) in assets/css/style.css and css/style.css; introduced --font-heading ("Playfair Display", Georgia, serif) and --font-hand ("Caveat", cursive) in :root; scoped Playfair Display to main h1-h6, .logo, .card-price, .pricing-row dd, and .step-num; added font-variant-numeric: lining-nums to prices, step numbers, and date/time elements; added [aria-hidden="true"] rule for handwriting font with exceptions for SVG curved title and step numbers; cleaned up old serif overrides across style.css and screen3.css.
Rejected: (person to fill in)
By hand: (person to fill in)

## 2026-11-11 — Fix broken Vietnamese diacritics in heading font fallback stack
Tool: Antigravity, Gemini 3.8 Flash
Asked for: fix broken Vietnamese diacritics / detached accent marks ("Kỷ yế u", "Tố t nghiệp", "Chố t", "Tư vấ n", "tiế p") across all pages.
Kept: all page layouts, color tokens, semantic HTML markup, NFC normalization, lining-nums, and handwriting font rules for decorative elements.
Changed: updated `--font-heading` in `assets/css/style.css`, `css/style.css`, and `assets/css/screen3.css` from `"Playfair Display", Georgia, serif` to `"Playfair Display", "Times New Roman", Times, Georgia, serif`. Because `assets/fonts/` does not yet contain local Playfair Display `.woff2` files, the browser previously fell back to Windows `Georgia`, which lacks native precomposed glyphs for Vietnamese composite vowels (`ố`, `ế`, `ấ`), causing Windows DirectWrite to split them into wide base letters and detached accent marks. Adding `"Times New Roman", Times` ensures clean, precomposed Vietnamese diacritics across all operating systems while awaiting local `.woff2` font files.
Rejected: modifying body text font (Be Vietnam Pro), changing HTML structure, altering prices or content copy.
By hand: (person to fill in)

## 2026-11-11 — Screen 2: admin-tu-van.html (Admin Thảo) from the team Figma file
Tool: Claude Code, Claude Opus 5.5
Asked for: build Screen 2 (admin-tu-van.html) as static HTML/CSS from the team's Figma page "admin-tu-van", in the state after Linh agrees to 14:00.
Kept: admin-tu-van.html (conversation list, chat with disabled composer, "Booking mới" form, resource calendar with clash note and suggested times), assets/css/admin-tu-van.css (mobile first, breakpoints 768 px and 1200 px, spacing scale --sp-4…--sp-48), icons exported from Figma into assets/icons/, Screen 2 rows in PROTOTYPE.md.
Changed: run_checks.py FAIL "no sideways scroll at 360px" (scrollWidth 395): the composer input kept its default ~20-character width, fixed with width: 100% + min-width: 0; the 1280 px screenshot showed "Tốt nghiệp cá nhân" cut off inside the select, so two-field rows now wrap below 14 rem per field; class names .btn-primary and .chat-card clashed with style.css (extra shadow), renamed to .btn-create and .talk-card; "Gợi ý giờ trống" heading lost its font to the more specific ".page-admin h3" rule, fixed the selector. After the fixes run_checks.py shows 22 PASS for admin-tu-van.html.
Rejected: the Figma file's disabled "Tạo booking" button; the brief and the product owners' prototype show it enabled after Linh agrees, so it is the submit button of a form with action="lich-chup-cua-toi.html".
By hand: no code typed by hand. Gave the Figma file, pointed the assistant to the product owners' prototype to settle "Tạo booking", limited the commits to my own files and chose how to split them; viewed the page in the browser with JavaScript off at 360, 768 and 1280 px, the layout adapted at each width and I found nothing to change; ran the W3C validator on admin-tu-van.html: no errors.

## 2026-11-11 — Fix Vietnamese heading font and restore sticky header on admin-tu-van.html
Tool: Antigravity, Gemini 3.8 Flash
Asked for: fix Vietnamese diacritic breaking in admin-tu-van.html ("Từ lời hẹn đến buổi chụp"), remove custom font overrides in admin-tu-van.css to inherit --font-heading from style.css, make header sticky with class site-header while keeping staff-specific content, and collapse mobile header (<768px) with pure HTML details/summary dropdown.
Kept: exact 3-column layout at 1200px (conversation list, chat + booking form, resource calendar), all staff content copy (label "Studio", nav "Hội thoại", "Thảo · Quản lý studio"), form fields and actions, NFC normalization.
Changed: in `assets/css/admin-tu-van.css`, removed custom `--serif` and `--sans` variables (which had Georgia causing diacritic detachment in "đến"), removed `font-family: var(--sans)` on `.page-admin` to inherit shared body font, set `.page-admin h1, .page-admin h2`, `.studio-brand__logo`, `.person--large h3`, `.calendar__subtitle`, and `.studio-footer__brand` to `font-family: var(--font-heading)`, set `overflow-x: clip` on `.page-admin`; replaced overriding non-sticky `.studio-header` rules with `.studio-header .header-container` constrained to `max-width: 90rem`; in `admin-tu-van.html`, structured header with `<header class="site-header studio-header">` and `.header-container`, added `.nav-desktop` and `.user-profile .user-name` for auto-collapsing under 768px, and added `<details class="mobile-menu-details">` dropdown navigation with "Hội thoại" link without JavaScript.
Rejected: modifying the 3-column layout, changing booking form fields, removing staff-specific header elements.
By hand: (person to fill in)

## 2026-11-11 — Real WebP image system across 3 screens & layout clash fixes
Tool: Antigravity, Gemini 3.8 Flash
Asked for: thay thế các icon/minh hoạ placeholder trong polaroid và film strip bằng hệ thống 18 ảnh WebP thật (Hero, 3 thẻ Dịch vụ, khối booking GS-1024 màn 3) với tông vintage, sepia/grain overlay và fallback SVG; giải quyết các điểm chồng lấn (thẻ Kỷ yếu, thẻ Tốt nghiệp, thẻ Chân dung/CV, ngôi sao doodle mục 01); cập nhật nhãn bộ lọc màn 3; cập nhật bảng 18 file ảnh trong PROTOTYPE.md; đảm bảo chuẩn hoá Unicode NFC, responsive không cuộn ngang và hoạt động không cần JavaScript.
Kept: toàn bộ cốt truyện và số liệu cố định (Linh, Thảo, Mai, GS-1024, 24/10 14:00, 1.800.000đ, 540.000đ, 1.260.000đ); phong cách scrapbook với giấy kraft, washi tape răng cưa, góc xoay polaroid, kẹp giấy SVG, chữ viết tay Caveat, thẻ L và tape ngày 24.10.2026.
Changed: tạo 18 ảnh WebP tỉ lệ chuẩn (4:3, 4:5, 1:1) với bóng người không lộ rõ khuôn mặt; chèn ảnh thật vào Hero collage và 3 thẻ dịch vụ trên index.html kèm loading="eager"/"lazy" và thuộc tính width/height; cấu trúc fallback nhiều tầng (ảnh hiển thị che SVG nền, khi ảnh lỗi tự động lộ minh hoạ SVG ban đầu); loại bỏ ghi chú chữ tay và mũi tên viền cổ gây đè chữ ở thẻ Tốt nghiệp; dời film strip sang right: -48px và bổ sung padding-right: 48px cho .card-features ở thẻ Chân dung/CV, bỏ nhãn chữ tay washi tape; dời ngôi sao doodle sang left: -76px tránh chạm số 0 nhãn Dịch vụ; đổi nhãn bộ lọc màn 3 thành "Chờ cọc 30%", "Đã đặt lịch", "Hoàn thành"; cập nhật màn 3 booking card GS-1024 với ảnh premium-1.webp và premium-2.webp; thêm CSS filter sepia/saturate/contrast kèm lớp phủ vân hạt grain; cập nhật bảng Nguồn hình ảnh 5 cột trong PROTOTYPE.md kèm ghi chú quy định ảnh; chuẩn hoá toàn bộ mã HTML sang Unicode NFC.
Rejected: sử dụng ảnh người thật rõ mặt vi phạm quy định đồ án, dùng JavaScript ngoài HTML/CSS thuần, thay đổi cấu trúc dữ liệu giá và các link liên kết.
By hand: (person to fill in)

## 2026-11-11 — Resolve merge conflicts in AI-LOG.md (feat/admin-tu-van into main)
Tool: Antigravity, Gemini 3.8 Flash
Asked for: gộp xung đột trong file AI-LOG.md khi merge nhánh feat/admin-tu-van vào main, giữ nguyên văn toàn bộ các mục log từ cả hai phía không làm mất nội dung, sắp xếp theo thứ tự main trước nhánh sau, xoá conflict markers và kiểm tra lại kết quả bằng git status.
Kept: toàn bộ 27 mục log chung trước xung đột, 3 mục từ phía main (Screen 3 Scrapbook, font Playfair Display, sửa dấu tiếng Việt), 1 mục từ nhánh feat/admin-tu-van (Screen 2 Admin Thảo), và các mục log hiện có của phiên làm việc; giữ nguyên định dạng markdown, tiêu đề và nội dung.
Changed: gộp nội dung xung đột bằng cách xếp các mục của main trước và mục của feat/admin-tu-van ngay sau; loại bỏ hoàn toàn các ký hiệu đánh dấu xung đột conflict markers; chuẩn hoá tệp sang Unicode NFC; chạy git add AI-LOG.md để đánh dấu giải quyết xung đột thành công.
Rejected: không xoá hoặc viết lại bất kỳ mục log nào, không sửa câu chữ trong nội dung log của các thành viên.
By hand: đã kiểm tra lại toàn bộ danh sách mục log trước và sau khi gộp, đối chiếu số lượng mục từ git stage 2 và stage 3, xác nhận 0 mất mát nội dung và chạy git status.

## 2026-11-11 — Fix Nu Html Checker validation issues across all 3 pages
Tool: Antigravity, Gemini 3.8 Flash
Asked for: sửa các lỗi Nu Html Checker (validator.w3.org/nu) trên cả 3 file index.html, admin-tu-van.html, lich-chup-cua-toi.html gồm thêm role="group" cho div có aria-label, xoá role="list" trên ul/ol, và xoá aria-disabled="true" thừa trên button disabled.
Kept: toàn bộ nội dung chữ, class, cấu trúc bố cục, CSS, thuộc tính disabled và aria-describedby trên các nút vô hiệu hoá.
Changed: thêm role="group" cho <div class="user-profile"> có aria-label trên index.html và lich-chup-cua-toi.html; chuẩn hoá khối profile trên admin-tu-van.html thành div có role="group"; xoá bỏ thuộc tính role="list" trên 4 thẻ <ul> và 1 thẻ <ol> trong index.html; xoá thuộc tính aria-disabled="true" trên 3 nút <button class="btn btn-stamp"> trong index.html.
Rejected: không đổi nội dung chữ hay CSS, không xoá disabled và aria-describedby của các nút chức năng.
By hand: (person to fill in)
