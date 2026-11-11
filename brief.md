# BRIEF – GradStudio (PA#2)

Course CSC13008 · CQ2024/31 · HK1 2026–27. GradStudio is the class final project; PA#2–PA#6 are checked against the lecturer's brief. Where the authors' Vietnamese original or prototype differs from the brief, the brief wins.

## 1. The problem

Photo studios advertise on social networks, then advise customers and settle appointments over Facebook or Zalo. Customers struggle to see packages, sample photos and reviews in one place, and forget times or changes. Managers risk double bookings across photographers, make-up artists, rooms and costumes. After the shoot, chosen photos and final-file links are scattered across messages.

GradStudio brings services, sample photos, reviews and advice onto one website and ties every step to one booking: agree a time in chat after the resources are checked, the customer reviews the appointment and pays a 30% deposit, gets reminders by email and in their account, then chooses and receives photos in the same booking.

## 2. Users

| Role | Goals |
|---|---|
| Superadmin | Create and manage Admin accounts; system-wide settings (opening hours, when reminders go out). Takes no part in individual bookings. |
| Customer (Khách hàng) | See packages, sample photos, reviews; ask or send a booking request; agree a shoot time; pay a 30% deposit; get reminders; choose photos to be edited; receive files. For a class yearbook, one representative manages the booking. |
| Admin / studio manager | Turn a conversation into a booking; pick a time with no staff/room clash; assign and track shoots; change or cancel appointments; track payment status. |
| Studio staff (Nhân viên) | Know when and where to shoot, do make-up or edit photos; update their work; add preview photos; finish the photos the customer chose. |

## 3. Main flow

1. **Ask.** The customer views the portfolio, reviews, shoot types and packages. After signing in they chat with the studio or send a request (shoot type, preferred time, extras such as make-up or costume rental).
2. **Check and agree.** The Admin advises on packages and prices. The system checks each staff member's calendar and each resource for exactly the time needed. On a clash it gives the reason and suggests another time. In chat the Admin proposes a new time and the customer agrees or declines there. The booking form cannot create a booking until the customer has agreed. The Admin then creates a booking linked to the conversation with status **Chờ cọc 30%**.
3. **Deposit.** In "Lịch chụp của tôi" the customer reviews package, agreed times, price (1.800.000đ) and 30% deposit (540.000đ), then pays through an online gateway. They do not confirm the time a second time. Only when the deposit succeeds and the system re-checks the resources does the booking become **Đã đặt lịch**, which holds the slot, assigns staff and sets preparation milestones. Until then it does not hold the slot. Reminders go out by email and in the account 24 hours before the earliest milestone.
4. **Shoot.** Staff prepare, run the shoot, update its status and put low-resolution previews in the booking gallery. The customer chooses the number of photos to edit that the package allows.
5. **Finish.** After the shoot and photo choice, the customer pays the remaining 70% (1.260.000đ). Staff edit the chosen photos. When payment and photos are complete, the Admin adds the file link and the customer presses "Nhận ảnh". The booking becomes **Hoàn thành**.

### Example story (use identically on every page)

Linh wants a graduation shoot with make-up on Saturday 24/10/2026 at 09:00. Make-up artist Mai is busy 08:00–12:00, so the studio proposes make-up 13:00–14:00 with Mai and the shoot 14:00–16:00 with Tuấn in Phòng B. Linh agrees in chat. Admin Thảo creates booking **GS-1024**, package Gói Tốt nghiệp Premium (2 hours, 30 edited photos), shoot type Tốt nghiệp cá nhân, price 1.800.000đ, deposit 540.000đ, remaining 1.260.000đ.

## 4. Scope

**Building:** one studio with a catalogue of packages, extras, sample photos, reviews, and sample data for staff, rooms and costumes; Customer, Staff, Admin and Superadmin accounts; chat advice or customer requests, clash checks by person and resource, alternative times, booking creation, staff assignment, change/cancel; customers see their appointment and status, staff see their work, reminders by email and in the account; an online payment gateway for the 30% deposit and the remaining 70%, with payment status visible to customers and tracked by Admins; a preview gallery per booking where customers choose photos, staff update progress and deliver finals by link.

