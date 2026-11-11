# PROTOTYPE.md – GradStudio PA#2

## 1. Team

| Họ tên | MSSV | Phụ trách chính |
|---|---|---|
| Lê Hoàng Hiếu | 24120048 | Màn 2 `admin-tu-van.html` (Admin Thảo), icon màn 2 |
| Lê Nguyễn Gia Huy | 24120061 | Màn 3 `lich-chup-cua-toi.html` |
| Nguyễn Anh Sang | 24120131 | Khung repo, màn 1 `index.html`, CSS dùng chung `style.css` |

## 2. How to open

Mở `index.html` trực tiếp bằng trình duyệt (double-click), hoặc chạy `python3 -m http.server 8000` rồi vào http://localhost:8000.
**Không cần mạng**: không CDN, không framework, không JavaScript. Font Playfair Display được nhúng sẵn trong `assets/fonts/`; các font còn lại dùng font hệ thống. Mọi nội dung hiện đủ khi tắt JavaScript.

## 3. Screens

Thứ tự theo luồng chính: dịch vụ & chat → tư vấn & xử lý trùng lịch → xem lịch & đặt cọc.

| File | Màn trong brief | Người dùng làm gì ở đây | Các link và trang chúng mở |
|---|---|---|---|
| `index.html` | Screen 1 – Services and chat (khách hàng) | Xem 3 gói (Kỷ yếu lớp từ 350.000đ/người, Tốt nghiệp từ 1.800.000đ, Chân dung/CV từ 690.000đ), xem quy trình 4 bước (chỉ giữ lịch sau khi cọc), đọc chat: Linh hỏi lịch 24/10 lúc 09:00, studio trả lời sẽ kiểm tra | **"Nhân viên studio: mở cuộc trò chuyện này"** (dưới khung chat và ở footer) → `admin-tu-van.html`; "Lịch chụp của tôi" (menu) → `lich-chup-cua-toi.html`; logo → `index.html`; "Dịch vụ", "Quy trình", "Xem gói chụp", "Chat với studio" → mục tương ứng trên cùng trang |
| `admin-tu-van.html` | Screen 2 – Advice and clash handling (Admin Thảo) | Trạng thái **sau khi Linh đồng ý**: danh sách hội thoại, chat "Đã chốt lịch" 14:00, form "Booking mới" điền sẵn, lịch tài nguyên kèm cảnh báo 09:00 trùng (Mai bận 08:00–12:00) và gợi ý giờ trống | **"Tạo booking"** (nút submit, `action="lich-chup-cua-toi.html"`) → `lich-chup-cua-toi.html`; "Khách hàng: xem Lịch chụp của tôi" → `lich-chup-cua-toi.html`; logo → `index.html`; "Hội thoại" → chính trang này; "Booking mới" → form trên cùng trang |
| `lich-chup-cua-toi.html` | Screen 3 – Review the appointment and pay the deposit (khách hàng) | Xem GS-1024 "Chờ cọc 30%": tuần đánh dấu 24/10, 09:00 bị gạch, makeup 13:00–14:00 với Mai, chụp 14:00–16:00 với Tuấn ở Phòng B; giá 1.800.000đ, cọc 540.000đ, còn lại 1.260.000đ; nút "Thanh toán cọc 30%" | "Quản lý studio: xem lại cuộc trò chuyện" → `admin-tu-van.html`; logo → `index.html`; "Dịch vụ", "Quy trình" → `index.html#dich-vu`, `index.html#quy-trinh` |

Mọi link là link tương đối tới file (`admin-tu-van.html`), không có `href="#"`, không có link trống.

## 4. Our design choices

