# Kết quả kiểm tra – PA#2 GradStudio

Ngày kiểm tra: 11/11/2026

## 1. Kiểm tra HTML bằng Nu Html Checker

- Công cụ: Nu Html Checker của W3C – <https://validator.w3.org/nu/> (phiên bản vnu 26.11.10)
- Cách kiểm tra: chọn **Check by: file upload**, tải lên từng file HTML, bật **outline** và **errors & warnings only**

| Trang | File | Error | Warning | Kết quả | Bằng chứng |
|---|---|---|---|---|---|
| Screen 1 – Dịch vụ & chat | `index.html` | 0 | 0 | Đạt | `checks/validator-index.png` |
| Screen 2 – Tư vấn & xử lý trùng lịch (Admin) | `admin-tu-van.html` | 0 | 0 | Đạt | `checks/validator-admin-tu-van.png` |
| Screen 3 – Lịch chụp của tôi | `lich-chup-cua-toi.html` | 0 | 0 | Đạt | `checks/validator-lich-chup-cua-toi.png` |

Cả 3 trang đều cho kết quả: *"Document checking completed. No errors or warnings to show."*

## 2. Lỗi đã phát hiện và đã sửa

Lần kiểm tra đầu tiên, `index.html` có 1 Error và 8 Warning. Tất cả đã được sửa trước lần kiểm tra cuối.

| Loại | Vị trí (lần kiểm tra đầu) | Vấn đề | Cách sửa |
|---|---|---|---|
| Error | `index.html` dòng 32 | `aria-label` đặt trên `div` không có `role` | Thêm `role="group"` cho `div.user-profile` |
| Warning (×5) | `index.html` dòng 260, 382, 465, 618, 699 | `role="list"` thừa trên `ul` / `ol` | Xoá `role="list"` |
| Warning (×3) | `index.html` dòng 412, 489, 640 | `aria-disabled="true"` thừa trên nút đã có `disabled` | Xoá `aria-disabled`, giữ `disabled` và `aria-describedby` |

Các lỗi cùng loại ở `admin-tu-van.html` và `lich-chup-cua-toi.html` (nếu có) cũng đã được kiểm tra và sửa theo cùng cách.

## 3. Outline tiêu đề

Mỗi trang có đúng một `h1`, các `h2` chia vùng chính, các `h3` nằm trong `h2` tương ứng và không nhảy cấp.

### `index.html` – Screen 1

```
h1  Lưu lại ngày ra trường theo cách của bạn
  h2  Các gói chụp tại GradStudio
    h3  Kỷ yếu lớp
    h3  Tốt nghiệp
    h3  Chân dung / CV
  h2  Các bước đặt lịch chụp
    h3  Hỏi
    h3  Chốt lịch trong chat
    h3  Đặt cọc 30% để giữ lịch
    h3  Chụp & nhận ảnh
  h2  Tư vấn lịch chụp trực tiếp
```

### `admin-tu-van.html` – Screen 2

```
h1  Từ lời hẹn đến buổi chụp.
  h2  Khách đang chờ
    h3  Nguyễn Thùy Linh
    h3  Trần Minh Khoa
    h3  Hồ Gia Bảo · Lớp 12A3
    h3  Lê Ngọc Hân
    h3  Phạm Hoàng Anh
  h2  Hội thoại
    h3  Nguyễn Thùy Linh
  h2  Booking mới – Chụp ảnh tốt nghiệp
  h2  Lịch tài nguyên · Thứ Bảy, 24/10
    h3  Makeup · Mai
    h3  Thợ chụp · Tuấn
    h3  Thợ chụp · Hà
    h3  Phòng A
    h3  Phòng B
    h3  Gợi ý giờ trống
```

### `lich-chup-cua-toi.html` – Screen 3

```
h1  Lịch chụp của tôi
  h2  Tháng 10, 2026
  h2  Chụp ảnh tốt nghiệp
```

## 4. Kết luận

Cả 3 trang HTML đều hợp lệ: **0 Error, 0 Warning** trên Nu Html Checker.