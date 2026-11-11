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