- **Phong cách scrapbook / film-journal** (giấy kem, polaroid, washi tape, nét vẽ tay) bằng CSS và SVG. Chữ viết tay chỉ để trang trí, không dùng cho nhãn, nút hay thông tin quan trọng.
- **Màn 1 gộp dịch vụ, quy trình và chat vào một trang dài.** Lý do: khách đọc gói, hiểu rằng lịch chỉ được giữ sau khi cọc, rồi hỏi ngay trong chat. Chat nằm trong luồng trang, không nổi, không che nội dung ở 360 px.
- **Màn 2 có 3 cột từ 1200 px** (hội thoại | chat + Booking mới | lịch tài nguyên). Từ 768 px: một cột, nhưng danh sách hội thoại chia 2 cột và form để 2 trường/hàng. Ở điện thoại: một cột. Không cột nào có thanh cuộn riêng: cả trang cuộn một lần.
- **"Tạo booking" đang bật.** File Figma của nhóm vẽ nút này tắt, nhưng brief yêu cầu nút bật sau khi Linh đồng ý, nên nhóm làm theo brief.
- **Ngày, giờ, khách và phân công là ô chỉ đọc** (viền nét đứt), vì chúng đã thống nhất trong chat; đổi giờ phải hỏi lại khách.
- **Lịch tài nguyên:** từ 768 px có thanh giờ 08:00–17:00 (trang trí, `aria-hidden`); dưới mỗi thanh là thẻ chữ đầy đủ. Ở điện thoại chỉ còn danh sách dọc theo giờ. Trùng lịch luôn có icon + chữ, không chỉ dựa vào màu.
- **Màn 3 có 2 cột từ 1024 px** (lịch tuần + timeline | thẻ booking). Thẻ booking hiện "Chờ cọc 30%" và nói rõ studio chỉ giữ lịch sau khi cọc thành công.
- **Header cuộn cùng trang** (không `sticky`/`fixed`). Ở điện thoại, menu là `<details>`, nên mở được khi tắt JavaScript.
- **Avatar dùng chữ cái đầu** (L, T); không có ảnh người thật.

## 5. Not wired yet

Các điều khiển dẫn ra ngoài 3 màn: nhóm để dạng nút `disabled` kèm ghi chú hiển thị, liên kết bằng `aria-describedby`.

| Trang | Điều khiển | Ghi chú hiển thị (id) |
|---|---|---|
| `index.html` | 3 nút "Xem chi tiết" của gói | "Chưa có ở bản này" (`note-pkg-1`, `note-pkg-2`, `note-pkg-3`) |
| `index.html` | Ô nhập, nút đính kèm, nút gửi tin nhắn | "Gửi tin nhắn chưa khả dụng ở bản PA#2" (`chat-disabled-note`) |
| `admin-tu-van.html` | Bộ lọc "Tất cả / Chưa trả lời / Đang tư vấn" | "Bộ lọc chưa có ở bản PA#2…" (`filter-note`) |
| `admin-tu-van.html` | Ô soạn tin và nút gửi | "Gửi tin nhắn chưa khả dụng ở bản PA#2. Lịch đã chốt, tiếp tục ở Booking mới bên dưới." (`chat-note`) |
| `lich-chup-cua-toi.html` | Bộ lọc "Tất cả / Chờ cọc 30% / Đã đặt lịch / Hoàn thành" | "Bộ lọc chưa có ở bản PA#2, trang đang hiện booking Chờ cọc 30%." (`filter-note`) |
| `lich-chup-cua-toi.html` | "Thanh toán cọc 30%" | "Cổng thanh toán chưa khả dụng ở bản PA#2." (`cta-note`) |

