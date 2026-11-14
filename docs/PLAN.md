# Kế hoạch dự án GradStudio

Brief không ghi hạn nộp. Điền hạn thật của PA#2–PA#6 từ đề/lịch môn học vào cột "Hạn" ngay hôm nay; mọi mốc nội bộ bên dưới tính lùi từ các hạn đó (xong nội bộ trước hạn ít nhất 2 ngày để dự phòng).

## Mốc chính

| Mốc               | Nội dung                                                       | Hạn |
| ----------------- | -------------------------------------------------------------- | --- |
| Tuần 0 (từ 09/11) | Họp nhóm, tạo repo, chia việc, đọc kỹ brief, hỏi product owner | ... |
| PA#2              | 3 màn hình tĩnh/React, tuân thủ danh sách "Fix these"          | ... |
| PA#3              | (chờ đề)                                                       | ... |
| PA#4              | (chờ đề)                                                       | ... |
| PA#5              | (chờ đề)                                                       | ... |
| PA#6              | (chờ đề)                                                       | ... |

## Tuần 0: khởi động (làm trong 1–2 ngày)

- [ ] Chốt trưởng nhóm, người review, kênh liên lạc.
- [ ] Tạo repo GitHub, mời đủ thành viên, bật bảo vệ nhánh `main`.
- [ ] Tạo Issues + Milestone theo PA#2.
- [ ] Mỗi người đọc brief, ghi câu hỏi; gom lại, đăng MỘT bài hỏi dưới post "GradStudio — questions for the product owners" (không nhắn riêng), bắt đầu bằng #WAD2431. Phản hồi trong 2 ngày làm việc.
- [ ] Chọn công nghệ PA#2 (HTML/CSS thuần hoặc React) và bảng màu, font, quy ước đặt tên file.

## PA#2: chia việc gợi ý (3 màn + chung)

| Việc                                                                        | Người   | Ghi chú                                            |
| --------------------------------------------------------------------------- | ------- | -------------------------------------------------- |
| Khung chung: header, nav, CSS biến, responsive 360px                        | A       | Làm trước, các màn dùng lại                        |
| Màn 1: dịch vụ + chat khách hàng                                            | B       | Chat KHÔNG nổi che nội dung ở 360px                |
| Màn 2: Admin (danh sách hội thoại, chat, form Booking mới, lịch tài nguyên) | C       | Phần khó nhất; cuộn cả trang, không cuộn riêng cột |
| Màn 3: Lịch chụp của tôi + đặt cọc                                          | D       | Hiển thị GS-1024 "Chờ cọc 30%"                     |
| Hình ảnh/minh hoạ + PROTOTYPE.md                                            | B/D     | Không ảnh người thật                               |
| Kiểm thử cuối: link, 360px/768px/1280px, trạng thái mở trực tiếp            | Cả nhóm |                                                    |

(Nhóm ít/nhiều hơn 4 người thì gộp/chia lại.)

## Lịch tiến độ PA#2 (tính lùi từ hạn)

- H-7 → H-5: khung chung + Màn 1 + Màn 3 bản đầu; Màn 2 dựng bố cục.
- H-5 → H-3: Màn 2 hoàn chỉnh (lịch tài nguyên đọc được nhãn, trùng lịch không chỉ dựa vào màu).
- H-3 → H-2: tích hợp, đồng bộ câu chuyện, đổi tên trạng thái cho thống nhất.
- H-2 → H-1: kiểm thử chéo theo checklist bên dưới, sửa lỗi, hoàn thiện PROTOTYPE.md.
- H-1: đóng băng, tag `pa2`, nộp.

## Checklist "Fix these" (kiểm thử trước khi nộp)

- [ ] Không có ảnh người thật; ảnh có giấy phép ghi nguồn trong PROTOTYPE.md.
- [ ] Không còn nút demo: Màn 1/2/3, Đặt lại demo, Mô phỏng phản hồi của Linh, Mô phỏng thanh toán.
- [ ] Chuyển trang bằng link thật, nhãn dễ hiểu, nêu rõ ai tiếp tục (ví dụ "Nhân viên studio: mở cuộc trò chuyện này").
- [ ] Hành động chưa có trang (Thanh toán cọc 30%, gửi tin nhắn...) là nút disabled + ghi chú ngắn; không có link `#`.
- [ ] Mỗi trang mở trực tiếp đã hiện đúng trạng thái (Màn 1 câu hỏi; Màn 2 sau khi Linh đồng ý; Màn 3 chờ cọc).
- [ ] Màn 2: chat và cả form Booking mới đọc được bằng cuộn trang ở mọi độ rộng (không cột có scrollbar riêng).
- [ ] Màn 2: lịch tài nguyên không cắt nhãn; trùng lịch có chữ/biểu tượng, không chỉ màu/gạch chéo; ghi chú 09:00 trùng vì Mai bận 08:00–12:00.
- [ ] Màn 1: khung chat không đè nội dung, ở 360px không che gì.
- [ ] Màn 1: không hứa "giữ lịch" ở bước Chốt lịch; chỉ giữ chỗ sau khi cọc thành công.
- [ ] Tên trạng thái: Hội thoại = Chưa trả lời / Đang tư vấn / Đã chốt lịch / Hoàn thành; Booking = Chờ cọc 30% / Đã đặt lịch / Hoàn thành. Không dùng "Đã xác nhận".
- [ ] Booking, Lịch studio, Tài nguyên, Nhân sự, Xem đường đi, Ảnh đã chọn, link footer: xoá hoặc ghi "chưa có".
- [ ] Tên, giờ, gói, giá, mã GS-1024 khớp ví dụ ở mọi trang.

## Cho PA#3–PA#6

Khi có đề, thêm Issue theo từng PA. Hướng chung (theo phạm vi brief): tài khoản + phân quyền → catalogue/chat → kiểm tra trùng lịch và tạo booking → thanh toán cọc/còn lại + nhắc lịch + gallery. Đừng làm các mục "Not building" (nhiều studio, đồng bộ Zalo/Facebook, app di động, AI chỉnh ảnh...).

## Quy tắc chống trễ

- Họp ngắn 2 lần/tuần (15 phút): làm xong gì, vướng gì, việc tiếp.
- Việc nào vướng quá 1 ngày thì báo ngay, không tự ôm.
- Merge nhỏ, thường xuyên; tránh dồn tích hợp vào ngày cuối.
