# GradStudio

Đồ án cuối kỳ CSC13008 · CQ2024/31 · HK1 2026–27.
Website studio ảnh tốt nghiệp & chân dung: tư vấn qua chat, kiểm tra trùng lịch nhân sự/tài nguyên, đặt cọc 30%, chọn ảnh và nhận file trong cùng một booking.

## Thành viên

| Họ tên            | MSSV     | Vai trò chính                                           |
| ----------------- | -------- | ------------------------------------------------------- |
| Lê Hoàng Hiếu     | 24120048 | Màn 2 – Tư vấn & xử lý trùng lịch (`admin-tu-van.html`) |
| Lê Nguyễn Gia Huy | 24120061 | Màn 3 – Lịch chụp của tôi (`lich-chup-cua-toi.html`)    |
| Nguyễn Anh Sang   | 24120131 | Khung repo, Màn 1 (`index.html`), CSS dùng chung        |

## Cấu trúc thư mục

```
/            index.html (trang đầu), các trang tĩnh PA#2
/assets      css, hình minh hoạ, font
/docs        PLAN.md, ghi chú, câu trả lời của product owner (có trích dẫn)
PROTOTYPE.md Nguồn hình ảnh, cách chạy, danh sách trang
```

## Cách chạy (PA#2: trang tĩnh)

Mở `index.html` trực tiếp, hoặc chạy `python -m http.server 8000` rồi vào http://localhost:8000.

## Quy ước làm việc

- Nhánh `main` luôn chạy được; không push trực tiếp lên `main`.
- Mỗi việc một nhánh: `feat/man-1-dich-vu`, `fix/chat-che-noi-dung`...
- Mở Pull Request, ít nhất 1 bạn khác review rồi mới merge.
- Commit rõ nghĩa, ví dụ: `feat: thêm trang Lịch chụp của tôi`.
- Mỗi việc là một Issue, gán người phụ trách và milestone (PA#2, PA#3...).
- Khi dựa vào quyết định của product owner, ghi link bài Facebook vào `docs/DECISIONS.md`.

## Câu chuyện mẫu (dùng thống nhất trên mọi trang)

Linh, tốt nghiệp cá nhân, thứ Bảy 24/10/2026. Makeup 13:00–14:00 với Mai, chụp 14:00–16:00 với Tuấn ở Phòng B (09:00 trùng vì Mai bận 08:00–12:00). Booking GS-1024, Gói Tốt nghiệp Premium (2 giờ, 30 ảnh chỉnh), 1.800.000đ, cọc 540.000đ, còn lại 1.260.000đ. Admin: Thảo.