**Not building:** a marketplace comparing or booking several studios; crawling prices, reviews or availability from outside sources; automatic sync of Zalo/Facebook messages, SMS reminders; a separate iOS/Android app (the website works on phones); several branches or studios; automatic AI photo editing or face recognition.

## 5. PA#2 – the three pages

The team chooses layout, content, colours and file names (`index.html` is the first page). **Our team builds static HTML and CSS**: relative links, any CSS framework loaded as a local CSS file, and all content visible with JavaScript turned off (this is how static pages are marked).

### Screen 1 – Services and chat (customer)
Introduces the studio and shows three services: Kỷ yếu lớp (từ 350.000đ/người), Tốt nghiệp (từ 1.800.000đ), Chân dung/CV (từ 690.000đ). The chat shows Linh's question "Gói tốt nghiệp có makeup còn lịch 24/10 lúc 09:00 không?" and the studio's reply that it will check.

### Screen 2 – Advice and clash handling (Admin Thảo)
Conversation list; chat with the "Booking mới" form below it; resource calendar with suggested times. State shown: **after Linh agrees** – 14:00 chosen, conversation **Đã chốt lịch**, "Tạo booking" enabled, and a note that 09:00 clashed because Mai is busy 08:00–12:00.

### Screen 3 – Review the appointment and pay the deposit (customer)
GS-1024 waiting for the deposit: week view marking 24/10; timeline striking out 09:00 and showing make-up and the shoot; booking card "Đã thống nhất lịch · Chờ cọc 30%" with package, price, deposit, remainder and the button "Thanh toán cọc 30%".

### "Fix these" list (no page may show any of these problems)
1. No photos of real people. Use illustrations or initials, or licensed images whose source is named in `PROTOTYPE.md`.
2. No demo controls: Màn 1 / Màn 2 / Màn 3, Đặt lại demo, Mô phỏng phản hồi của Linh, Mô phỏng thanh toán. Move along the flow with real links and labels a user understands, and say who continues (e.g. "Studio staff: open this conversation").
3. Actions with no next page (Thanh toán cọc 30%, sending a message, …) are disabled buttons with a short visible note. A link to `#` counts as leading nowhere. One state per page, shown when the page is opened directly.
4. On Screen 2 the chat and the whole "Booking mới" form are readable by scrolling the page at every width (no column with its own scrollbar).
5. The resource calendar never cuts off labels; every booking is readable at every width; a clash is not shown by colour or hatching alone.
6. The Screen 1 chat does not float over and cover content; at 360 px it hides nothing.
7. Screen 1 does not promise the studio holds the slot at the "Chốt lịch" step; the slot is held only after the deposit succeeds.
8. Status names: conversations = Chưa trả lời, Đang tư vấn, Đã chốt lịch, Hoàn thành; bookings = Chờ cọc 30% (Screen 3 may show "Đã thống nhất lịch · Chờ cọc 30%"), Đã đặt lịch, Hoàn thành. Never "Đã xác nhận" for a conversation.
9. Booking, Lịch studio, Tài nguyên, Nhân sự, Xem đường đi, Ảnh đã chọn and footer links either are removed or are shown plainly as not available yet.
10. One story on all pages: names, times, package, prices and booking code follow the example.

### Technical requirements (from the PA#2 assignment)
- Pages link to each other and work at 360, 768 and 1280 px with no sideways scrolling.
- Semantic, valid HTML (0 errors in the W3C checker). A CSS framework is allowed.
- Marks cover: what the pages do in a browser, what we told the assistant, and how we checked what it wrote.

## 6. Product owners

