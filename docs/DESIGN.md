# Hệ thống Thiết kế GradStudio (GradStudio Design System)

Tài liệu quy chuẩn thiết kế giao diện cho client React của GradStudio. Kế thừa và phát triển từ phong cách scrapbook / film-journal của PA#2, giải quyết các hạn chế về màu sắc, độ tương phản và hợp nhất bộ biến thiết kế (Design Tokens).

---

## 1. Bối cảnh & Vấn đề cần giải quyết từ PA#2

PA#2 thiết lập phong cách sổ lưu bút / nhật ký phim analog (giấy kem, polaroid, washi tape, doodle nét vẽ tay). Tuy nhiên, có 3 vấn đề lớn tồn tại:

1. **Nút chính bị chìm**: Nút chính dùng màu nâu `#8B5A2B`, cùng tông màu nâu với chữ (`#2D2118`), khiến nút kêu gọi hành động (CTA) không nổi bật.
2. **Khu vực dính vào nhau**: Nền chính `#F6EFE2` và nền phụ `#EFE6D5` chỉ chênh nhau **1.08:1**, mắt người khó phân biệt ranh giới giữa các khối nội dung.
3. **Phân mảnh biến màu**: `style.css` và `screen3.css` sử dụng hai hệ thống tên biến khác nhau (`--color-primary` vs `--color-brand`, `--sp-*` vs `--space-*`).

### Giải pháp trong React Client:

- **Hợp nhất Tokens**: Gom toàn bộ về một tệp `client/src/styles/tokens.css` với các tiền tố thống nhất: `--color-*`, `--space-*`, `--font-*`, `--radius-*`, `--shadow-*`.
- **Màu nhấn Terracotta (`#A6461F`)**: Bổ sung dải màu nhấn đất nung ấm, mang tính film-analog nhưng nổi bật rõ rệt trên nền kem.
- **3 Kiểu khu vực phân tầng rõ rệt**: `.section--paper`, `.section--kraft` (có mép giấy xé bằng CSS clip-path), và `.section--dark` (nền tối espresso).

---

## 2. Quy tắc phân bổ màu 60 - 30 - 10

Để giữ đúng tinh thần scrapbook hoài niệm mà vẫn có sự tương phản thị giác sắc nét, GradStudio áp dụng nghiêm ngặt nguyên lý 60-30-10:

```
+-------------------------------------------------------+
|  60% Nền Giấy Kem (#F6EFE2, #FFFDF9)                  |
|  Không gian nền ấm áp, bề mặt giấy mộc                |
|                                                       |
|  +-------------------------------------------------+  |
|  |  30% Nâu Espresso & Nâu Thương hiệu             |  |
|  |  (#2D2118, #655243, #8B5A2B)                    |  |
|  |  Chữ đọc, viền, icon, nút secondary             |  |
|  |                                                 |  |
|  |  +-------------------------------------------+  |  |
|  |  |  10% Màu Nhấn Đất Nung (#A6461F)          |  |  |
|  |  |  Chỉ dùng cho: Nút Primary, badge          |  |  |
|  |  |  "Phổ biến nhất", số tiền quan trọng      |  |  |
|  |  +-------------------------------------------+  |  |
|  +-------------------------------------------------+  |
+-------------------------------------------------------+
```

### Chi tiết phân bổ:

