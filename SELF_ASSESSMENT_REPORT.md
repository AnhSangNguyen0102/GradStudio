# Self-assessment – PA#2 GradStudio

## Thông tin nhóm

| Họ tên | MSSV | Phụ trách chính |
|---|---|---|
| Lê Hoàng Hiếu | 24120048  | Màn 2 (Admin Thảo: Chat, Booking mới, Lịch tài nguyên), Icons |
| Lê Nguyễn Gia Huy | 24120061  | Màn 3 (Lịch chụp của tôi & Đặt cọc GS-1024), Responsive screen 3 |
| Nguyễn Anh Sang | 24120131 | Khung chung, Màn 1 (Dịch vụ & Chat), CSS nền tảng, tích hợp repo |


## Bảng tự chấm

| # | Tiêu chí (đúng nguyên văn rubric) | Điểm tối đa | Tự chấm | Bằng chứng | Ghi chú |
|---|---|---|---|---|---|
| 1 | Cấu trúc repository và các file bắt buộc (`CLAUDE.md`, `PROTOTYPE.md`, `screenshots/`, `checks/`, `brief.md`, `AI-LOG.md`, `SELF_ASSESSMENT_REPORT.md`, thư mục `.git`) | 10 | 8 | File tồn tại ở thư mục gốc: `CLAUDE.md`, `PROTOTYPE.md`, `brief.md`, `AI-LOG.md`, `SELF_ASSESSMENT_REPORT.md`, `.git/`, `checks/`, `screenshots/`. | Trừ 2 điểm: Thư mục `screenshots/` thiếu ảnh chụp cho `index.html` (chỉ có ảnh màn 2 và màn 3); `checks/` thiếu ảnh `validator-index.png`; chưa tạo git tag `pa2`. |
| 2 | Screen 1 – Dịch vụ & chat khách hàng (3 gói dịch vụ, giá chuẩn, chat câu hỏi Linh & trả lời studio, disabled controls kèm note) | 15 | 15 | `index.html`: Gói Kỷ yếu (#L378: 350.000đ), Tốt nghiệp (#L462: 1.800.000đ), Chân dung/CV (#L615: 690.000đ). Chat: câu hỏi Linh (#L898) và trả lời studio (#L909). Nút chat disabled + note (#L921-940). | Đạt đầy đủ 100% nội dung, mức giá, cốt truyện và kỹ thuật static không JS. |
| 3 | Screen 2 – Tư vấn & xử lý trùng lịch Admin Thảo (3 cột, chat + form Booking mới cuộn cả trang, trạng thái đã chốt 14:00, nút Tạo booking bật, lịch tài nguyên & cảnh báo 09:00 trùng) | 20 | 20 | `admin-tu-van.html`: Danh sách hội thoại (#L69-128); Chat (#L141-179); Form Booking mới (#L184-266) với nút submit bật; Lịch tài nguyên (#L277-388) và cảnh báo trùng (#L393); CSS `admin-tu-van.css` không có overflow scroll riêng. | Đạt đầy đủ 100% cấu trúc 3 cột, trạng thái sau khi Linh đồng ý và nguyên tắc cuộn toàn trang. |
| 4 | Screen 3 – Xem lịch & đặt cọc (GS-1024 Chờ cọc 30%, tuần đánh dấu 24/10, gạch huỷ 09:00, makeup 13:00 và chụp 14:00, giá 1.800.000đ - cọc 540.000đ - còn 1.260.000đ, nút Thanh toán disabled) | 15 | 15 | `lich-chup-cua-toi.html`: Bộ lọc (#L59: "Chờ cọc 30% 1"); Tuần (#L97: 24/10); Timeline (#L121: 09:00 bị gạch, #L133: 13:00 makeup Mai, #L146: 14:00 chụp Tuấn Phòng B); Chi tiết (#L193: GS-1024, #L205: Chờ cọc 30%, #L314-322: giá và cọc, #L333: nút disabled + note). | Đạt đầy đủ 100% các yêu cầu dữ liệu, trạng thái và thiết kế scrapbook. |
| 5 | Danh sách "Fix these" (11 mục cấm: không ảnh người thật/nguồn ảnh, không demo controls, nút disabled + note, 1 trạng thái trực tiếp, cuộn cả trang, lịch tài nguyên rõ ràng, chat không đè 360px, quy trình không hứa giữ lịch trước cọc, tên trạng thái chuẩn, không link dẫn đi đâu, cốt truyện thống nhất) | 15 | 13 | Kiểm tra 11 mục chi tiết bên dưới. Không có `href="#"` hay `href=""`, không demo controls, không "Đã xác nhận", quy trình chuẩn (#L751, #L791), câu chuyện thống nhất. | Trừ 2 điểm: Mục 1 còn thiếu URL nguồn/Tác giả trong bảng `PROTOTYPE.md` cho 18 ảnh WebP; một số ảnh tư liệu trong `gallery/` và `studio/` chưa được kê trong bảng. |
| 6 | Kỹ thuật HTML ngữ nghĩa, khả năng truy cập (A11y) và Responsive 360/768/1280px (0 horizontal scroll, W3C valid, hiển thị đầy đủ khi tắt JS, relative links, không CDN) | 15 | 12 | Thẻ ngữ nghĩa (`header`, `nav`, `main`, `section`, `article`, `dl`, `time`, `figure`, `button`). Không thư viện ngoài, không CDN, không JS. Link tương đối. `checks/validator-admin-tu-van.png` và `validator-lich-chup-cua-toi.png` 0 lỗi W3C. | Trừ 3 điểm: Môi trường thiếu `playwright` nên chưa chạy lại được toàn bộ bộ test trình duyệt tự động; `checks/results.md` cũ còn 1 FAIL liên kết; chưa có ảnh kiểm tra W3C cho `index.html`. |
| 7 | AI-LOG và Liêm chính học thuật (Khai báo trung thực từng lần dùng AI, đúng cấu trúc CLAUDE.md, phản ánh đúng quá trình làm việc) | 5 | 3 | `AI-LOG.md` có 16 mục ghi nhận từ ngày 2026-11-05 đến 2026-11-11, mô tả chi tiết công cụ, yêu cầu, thay đổi và kiểm tra thực tế. | Trừ 2 điểm: Còn nhiều mục log cũ giữ nguyên placeholder `(person to fill in)` mà các thành viên chưa thay bằng nội dung thực tế do chính mình viết/kiểm tra. |
| 8 | Đóng góp của các thành viên & Quy trình Git (Phân chia công việc giữa 3 người, commit nhỏ có ý nghĩa, làm việc trên nhánh riêng, merge vào main) | 5 | 4 | `git shortlog -sn --all`: hieu (7 commits), Anh Sang Nguyen (6 commits), Huy Le (4 commits). 3 nhánh làm việc: `main`, `feat/admin-tu-van`, `feat/screen3`. Commit message rõ ràng theo chuẩn conventional commits. | Trừ 1 điểm: Chưa tạo git tag `pa2` trước khi nén zip theo quy định tại `CLAUDE.md#L68`. |
| **TỔNG ĐIỂM** | **Tổng điểm tự đánh giá toàn diện đồ án PA#2** | **100** | **90** | **Tự chấm trung thực, chi tiết từng dòng theo bằng chứng và thẳng thắn chỉ ra các điểm thiếu sót.** | **Điểm đề xuất: 90 / 100** |

---

## Kiểm tra danh sách Fix these (11 mục)

| # | Yêu cầu Fix These | Kết quả | Bằng chứng cụ thể (File + Dòng) & Đánh giá |
|---|---|---|---|
| 1 | Không có ảnh người thật nhận diện được. Avatar dùng chữ cái đầu. Mọi ảnh trong `assets/` đều có nguồn trong `PROTOTYPE.md`. | **Chưa đạt hoàn toàn** (Đạt 70%) | **Bằng chứng:** <br>- Toàn bộ 18 ảnh WebP được dùng đều là ảnh đồ vật, phong cảnh studio, hoặc bóng người từ xa/quay lưng (không nhận diện được khuôn mặt). Avatar dùng chữ cái đầu `L` (`index.html#L1230`), `T` (`admin-tu-van.html#L31`), `G` (`index.html#L19`). <br>- **Điểm chưa đạt:** Bảng `PROTOTYPE.md` dòng 19–36 đã liệt kê 18 file nhưng cột *Tác giả* và *URL nguồn* còn để trống. Ngoài ra các file ảnh trong `assets/img/gallery/` (6 file) và `assets/img/studio/` (4 file) chưa được liệt kê vào bảng nguồn ảnh. |
| 2 | Không còn nút demo (Màn 1/2/3, Đặt lại demo, Mô phỏng…). Chuyển bước dùng link thật, có ghi rõ ai làm tiếp. | **Đạt** | **Bằng chứng:** <br>- Chạy tìm kiếm không có chuỗi: "Đặt lại demo", "Mô phỏng", "Màn 1", "Màn 2", "Màn 3". <br>- Link chuyển bước thật có nêu rõ người làm tiếp: `index.html#L960` trỏ tới `admin-tu-van.html` ("Nhân viên studio: mở cuộc trò chuyện này"); `admin-tu-van.html#L267` trỏ tới `lich-chup-cua-toi.html` ("Khách hàng: xem Lịch chụp của tôi"); `admin-tu-van.html#L263` nút submit form "Tạo booking" mở `lich-chup-cua-toi.html`. |
| 3 | Hành động chưa có trang (Thanh toán cọc 30%, gửi tin nhắn) là nút disabled kèm ghi chú. Không có link `href="#"` hoặc `href=""`. | **Đạt** | **Bằng chứng:** <br>- grep `href="#"` và `href=""` trên toàn bộ file HTML: **0 kết quả**. <br>- `index.html#L921-940`: nút đính kèm và nút gửi chat disabled kèm `<p id="chat-disabled-note">Gửi tin nhắn chưa khả dụng ở bản PA#2</p>`. <br>- `admin-tu-van.html#L177-179`: input và nút gửi disabled kèm `#chat-note`. <br>- `lich-chup-cua-toi.html#L333-L337`: `<button disabled aria-describedby="cta-note">Thanh toán cọc 30%</button>` kèm `<p id="cta-note">Thanh toán cọc trực tuyến chưa khả dụng ở bản PA#2...</p>`. |
| 4 | Mỗi trang hiển thị đúng một trạng thái khi mở trực tiếp, không cần bấm gì trước. | **Đạt** | **Bằng chứng:** <br>- `index.html`: mở trực tiếp hiển thị ngay câu hỏi của Linh lúc 09:41 và câu trả lời của studio lúc 10:20. <br>- `admin-tu-van.html`: mở trực tiếp hiển thị trạng thái sau khi Linh đồng ý 14:00, hội thoại "Đã chốt lịch", form Booking mới điền sẵn thông tin và nút "Tạo booking" đã bật. <br>- `lich-chup-cua-toi.html`: mở trực tiếp hiển thị ngay booking GS-1024 ở trạng thái "Chờ cọc 30%", khung 09:00 bị gạch huỷ, slot 13:00 và 14:00 sẵn sàng. |
| 5 | Chat và toàn bộ form Booking mới đọc được bằng cách cuộn trang, không có cột cuộn riêng. | **Đạt** | **Bằng chứng:** <br>- File `assets/css/admin-tu-van.css` không có bất kỳ quy tắc nào chứa `overflow: auto`, `overflow: scroll`, `overflow-y: auto`, hay `overflow-y: scroll`. Toàn bộ 3 cột dàn trang tự nhiên, người dùng cuộn cả trang bình thường ở mọi kích thước màn hình. |
| 6 | Lịch tài nguyên không cắt chữ. Trùng lịch không chỉ thể hiện bằng màu hay gạch chéo. | **Đạt** | **Bằng chứng:** <br>- `admin-tu-van.html#L277-415`: Các booking đều hiển thị text đầy đủ ("Mai bận 08:00–12:00", "Makeup 13:00–14:00 · Mai · Linh", "Chụp 14:00–16:00 · Tuấn · Phòng B · Linh"). <br>- Cảnh báo trùng lịch (#L393): Sử dụng icon tam giác cảnh báo SVG + chữ đậm rõ ràng: `Trùng lịch lúc 09:00: thợ makeup Mai bận 08:00–12:00, không đủ nhân sự cho khung 09:00`. Không dùng `text-overflow: ellipsis`. |
| 7 | Chat box không đè lên nội dung ở chiều rộng 360px. | **Đạt** | **Bằng chứng:** <br>- `index.html#L856-946`: Khung chat nằm trong luồng tài liệu tĩnh bình thường `<section id="chat">`, không dùng `position: fixed` hay `position: sticky`. <br>- Ở viewport 360px, khung chat thu hẹp vừa vặn, padding được điều chỉnh bằng CSS biến, không đè hay che khuất bất kỳ nội dung nào. |
| 8 | Phần quy trình không nói studio "giữ lịch" ở bước Chốt lịch. Lịch chỉ được giữ sau khi cọc. | **Đạt** | **Bằng chứng:** <br>- `index.html#L751` (Bước 02 Chốt lịch): "Thống nhất chi tiết và chọn khung giờ phù hợp; **lịch chỉ được giữ sau khi đặt cọc**." <br>- `index.html#L791` (Bước 03 Đặt cọc 30% để giữ lịch): "Studio **chỉ giữ khung giờ sau khi bạn đặt cọc 30% thành công**." |
| 9 | Tên trạng thái đúng chính xác: Hội thoại: Chưa trả lời, Đang tư vấn, Đã chốt lịch, Hoàn thành. Booking: Chờ cọc 30%, Đã đặt lịch, Hoàn thành. | **Đạt** | **Bằng chứng:** <br>- grep "Đã xác nhận" trên cả 3 file: **0 kết quả**. <br>- Hội thoại trong `admin-tu-van.html`: "Chưa trả lời" (#L72, #L112), "Đang tư vấn" (#L99), "Đã chốt lịch" (#L84, #L143), "Hoàn thành" (#L122). <br>- Booking: `lich-chup-cua-toi.html#L59` và `#L205` đều ghi đúng "Chờ cọc 30%". |
| 10 | Không còn link dẫn đi đâu (Booking, Lịch studio, Tài nguyên, Nhân sự, Xem đường đi, Ảnh đã chọn, link footer). Các mục này phải bị xoá hoặc ghi rõ "chưa có". | **Đạt** | **Bằng chứng:** <br>- Không có bất kỳ thẻ `<a>` nào cho các mục "Booking", "Lịch studio", "Tài nguyên", "Nhân sự", "Xem đường đi", "Ảnh đã chọn". <br>- Footer không chứa link rác, chỉ có link semantic hoặc link quản lý có ý nghĩa. |
| 11 | Tên, giờ, gói, giá, mã booking thống nhất trên cả 3 trang theo ví dụ ở brief mục 3. | **Đạt** | **Bằng chứng:** <br>- Khách hàng: Linh (Nguyễn Thùy Linh). <br>- Admin: Thảo. Thợ makeup: Mai (bận 08:00–12:00, làm 13:00–14:00). Nhiếp ảnh: Tuấn (chụp 14:00–16:00 Phòng B). <br>- Ngày: Thứ Bảy 24/10/2026. <br>- Mã booking: GS-1024. Gói: Gói Tốt nghiệp Premium (2 giờ, 30 ảnh chỉnh). <br>- Tài chính: Giá 1.800.000đ, Cọc 30% 540.000đ, Còn lại 1.260.000đ thống nhất 100% trên cả 3 trang. |

---

## Đóng góp thành viên (từ Git log)

Tổng hợp dựa trên `git log --all --format="%an | %ad | %s" --date=short` và `git shortlog -sn --all`:

```
     7	hieu <lehoanghieu02206@gmail.com>
     6	Anh Sang Nguyen <anhsangn06@gmail.com>
     4	Huy Le <lehuy9742@gmail.com>
```

### 1. Nguyễn Anh Sang (`Anh Sang Nguyen` – 6 commits)
- **Nhánh làm việc:** `main`, các nhánh tích hợp và backup.
- **Các commit tiêu biểu:**
  - `b026d21`: Khởi tạo lại dự án với khung file chuẩn (`CLAUDE.md`, `PROTOTYPE.md`, `brief.md`, `docs/DECISIONS.md`, `docs/PLAN.md`, `checks/run_checks.py`).
  - `f80aec0`: Cập nhật trang `index.html`, thiết kế homepage-v1 phong cách scrapbook.
  - `7556b82`: Thiết kế lại trang chủ theo phong cách scrapbook nâng cao (kraft paper, washi tape, polaroids).
  - `78a729b` & `e79cfc8`: Gộp màn 3 từ nhánh `feat/screen3`, đồng bộ header dùng chung, giữ `AI-LOG.md` của cả nhóm.
  - `b42dc23`: Cập nhật typography: dùng font Playfair Display cho nội dung, giữ font viết tay Caveat cho chi tiết trang trí.
- **Các file chính đã sửa:** `index.html`, `assets/css/style.css`, `css/style.css`, `CLAUDE.md`, `PROTOTYPE.md`, `AI-LOG.md`.

### 2. Lê Hoàng Hiếu (`hieu` – 7 commits)
- **Nhánh làm việc:** `feat/admin-tu-van` (hoặc `origin/feat/admin-tu-van`).
- **Các commit tiêu biểu:**
  - `39a4ded`: Thêm 13 icons SVG màn 2 xuất từ Figma vào `assets/icons/`.
  - `d1d4989`: Dựng hoàn chỉnh trang `admin-tu-van.html` kèm responsive styles trong `assets/css/admin-tu-van.css`.
  - `6dab5b6`: Thêm ảnh chụp màn hình admin-tu-van ở 360px, 768px, 1280px vào `screenshots/`.
  - `05c32a7`: Cập nhật các liên kết, controls disabled và quyết định thiết kế màn 2 vào `PROTOTYPE.md`.
  - `fa2f9a0`: Thêm kết quả kiểm tra W3C validator cho admin-tu-van (`checks/validator-admin-tu-van.png`).
  - `8f428b6`: Thêm mục nhật ký AI cho màn 2 vào `AI-LOG.md`.
  - `972aff8`: Bổ sung nguồn Lucide và giấy phép ISC cho icons màn 2 trong `PROTOTYPE.md`.
- **Các file chính đã sửa:** `admin-tu-van.html`, `assets/css/admin-tu-van.css`, `assets/icons/*.svg`, `screenshots/admin-tu-van-*.png`, `checks/validator-admin-tu-van.png`.

### 3. Lê Nguyễn Gia Huy (`Huy Le` – 4 commits)
- **Nhánh làm việc:** `feat/screen3`.
- **Các commit tiêu biểu:**
  - `cbb5fbf`: Hoàn thiện Screen 3 ở 360px đạt 0 lỗi W3C, thêm screenshots và cập nhật `lich-chup-cua-toi.html`.
  - `47503f6`: Hoàn thiện Screen 3 ở 768px đạt 0 lỗi W3C và thêm screenshots.
  - `a172b58`: Thêm mục AI-LOG cho Screen 3 ở 768px.
  - `6407908`: Hoàn thiện Screen 3 ở 1440px đạt 0 lỗi W3C, thêm screenshots và kết quả kiểm tra W3C.
- **Các file chính đã sửa:** `lich-chup-cua-toi.html`, `assets/css/screen3.css`, `checks/results.md`, `checks/validator-lich-chup-cua-toi.png`, `screenshots/lich-chup-cua-toi-*.png`.

---

## Những điểm còn thiếu / Tự trừ điểm thẳng thắn

Nhóm nghiêm túc nhìn nhận các thiếu sót hiện có trong repository và chủ động tự trừ điểm:

1. **Thiếu ảnh chụp minh chứng trang chủ `index.html` (-2 điểm):**
   - Trong `screenshots/` hiện chỉ có ảnh chụp màn 2 (`admin-tu-van-*.png`) và màn 3 (`lich-chup-cua-toi-*.png`). Chưa có ảnh chụp `index-360.png`, `index-768.png`, `index-1280.png`.
   - Trong `checks/` có `validator-admin-tu-van.png` và `validator-lich-chup-cua-toi.png`, nhưng thiếu `validator-index.png`.
2. **Bảng Nguồn hình ảnh trong `PROTOTYPE.md` chưa hoàn thiện (-2 điểm):**
   - 18 tệp ảnh WebP đang dùng trên giao diện đã được đưa vào bảng nhưng cột *Tác giả* và *URL nguồn* vẫn còn để trống chờ điền.
   - Các file ảnh tư liệu cũ trong `assets/img/gallery/` và `assets/img/studio/` chưa được kê khai đầy đủ giấy phép và nguồn.
3. **Chưa chạy được script kiểm tra trình duyệt tự động trên toàn bộ 3 trang (-3 điểm):**
   - Script `checks/run_checks.py` đòi hỏi thư viện `playwright` nhưng môi trường thực thi chưa cài đặt gói này, do đó ghi nhận trung thực là: **Chưa kiểm tra tự động trên trình duyệt đầy đủ cả 3 trang bằng Playwright**.
   - Tệp `checks/results.md` hiện tại là kết quả cũ chỉ ghi nhận riêng `lich-chup-cua-toi.html` và có 1 lỗi FAIL về liên kết tương đối (`index.html -> file not found`).
4. **Placeholder `(person to fill in)` trong `AI-LOG.md` (-2 điểm):**
   - Một số mục nhật ký cũ trong `AI-LOG.md` vẫn còn giữ nguyên chữ `(person to fill in)` ở các dòng Kept/Rejected/By hand mà thành viên chưa thay bằng ghi chú thực tế của bản thân.
5. **Chưa tạo git tag `pa2` (-1 điểm):**
   - Theo quy định tại `CLAUDE.md#L68`, repo phải được gắn tag `pa2` trước khi nén zip. Lệnh `git tag` hiện tại chưa có tag này.

---

