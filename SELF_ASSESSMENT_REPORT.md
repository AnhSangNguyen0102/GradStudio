# SELF_ASSESSMENT_REPORT – PA#2 GradStudio

| Họ tên | MSSV | Phụ trách chính |
|---|---|---|
| Lê Hoàng Hiếu | 24120048 | Màn 2 `admin-tu-van.html`, icon màn 2, đợt sửa responsive cuối |
| Lê Nguyễn Gia Huy | 24120061 | Màn 3 `lich-chup-cua-toi.html` |
| Nguyễn Anh Sang | 24120131 | Khung repo, màn 1 `index.html`, CSS dùng chung |

Tên file nộp: `24120048-24120061-24120131_90.zip`

## Bảng tự chấm (theo 7 tiêu chí của rubric PA#2)

| # | Criterion | Max | Tự chấm | Bằng chứng | Ghi chú |
|---|---|---|---|---|---|
| 1 | Three linked screens that trace back to the GradStudio brief | 20 | 19 | `checks/results.md`: "all N links work" PASS trên cả 3 trang, 0 FAIL. Luồng: `index.html` "Nhân viên studio: mở cuộc trò chuyện này" → `admin-tu-van.html`; nút submit "Tạo booking" (`action="lich-chup-cua-toi.html"`) → `lich-chup-cua-toi.html`. Bảng Screens trong `PROTOTYPE.md` §3. Đối chiếu "Fix these" ở bảng dưới. | Đủ tính năng 3 màn trong brief. Trừ 1 điểm phòng khi người chấm đánh giá khác về ảnh minh hoạ WebP (không có người, nguồn ghi trong `PROTOTYPE.md`). |
| 2 | Responsive at 360, 768 and 1280 px | 25 | 23 | `checks/results.md`: "no sideways scroll" PASS ở 360/768/1280 cho cả 3 trang. 9 ảnh trong `screenshots/` (`<page>-360/768/1280.png`, tắt JS). Đợt sửa responsive (nhánh `fix/pa2-final-pass`): bỏ `overflow-x: clip` (đang che phần tràn), sửa nút gửi chat tràn 370px ở 360px, sticker và tờ giấy nền thẻ booking lòi ra mép phải, nút/link thấp hơn 44px. | Bố cục đổi theo độ rộng: màn 2 có 3 cột từ 1200px, màn 3 có 2 cột từ 1024px, thẻ gói của màn 1: 1 cột ở 360px, 2 cột ở 600–768px, 3 cột từ 769px. Trừ 2 điểm: 2 checkbox ở màn 2 cao 24px (cả dòng label 44px bấm được); ảnh chụp do script tạo (Playwright, full page, tắt JS) chứ không chụp bằng DevTools. |
| 3 | Semantic, valid HTML | 20 | 19 | `checks/validator-index.txt`, `validator-admin-tu-van.txt`, `validator-lich-chup-cua-toi.txt`: "The document validates" (0 lỗi, 0 cảnh báo). Ảnh `validator-*.png` là lần kiểm tra trước của từng thành viên. `checks/results.md`: one h1, headings không nhảy cấp, mọi `label[for]` và `aria-describedby` trỏ đúng id, mọi `<img>` có alt. | Có `header`/`nav`/`main`/`footer` trên mỗi trang; mọi ô nhập có `<label>` hiện trên trang (ô chat màn 1 trước đây chỉ có label ẩn, đã sửa). Trừ 1 điểm: chưa có ảnh chụp Accessibility pane làm bằng chứng. |
| 4 | Design you can check | 10 | 9 | `PROTOTYPE.md` §6. Thang 4/8/12/16/24/32/48 qua `--space-*` (`assets/css/style.css`) và `--sp-*` (`admin-tu-van.css`, `screen3.css`); `grep -c '!important' assets/css/*.css` = 0; chữ nội dung 16px; màu chữ phụ đã sửa để đạt ≥ 4.5:1 (`--color-text-light` #6B5848, `--color-disabled-text` #655243). Mỗi trang có một trọng tâm: màn 1 là 3 gói + chat, màn 2 là form Booking mới với "Tạo booking", màn 3 là thẻ GS-1024 với khoản cọc 540.000đ. | Trừ 1 điểm: hai bộ tên biến cho cùng một thang; còn vài ngoại lệ có chủ đích (`cqw` ở collage hero, `%` ở bậc thang Quy trình, `-1px`); độ tương phản đo bằng script, chưa chụp DevTools colour picker. |
| 5 | The brief and the rules file | 10 | 8 | `brief.md` §5 (3 màn, danh sách Fix these), §6b (ràng buộc: stack, thang khoảng cách, mobile first và breakpoint, không width cố định, semantic, link tương đối), §6c (cách kiểm tra "xong"). `CLAUDE.md`: stack, lệnh check, danh sách Forbidden, quy định AI-LOG và git. | Trừ 2 điểm: §6b và §6c chỉ được thêm vào brief ở đợt sửa cuối (2026-11-11); trước đó các ràng buộc này nằm trong `CLAUDE.md`. |
| 6 | AI-LOG.md | 10 | 8 | `AI-LOG.md`: một mục cho mỗi việc, có Tool / Asked for / Kept / Changed / Rejected. Mục "Screen 2: admin-tu-van.html" ghi lỗi do check bắt được (`run_checks.py` FAIL sideways scroll 395px ở 360px → `width: 100%` + `min-width: 0`; ảnh 1280px cắt chữ trong select → hàng 2 trường tự xuống dòng). Mục đợt sửa cuối ghi lại các FAIL của `run_checks.py` và cách sửa. | Trừ 2 điểm: vài mục chỉ có Changed/Rejected chung chung; dòng By hand của một số mục do từng thành viên tự điền. |
| 7 | Commit history | 5 | 4 | `git log`: `b026d21` commit đầu có `CLAUDE.md`; mỗi trang có commit riêng (`f80aec0`/`7556b82` màn 1, `d1d4989` màn 2, `cbb5fbf`/`47503f6`/`6407908` màn 3); đợt sửa responsive là các commit trên nhánh `fix/pa2-final-pass`. Mỗi người commit bằng tên của mình. | Trừ 1 điểm: một vài message chung chung ("update index.png"), merge gộp nhiều thay đổi. |
| | **Tổng** | **100** | **90** | | |

## Kiểm tra danh sách "Fix these"

| # | Mục | Kết quả | Bằng chứng |
|---|---|---|---|
| 1 | Không ảnh người thật | Đạt | Avatar là chữ cái đầu. 18 ảnh WebP là minh hoạ phẳng (icon trong khung), không có người; nguồn và giấy phép ở `PROTOTYPE.md` › Nguồn hình ảnh. |
| 2 | Không có nút demo | Đạt | Không còn chuỗi "Màn 1/2/3", "Đặt lại demo", "Mô phỏng" (`run_checks.py`: "no forbidden demo text" PASS). Link nói rõ ai làm tiếp: "Nhân viên studio: mở cuộc trò chuyện này", "Khách hàng: xem Lịch chụp của tôi". |
| 3 | Hành động chưa có trang là nút disabled + ghi chú; mỗi trang một trạng thái | Đạt | `PROTOTYPE.md` §5 liệt kê đủ nút disabled và id ghi chú. Bộ lọc màn 3 trước đây là nút bật nhưng bấm không làm gì, nay đã thành disabled + `filter-note`. |
| 4 | Màn 2: chat và form Booking mới đọc được bằng cách cuộn trang | Đạt | Không cột nào có `overflow: auto/scroll`; `run_checks.py`: "no fixed/sticky, own scrollbars, ellipsis" PASS ở 3 độ rộng. |
| 5 | Lịch tài nguyên không cắt chữ; trùng lịch không chỉ dựa vào màu | Đạt | `admin-tu-van.html`: mỗi booking là thẻ chữ đầy đủ; cảnh báo trùng có icon tam giác + chữ "Trùng lịch lúc 09:00: thợ makeup Mai bận 08:00–12:00…". |
| 6 | Chat màn 1 không đè nội dung ở 360px | Đạt | Chat nằm trong luồng trang; header cũng không còn `sticky`. |
| 7 | Màn 1 không hứa giữ lịch ở bước Chốt lịch | Đạt | Bước 02: "lịch chỉ được giữ sau khi đặt cọc"; bước 03: "Studio chỉ giữ khung giờ sau khi bạn đặt cọc 30% thành công". |
| 8 | Tên trạng thái đúng | Đạt | Hội thoại: Chưa trả lời / Đang tư vấn / Đã chốt lịch / Hoàn thành; booking: Chờ cọc 30% / Đã đặt lịch / Hoàn thành; không có "Đã xác nhận" (`run_checks.py` PASS). |
| 9 | Booking, Lịch studio, Tài nguyên, Nhân sự, Xem đường đi, Ảnh đã chọn, link footer | Đạt | Đã bỏ khỏi trang; footer chỉ còn link luồng chính tới màn 2. |
| 10 | Một câu chuyện trên cả 3 trang | Đạt | Linh (Nguyễn Thùy Linh), Admin Thảo, 24/10/2026, Mai 13:00–14:00, Tuấn 14:00–16:00 Phòng B, Gói Tốt nghiệp Premium (2 giờ, 30 ảnh chỉnh), 1.800.000đ / 540.000đ / 1.260.000đ, GS-1024. |

## Những gì nhóm chưa làm được

- 2 checkbox "Dịch vụ thêm" ở màn 2 chỉ cao 24px (cả dòng label 44px bấm được).
- Thang khoảng cách có hai bộ tên biến (`--space-*` và `--sp-*`) vì mỗi màn do một người làm; giá trị giống nhau nhưng chưa gộp làm một.
- Ràng buộc kỹ thuật chỉ được ghi vào `brief.md` ở đợt sửa cuối; trước đó chúng nằm trong `CLAUDE.md`.
- Chưa có ảnh chụp Accessibility pane và DevTools colour picker làm bằng chứng; độ tương phản đo bằng script.