Nguyễn Nhật Vy, Trần Kim Yến and Nguyễn Thị Trúc Hằng decide how GradStudio behaves and what is in scope where the brief is silent. Ask under the post "GradStudio — questions for the product owners" in the course Facebook group, starting with `#WAD2431`; no private messages. Answers come within two working days and apply to every team; cite them in `docs/DECISIONS.md` when relied on. They do not decide marks, deadlines, rubrics or what PA#2 requires.

## 6b. Constraints for the assistant (every PA#2 task)

Added on 2026-11-11 for the final responsive pass; the same rules are in `CLAUDE.md`, which the assistant reads in every session.

- **Stack:** static HTML + plain CSS. No CSS framework, no JavaScript, no JavaScript framework, no build step, no npm, no new dependency. No CDN or external URL for CSS, fonts, images or icons; fonts are system fonts or WOFF2 in `assets/fonts/`.
- **Spacing scale:** 4 / 8 / 12 / 16 / 24 / 32 / 48 px (64 and 80 between sections) through custom properties (`--space-*` in `style.css`, `--sp-*` in the screen files). Every `padding`, `margin` and `gap` uses the scale; no `!important`.
- **Mobile first, breakpoints 768 px and 1024 px** (Screen 2 adds 1200 px for three columns). Must work at 360, 768 and 1280 px.
- **No fixed widths** on layout boxes: use `max-width`, `minmax(0, …)`, `fr`, `%`. Images `max-width: 100%`. Long Vietnamese names and labels wrap; never truncate with `…` or `text-overflow: ellipsis`.
- **No hidden overflow:** never `overflow-x: hidden/clip` on `html`, `body` or a wrapper to hide something that sticks out — fix the element.
- **Tap targets:** buttons and links that stand on their own are at least 44 px tall at 360 px. Body text at least 16 px; text and buttons at least 4.5:1 contrast.
- **No `position: fixed/sticky`** and no column with its own scrollbar: the whole page scrolls as one.
- **Semantic HTML:** `header`, `nav`, `main`, `footer`; exactly one `<h1>` and no skipped heading level; going to another page is an `<a href>` or a form's submit button with `action`, an action is a `<button>`; every input has a visible `<label for>`; every image has `alt` (`alt=""` if decorative).
- **Links:** relative links to files (`admin-tu-van.html`), never `/page.html`, a folder, `#` or an empty `href`. Actions with no page yet are `<button disabled>` with a visible note linked by `aria-describedby`.

## 6c. How "done" is checked

1. `python3 checks/run_checks.py`: 0 FAIL. It opens every page with JavaScript off at 360, 768 and 1280 px, checks links, sideways scroll, fixed/sticky/ellipsis, headings, labels, alt and external requests, and writes `checks/results.md` and the nine `screenshots/`.
2. At each width in DevTools: `document.documentElement.scrollWidth > document.documentElement.clientWidth` prints `false`, and `[...document.querySelectorAll('body *')].filter(e => e.getBoundingClientRect().right > document.documentElement.clientWidth)` prints `[]`.
3. W3C Nu checker (https://validator.w3.org/nu/) on every page by file upload: 0 errors, result saved as `checks/validator-<page>`.
4. DevTools → Elements → Accessibility pane: landmarks, heading outline, label names and button names read correctly; the colour picker shows at least 4.5:1 for body text and buttons.
5. A person reads each page with JavaScript off at the three widths and checks every item of the "Fix these" list.

## Deadline and submission

Hand in by Wednesday 11/11/2026, 22:00: one zip per team named `<ID1>-<ID2>-<ID3>_<total>.zip` (IDs ascending, total = our self-assessed score). Zip the repository folder itself, including `.git`. Inside: the repository, the rules file, `PROTOTYPE.md`, `screenshots/`, `checks/`, `brief.md`, `AI-LOG.md` and `SELF_ASSESSMENT_REPORT.md` (one row per rubric criterion, each with evidence). A missing `SELF_ASSESSMENT_REPORT.md` costs 10 points; the rubric applies an honesty adjustment.