- **60% Nền kem (`--color-bg` #F6EFE2, `--color-surface` #FFFDF9)**: Chiếm phần lớn diện tích trang web, mang lại cảm giác dễ chịu, ấm cúng và đúng chất giấy tập học sinh.
- **30% Nâu espresso & thương hiệu (`--color-text` #2D2118, `--color-text-muted` #655243, `--color-brand` #8B5A2B)**: Đảm nhiệm vai trò khung sườn cấu trúc, toàn bộ văn bản nội dung, đường viền thẻ, biểu tượng và các nút phụ (secondary/ghost).
- **10% Màu nhấn đất nung (`--color-accent` #A6461F, `--color-accent-hover` #8A3A19, `--color-accent-soft` #F6DDD0, `--color-accent-on-dark` #E8A27C)**:
  - **Chỉ sử dụng cho**:
    1. Nút hành động chính (`Button variant="primary"`): Ví dụ "Thanh toán cọc 30%", "Đặt lịch ngay". **Tối đa 1 nút primary trên mỗi khu vực**.
    2. Huy hiệu gói chụp nổi bật: Chữ "Phổ biến nhất" (`Badge variant="highlight"` với nền `--color-accent-soft`).
    3. Con số tiền quan trọng: Giá cọc, tổng tiền dịch vụ (ví dụ: `1.800.000đ`, `540.000đ`).
  - **Quy tắc cấm**: Tuyệt đối không dùng màu nhấn làm nền cả section lớn, không dùng cho icon thông thường, và **KHÔNG BAO GIỜ dùng màu nhấn để chỉ báo trạng thái**.

---

## 3. Bảng màu chi tiết & Kiểm định Tương phản WCAG 2.1

Tất cả các cặp màu hiển thị văn bản đều được kiểm tra bằng script toán học tự động (`scripts/check-contrast.js`) và đạt chuẩn **WCAG 2.1 AA (≥ 4.5:1)** hoặc **AAA (≥ 7:1)**.

| Token                    | Giá trị Hex | Vai trò sử dụng                             | Nền áp dụng                       | Tỉ lệ tương phản | Đánh giá WCAG |
| :----------------------- | :---------- | :------------------------------------------ | :-------------------------------- | :--------------- | :------------ |
| `--color-bg`             | `#F6EFE2`   | Nền chính toàn trang (giấy kem)             | —                                 | —                | —             |
| `--color-surface`        | `#FFFDF9`   | Bề mặt thẻ card, ô nhập liệu                | —                                 | —                | —             |
| `--color-kraft`          | `#E6D7BF`   | Nền khu vực kraft (mép xé CSS)              | —                                 | —                | —             |
| `--color-dark`           | `#2D2118`   | Nền khu vực tối (nâu espresso)              | —                                 | —                | —             |
| `--color-text`           | `#2D2118`   | Chữ chính toàn trang                        | `--color-bg`                      | **13.68:1**      | AAA           |
| `--color-text`           | `#2D2118`   | Chữ chính trên thẻ card                     | `--color-surface`                 | **15.40:1**      | AAA           |
| `--color-text`           | `#2D2118`   | Chữ chính trên giấy kraft                   | `--color-kraft`                   | **11.05:1**      | AAA           |
| `--color-text-muted`     | `#655243`   | Chữ phụ, mô tả, nhãn phụ                    | `--color-bg`                      | **6.46:1**       | AA            |
| `--color-text-muted`     | `#655243`   | Chữ phụ trên thẻ card                       | `--color-surface`                 | **7.27:1**       | AAA           |
| `--color-text-muted`     | `#655243`   | Chữ phụ trên giấy kraft                     | `--color-kraft`                   | **5.22:1**       | AA            |
| `--color-text-on-dark`   | `#F6EFE2`   | Chữ kem sáng trên nền tối                   | `--color-dark`                    | **13.68:1**      | AAA           |
| `--color-brand`          | `#8B5A2B`   | Nâu thương hiệu (link, viền, icon, nút phụ) | `--color-bg`                      | **5.11:1**       | AA            |
| `--color-brand`          | `#8B5A2B`   | Nâu thương hiệu trên thẻ                    | `--color-surface`                 | **5.75:1**       | AA            |
| `--color-brand-hover`    | `#6F451F`   | Trạng thái hover của thương hiệu            | `--color-bg`                      | **7.21:1**       | AAA           |
| `--color-accent`         | `#A6461F`   | Nền nút chính primary                       | Chữ `#F6EFE2`                     | **5.22:1**       | AA            |
| `--color-accent`         | `#A6461F`   | Nền nút chính primary                       | Chữ `#FFFDF9`                     | **5.88:1**       | AA            |
| `--color-accent-hover`   | `#8A3A19`   | Trạng thái hover nút chính                  | Chữ `#F6EFE2`                     | **6.80:1**       | AA            |
| `--color-accent-soft`    | `#F6DDD0`   | Nền badge "Phổ biến nhất"                   | Chữ `#A6461F`                     | **4.60:1**       | AA            |
| `--color-accent-on-dark` | `#E8A27C`   | Điểm nhấn (link, icon) trên nền tối         | `--color-dark`                    | **7.37:1**       | AAA           |
| `--color-success`        | `#375336`   | Chữ trạng thái thành công                   | `--color-success-bg` (`#CFDEC9`)  | **6.09:1**       | AA            |
| `--color-warning`        | `#6C572D`   | Chữ trạng thái cảnh báo / chờ               | `--color-warning-bg` (`#EFE3CD`)  | **5.44:1**       | AA            |
| `--color-danger`         | `#8E2B3A`   | Chữ trạng thái lỗi / huỷ                    | `--color-danger-bg` (`#F8E1E1`)   | **6.59:1**       | AA            |
| `--color-disabled-text`  | `#655243`   | Chữ trạng thái vô hiệu hóa                  | `--color-disabled-bg` (`#E7DFD4`) | **5.60:1**       | AA            |

---

## 4. Quy tắc khu vực (Section Layouts)

Nhằm đảm bảo trang web có nhịp điệu thị giác rõ rệt, hệ thống định nghĩa 3 lớp khu vực:

1. **`.section--paper` (Khu vực Giấy kem)**:
   - Nền `--color-bg` (`#F6EFE2`) kèm hạt giấy tactile noise SVG.
   - Sử dụng cho phần lớn các phần: giới thiệu, danh sách gói chụp, thông tin cá nhân.
2. **`.section--kraft` (Khu vực Giấy Kraft có mép xé)**:
   - Nền `--color-kraft` (`#E6D7BF`).
   - **Bắt buộc có mép xé CSS** (`clip-path: polygon(...)`) ở cạnh trên và cạnh dưới, không đơn thuần đổi màu nền.
   - Thường dùng làm dải chuyển tiếp (ví dụ: Quy trình 4 bước, lưu ý đặc biệt, bảng so sánh).
3. **`.section--dark` (Khu vực Nền tối)**:
   - Nền nâu espresso `--color-dark` (`#2D2118`), chữ kem `--color-text-on-dark` (`#F6EFE2`).
   - Điểm nhấn liên kết hoặc đồ họa dùng `--color-accent-on-dark` (`#E8A27C`).
   - **Quy tắc cứng**: **Mỗi trang có nhiều nhất MỘT khu vực nền tối** (thường là dải phim kỷ niệm, banner chốt lịch hoặc footer).

---

## 5. Quy tắc Trạng thái & Trợ năng (Accessibility)

- **Không bao giờ dùng màu đơn độc**: Mỗi trạng thái (`StatusBadge`) luôn kết hợp **biểu tượng icon + nhãn tiếng Việt có dấu đầy đủ**.
- **Cách ly màu trạng thái**: Màu trạng thái chỉ dùng 3 cặp màu (Success, Warning, Danger); tuyệt đối không lấy màu nhấn `--color-accent` làm trạng thái.
- **Focus ring**: Khi dùng bàn phím (tab navigation), vòng viền tiêu điểm hiển thị rõ nét với `:focus-visible { outline: 2px solid var(--color-accent); outline-offset: 2px; }`.
- **Target kích thước chạm (Tap target)**: Nút bấm (`Button`) và ô nhập liệu (`Field`) có chiều cao tối thiểu **44px** (tuân thủ WCAG 2.5.5).
- **Trợ năng Form**:
  - Mỗi ô `Field` đều có `<label>` hiển thị trực quan và nối với `<input>` bằng `htmlFor`.
  - Thông báo lỗi và gợi ý được liên kết trực tiếp với ô nhập bằng `aria-describedby` và `aria-invalid`.

---

## 6. Danh mục Mã trạng thái (Theo CLAUDE.md)

| Mã trạng thái     | Tên tiếng Việt chính xác | Nhóm thực thể      | Màu áp dụng                        |
| :---------------- | :----------------------- | :----------------- | :--------------------------------- |
| `UNANSWERED`      | **Chưa trả lời**         | Hội thoại (Chat)   | Danger (`#8E2B3A` trên `#F8E1E1`)  |
| `CONSULTING`      | **Đang tư vấn**          | Hội thoại (Chat)   | Warning (`#6C572D` trên `#EFE3CD`) |
| `AGREED`          | **Đã chốt lịch**         | Hội thoại (Chat)   | Success (`#375336` trên `#CFDEC9`) |
| `DONE`            | **Hoàn thành**           | Hội thoại (Chat)   | Success (`#375336` trên `#CFDEC9`) |
| `PENDING_DEPOSIT` | **Chờ cọc 30%**          | Đặt lịch (Booking) | Warning (`#6C572D` trên `#EFE3CD`) |
| `BOOKED`          | **Đã đặt lịch**          | Đặt lịch (Booking) | Success (`#375336` trên `#CFDEC9`) |
| `COMPLETED`       | **Hoàn thành**           | Đặt lịch (Booking) | Success (`#375336` trên `#CFDEC9`) |
| `CANCELLED`       | **Đã hủy**               | Đặt lịch (Booking) | Danger (`#8E2B3A` trên `#F8E1E1`)  |

_Lưu ý: Tuyệt đối không dùng cụm từ "Đã xác nhận" cho hội thoại (theo quy định CLAUDE.md)._

---

## 7. Quy tắc Hình ảnh & Bản quyền (Licensing)

- **Không ảnh người thật**: Tuân thủ mục "Fix these" #1 và quy định môn học, tuyệt đối không dùng ảnh chụp có mặt người thật trong bất kỳ phần nào (kể cả mock, seed hay preview).
- **Hình thức thay thế**:
  - Sử dụng hình minh họa (illustrations), đồ họa vẽ tay (doodles inline SVG), dải phim mô phỏng hoặc chữ cái viết tắt (initials).
  - Ảnh phong cảnh/tĩnh vật decor nếu lấy từ nguồn ngoài phải có giấy phép miễn phí thương mại rõ ràng.
- **Nguồn tài nguyên bên ngoài**:
  - **Phông chữ Playfair Display**: Bản quyền SIL Open Font License 1.1 (OFL-PlayfairDisplay.txt trong `client/src/assets/fonts/`). Tự host hoàn toàn dạng `.woff2`, không tải từ Google Fonts CDN.
  - **Hạt giấy (Paper noise)**: Tạo thuần túy bằng SVG filter `feTurbulence` nhúng nội tuyến dạng Data URI, không cần tệp ảnh nặng.
  - **Mép giấy xé (Torn edges)**: Tạo thuần túy bằng thuộc tính CSS `clip-path: polygon(...)`, không tải hình ảnh mép xé từ bên ngoài.
