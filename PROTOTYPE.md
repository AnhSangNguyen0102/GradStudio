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

## Nút bị vô hiệu hoá (chưa có trang ở PA#2)

Liệt kê nút đã disable kèm ghi chú hiển thị cho người dùng:
- Xem chi tiết (các gói Dịch vụ) – ghi chú: "Chưa có ở bản này" (id `note-pkg-1`, `note-pkg-2`, `note-pkg-3` liên kết qua `aria-describedby`)
- Gửi tin nhắn & đính kèm file (Khung Chat) – ghi chú: "Gửi tin nhắn chưa khả dụng ở bản PA#2" (id `chat-disabled-note` liên kết qua `aria-describedby`)
- Thanh toán cọc 30% – ghi chú: (ở màn lịch chụp của tôi)

## Trích dẫn quyết định của product owner

Xem `docs/DECISIONS.md`.