Không làm (theo danh sách "Fix these" và phạm vi PA#2): tìm kiếm, cài đặt, đăng xuất, các mục Booking / Lịch studio / Tài nguyên / Nhân sự / Xem đường đi / Ảnh đã chọn. Các mục này đã được bỏ khỏi trang, không để link chết.

## 6. CSS

- **CSS thuần, không framework.** Có 3 file: `assets/css/style.css` (dùng chung: nền, header, footer, màn 1), `assets/css/admin-tu-van.css` (màn 2) và `assets/css/screen3.css` (màn 3), nạp sau `style.css`.
- **Thang khoảng cách:** 4 / 8 / 12 / 16 / 24 / 32 / 48 px (+ 64 và 80 cho khoảng giữa các section). `style.css` đặt tên `--space-2xs … --space-3xl`; màn 2 và màn 3 dùng cùng các bước đó, đặt tên `--sp-4 … --sp-64`. Mọi `padding`, `margin`, `gap` đều dùng biến của thang. Ngoại lệ có chủ đích:
  - `cqw` trong collage hero: co giãn theo khung ảnh;
  - `%` ở bậc thang Quy trình;
  - hai khoảng âm `-1px` để chồng viền.
- **Breakpoint (mobile first ở màn 2 và 3):**
  - Màn 2: 768 px, 1200 px.
  - Màn 3: 768 px, 1024 px, 1440 px.
  - `style.css`: 768 px (điện thoại | máy tính bảng), 1024 px (máy tính bảng | laptop), 600 px (thẻ gói 2 cột); 769–1279 px và dưới 1440 px kéo hoặc ẩn các trang trí treo ngoài mép thẻ; thêm 420 px và 900 px cho vài chi tiết trang trí.
- **Không width cố định cho khung trang**, chỉ `max-width`. Ảnh dùng `max-width: 100%`.
- **Không `!important`.**
- **Chữ nội dung tối thiểu 16 px**; chữ nhỏ hơn chỉ dùng cho nhãn phụ (giờ gửi, mã, chip).
- **Nút và link đứng riêng cao tối thiểu 44 px** ở 360 px.

## Nguồn hình ảnh

Không có ảnh người thật. Avatar dùng chữ cái đầu tên.

| File | Nơi dùng | Nguồn | Giấy phép |
|---|---|---|---|
| Minh hoạ mũ tốt nghiệp, máy ảnh, sticker, icon dịch vụ (inline SVG trong HTML) | Màn 1, màn 3 | Nhóm tự vẽ vector inline SVG | Tự làm |
| Khung polaroid, dải film, washi tape, giấy xé | Cả 3 trang | Nhóm tự dựng bằng CSS | Tự làm |
| `assets/img/paper-bg.webp` (nền giấy mộc, không có người) | Nền màn 1 | Người dùng cung cấp (texture giấy mộc) | Tự do sử dụng đồ án |
| 18 ảnh minh hoạ WebP: `assets/img/hero/*.webp` (9), `assets/img/services/*.webp` (7), `assets/img/booking/premium-1.webp`, `premium-2.webp` | Polaroid và dải film ở hero, 3 thẻ dịch vụ, thẻ booking GS-1024 | Minh hoạ phẳng (icon trong khung, không có người), tạo bằng Antigravity (Gemini 3.8 Flash) theo AI-LOG mục "2026-11-11 — Real WebP image system across 3 screens" | Nhóm tự tạo cho đồ án |
| Icon màn 2 `assets/icons/*.svg` (lịch, đồng hồ, cảnh báo, dấu kiểm, kẹp giấy, mũi tên, trạng thái hội thoại) | Màn 2 | Bộ icon Lucide (https://lucide.dev), xuất từ file Figma của nhóm (trang "admin-tu-van"); tên và nét vẽ trùng bản gốc, ví dụ `clock-3`, `arrow-up-right` | ISC (https://github.com/lucide-icons/lucide/blob/main/LICENSE) |
| Font Playfair Display `assets/fonts/*.woff2` | Tiêu đề, cả 3 trang | Fontsource (`@fontsource-variable/playfair-display` 5.1.0), gốc từ https://github.com/clauseggers/Playfair-Display | SIL OFL 1.1 (`assets/fonts/OFL-PlayfairDisplay.txt`) |

## Trích dẫn quyết định của product owner

Xem `docs/DECISIONS.md` (chưa có câu trả lời nào của product owner mà nhóm dựa vào).
