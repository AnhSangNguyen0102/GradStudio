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

