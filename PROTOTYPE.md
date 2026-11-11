# PROTOTYPE.md

## Cách mở

Mở `index.html` (trang đầu). Các trang: (điền tên file khi làm xong)

| Màn | File | Vai trò | Trạng thái hiển thị |
|---|---|---|---|
| 1 – Dịch vụ & chat | index.html | Khách hàng | Câu hỏi của Linh trong chat |
| 2 – Tư vấn & xử lý trùng lịch | admin-tu-van.html | Admin Thảo | Linh đã đồng ý 14:00, cuộc trò chuyện "Đã chốt lịch", nút Tạo booking bật |
| 3 – Xem lịch & đặt cọc | lich-chup-cua-toi.html | Khách hàng | GS-1024 "Chờ cọc 30%" |

## Nguồn hình ảnh

Không dùng ảnh người thật. Toàn bộ hình ảnh là minh họa vector inline SVG và CSS polaroid/film-strip tự dựng, avatar dùng chữ cái đầu tên:

| Ảnh | Nguồn (URL) | Giấy phép |
|---|---|---|
| Minh họa mũ tốt nghiệp, máy ảnh, icon dịch vụ | Tự thiết kế vector inline SVG | Tự làm |
| Cụm polaroid & dải film analog | Tự tạo bằng CSS thuần (scrapbook style) | Tự làm |
| Nền giấy vintage mép xé (assets/img/paper-bg.webp) | Người dùng cung cấp (texture giấy mộc, không có người) | Tự do sử dụng đồ án |
| Icon màn 2 (assets/icons/*.svg: lịch, đồng hồ, cảnh báo, dấu kiểm, kẹp giấy, mũi tên…) | Bộ icon Lucide (https://lucide.dev), xuất từ file Figma của nhóm (trang "admin-tu-van"); tên và nét vẽ trùng bản gốc, ví dụ `clock-3`, `arrow-up-right` | ISC (https://github.com/lucide-icons/lucide/blob/main/LICENSE) |

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
