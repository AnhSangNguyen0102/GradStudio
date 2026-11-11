# PROTOTYPE.md

## Cách mở

Mở `index.html` (trang đầu). Các trang: (điền tên file khi làm xong)

| Màn | File | Vai trò | Trạng thái hiển thị |
|---|---|---|---|
| 1 – Dịch vụ & chat | index.html | Khách hàng | Câu hỏi của Linh trong chat |
| 2 – Tư vấn & xử lý trùng lịch | admin-tu-van.html | Admin Thảo | Linh đã đồng ý 14:00, cuộc trò chuyện "Đã chốt lịch", nút Tạo booking bật |
| 3 – Xem lịch & đặt cọc | lich-chup-cua-toi.html | Khách hàng | GS-1024 "Chờ cọc 30%" |

## Nguồn hình ảnh

> Avatar dùng chữ cái đầu. Ảnh chọn không thấy rõ mặt người.

| File | Trang / vị trí | Tác giả | URL nguồn | Giấy phép |
|---|---|---|---|---|
| `assets/img/hero/polaroid-camera.webp` | Hero (polaroid trên cùng bên trái – 4:3) | | | Tự do sử dụng đồ án |
| `assets/img/hero/card-phong-b.webp` | Hero (thẻ "Phòng B" góc trên phải – 4:3) | | | Tự do sử dụng đồ án |
| `assets/img/hero/polaroid-small.webp` | Hero (polaroid nhỏ phía sau film strip trái – 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/hero/strip-left-1.webp` | Hero (film strip trái – ô 1, 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/hero/strip-left-2.webp` | Hero (film strip trái – ô 2, 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/hero/strip-left-3.webp` | Hero (film strip trái – ô 3, 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/hero/strip-right-1.webp` | Hero (film strip phải – ô 1, 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/hero/strip-right-2.webp` | Hero (film strip phải – ô 2, 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/hero/strip-right-3.webp` | Hero (film strip phải – ô 3, 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/services/ky-yeu-1.webp` | Thẻ Kỷ yếu lớp (polaroid lớn bên trái – 4:5) | | | Tự do sử dụng đồ án |
| `assets/img/services/ky-yeu-2.webp` | Thẻ Kỷ yếu lớp (polaroid nhỏ bên phải – 4:5) | | | Tự do sử dụng đồ án |
| `assets/img/services/tot-nghiep.webp` | Thẻ Tốt nghiệp (polaroid trung tâm – 4:5) | | | Tự do sử dụng đồ án |
| `assets/img/services/chan-dung.webp` | Thẻ Chân dung/CV (polaroid lớn – 4:5) | | | Tự do sử dụng đồ án |
| `assets/img/services/cv-strip-1.webp` | Thẻ Chân dung/CV (film strip dọc – ô 1, 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/services/cv-strip-2.webp` | Thẻ Chân dung/CV (film strip dọc – ô 2, 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/services/cv-strip-3.webp` | Thẻ Chân dung/CV (film strip dọc – ô 3, 1:1) | | | Tự do sử dụng đồ án |
| `assets/img/booking/premium-1.webp` | Màn 3 Lịch chụp của tôi: Khối booking GS-1024 (polaroid trước – 4:5) | | | Tự do sử dụng đồ án |
| `assets/img/booking/premium-2.webp` | Màn 3 Lịch chụp của tôi: Khối booking GS-1024 (polaroid sau – 4:3) | | | Tự do sử dụng đồ án |

## Nút bị vô hiệu hoá (chưa có trang ở PA#2)

Liệt kê nút đã disable kèm ghi chú hiển thị cho người dùng:
- Xem chi tiết (các gói Dịch vụ) – ghi chú: "Chưa có ở bản này" (id `note-pkg-1`, `note-pkg-2`, `note-pkg-3` liên kết qua `aria-describedby`)
- Gửi tin nhắn & đính kèm file (Khung Chat) – ghi chú: "Gửi tin nhắn chưa khả dụng ở bản PA#2" (id `chat-disabled-note` liên kết qua `aria-describedby`)
- Thanh toán cọc 30% – ghi chú: (ở màn lịch chụp của tôi)
- Màn 2 (admin-tu-van.html), bộ lọc hội thoại "Tất cả / Chưa trả lời / Đang tư vấn" – ghi chú: "Bộ lọc chưa có ở bản PA#2, danh sách đang hiện tất cả." (id `filter-note`, liên kết qua `aria-describedby`)
- Màn 2, ô soạn tin và nút gửi tin nhắn – ghi chú: "Gửi tin nhắn chưa khả dụng ở bản PA#2. Lịch đã chốt, tiếp tục ở Booking mới bên dưới." (id `chat-note`)

## Màn 2 – liên kết và lựa chọn thiết kế

- "Tạo booking" là nút submit **đang bật** của form Booking mới, `action="lich-chup-cua-toi.html"`: brief yêu cầu nút này bật sau khi Linh đồng ý, nên nó mở màn 3 (GS-1024 "Chờ cọc 30%"). File Figma vẽ nút này tắt; nhóm làm theo brief.
- "Khách hàng: xem Lịch chụp của tôi" → `lich-chup-cua-toi.html`; logo GradStudio → `index.html`; "Booking mới" trong ghi chú chat → `#booking-moi` trên cùng trang.
- Header không cố định (không `sticky`) và không có các mục Booking, Lịch studio, Tài nguyên, Nhân sự (danh sách "Fix these").
- Lịch tài nguyên: từ 768 px có thanh giờ 08:00–17:00 (trang trí, `aria-hidden`), dưới mỗi thanh là thẻ chữ đầy đủ; dưới 768 px chỉ còn danh sách dọc. Trùng lịch luôn có icon + chữ, không chỉ dựa vào màu.
- Ngày, giờ, khách hàng và phân công là ô chỉ đọc (viền nét đứt) vì đã thống nhất trong chat; đổi giờ phải hỏi lại khách.
- CSS: `assets/css/admin-tu-van.css` (CSS thuần, nạp sau `style.css`). Thang khoảng cách 4/8/12/16/24/32/48 px (`--sp-*`); breakpoint 768 px và 1200 px (3 cột).

## Trích dẫn quyết định của product owner

Xem `docs/DECISIONS.md`.
