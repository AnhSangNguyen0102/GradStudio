# Project Rules – GradStudio MVP (React + API)

Read `brief.md` first, then `docs/API.md` and `docs/DECISIONS.md`. These rules are mandatory. If a request conflicts with a rule, say so instead of silently ignoring the rule.

The PA#2 static pages live in `pa2/` and are frozen (tag `pa2`). Do not edit anything in `pa2/`.

## Stack and commands

- Client: React + Vite + React Router in `client/`. Plain CSS (tokens in `client/src/styles/tokens.css`), no CSS framework.
- Server: Node.js + Express (ES modules) in `server/`. Prisma ORM, zod for input validation.
- Database: PostgreSQL on Supabase. Files (preview photos): Supabase Storage, private bucket, served through signed URLs created by the server. Chat updates: Supabase Realtime used only as a "something changed" signal; message content is always read through the Express API.
- Payments: VNPay sandbox. Email: Nodemailer (Mailtrap in development). Reminders: node-cron.
- Run both sides: `npm run dev` at the repo root (client http://localhost:5173, server http://localhost:3000; `/api` is proxied by Vite).
- Check: `npm run lint`, `npm run format:check`, `npm test --prefix server`, `npm run build --prefix client`. GitHub Actions runs the same on every PR.
- ALWAYS run the checks before committing. NEVER say a check passed unless it was actually run; say which checks were not run.
- Do not add a dependency, file or feature the task does not need. Ask before adding a new npm package.

## Contract first

- `docs/API.md` is the contract between client and server. Client mocks in `client/src/mocks/` follow it exactly.
- Changing an endpoint, field name or error code means: a PR that edits `docs/API.md` first, approved by the teammate who uses that endpoint.
- Error format, always: `{ "error": { "code", "message", "details" } }`, `message` in Vietnamese.

## Code layout

- Server: one folder per module in `server/src/modules/<name>/` with `<name>.routes.js`, `.controller.js`, `.service.js`, `.schema.js`, `.test.js`. Business logic lives in the service; controllers only read the request and send the response.
- Client: pages in `client/src/pages/<role>/`, shared components in `client/src/components/`, all HTTP calls through `client/src/api/`.
- Times are stored in UTC and shown in Asia/Ho_Chi_Minh.

## Security (never break these)

- Never commit `.env` or real keys. New variables go into `.env.example` with a fake value.
- The Supabase `service_role` key is used only on the server. The browser never gets it and never reads tables or buckets directly.
- Every endpoint checks the role (`requireRole`) and ownership: a customer sees only their own conversations, bookings and photos; staff see only bookings they are assigned to.
- Validate every request body, query and param with zod.
- VNPay: booking status changes only in the IPN handler, after checking the signature; the IPN handler is idempotent.

## Business rules (from the brief – do not "simplify" them)

- Clash check: two time ranges overlap when `a.start < b.end && b.start < a.end`. Only segments of bookings in **Đã đặt lịch** and busy blocks hold a slot; **Chờ cọc 30%** does not.
- A booking can be created only from a conversation whose time proposal the customer accepted.
- Deposit success → re-check resources in one transaction → **Đã đặt lịch**. The database also has an `EXCLUDE` constraint against overlapping held segments.
- The remaining 70% can be paid only after the shoot and after the customer saved the photo selection.
- "Nhận ảnh" only when 70% is paid and the Admin added the final-file link → **Hoàn thành**.
- Reminder by email and in the account N hours (Superadmin setting, default 24) before the earliest milestone.

## Content and data

- All displayed text is in Vietnamese with full diacritics. Docs, code, identifiers and code comments are in English.
- Status names, exactly. Conversations: Chưa trả lời / Đang tư vấn / Đã chốt lịch / Hoàn thành. Bookings: Chờ cọc 30% / Đã đặt lịch / Hoàn thành (+ the cancelled status decided in `docs/DECISIONS.md`). Never "Đã xác nhận" for a conversation.
- Sample data follows the example story: Linh (Nguyễn Thùy Linh), Admin Thảo, make-up 13:00–14:00 with Mai, shoot 14:00–16:00 with Tuấn in Phòng B, Mai busy 08:00–12:00, Gói Tốt nghiệp Premium (2 giờ, 30 ảnh chỉnh), 1.800.000đ / 540.000đ / 1.260.000đ, GS-1024. Keep the long sample name "Tôn Nữ Hoàng Bảo Ngọc · Đại diện lớp 12A3 (kỷ yếu cả lớp)".
- No photos of real people anywhere (seed, mocks, previews): illustrations or initials only.
- Do not build anything from the brief's "Not building" list.

## Design and accessibility (carried over from PA#2)

- Scrapbook / film-journal style from PA#2; handwriting font only for decoration, never for labels, buttons or important facts.
- Works at 360, 768 and 1280 px with no sideways scroll; mobile first, breakpoints 768 px and 1024 px.
- Spacing only from the scale 4/8/12/16/24/32/48 (+64/80) via `--space-*`. No `!important`. No fixed widths on layout boxes.
- Never truncate with `…` or `text-overflow: ellipsis`; long Vietnamese names wrap.
- No `position: fixed/sticky` chat and no column with its own scrollbar.
- A status or clash is never shown by colour alone: always icon + text.
- Body text ≥ 16 px, contrast ≥ 4.5:1, visible focus, keyboard works, standalone buttons/links ≥ 44 px tall at 360 px.
- One `<h1>` per page, no skipped heading levels, every input has a visible `<label>`, every image has `alt`.
- Navigation is a `<Link>`/`<a href>`, an action is a `<button>`. Every page has loading, empty and error states.

## Using the AI assistant (course rules)

- AI is allowed. Every use is declared in `AI-LOG.md`; the assistant writes the entries itself (see below).
- We own the code. Anything a teammate cannot explain scores zero, even if it runs. Keep code simple, comment non-obvious parts, and after each task explain in plain words what you changed and why.
- NEVER put API keys, real user data, real people's photos or names, or a classmate's work into prompts or files.
- Never invent sources, licences, product-owner citations, check results or scores.

## AI-LOG protocol (the assistant does this automatically)

- After every task in which you wrote, changed or advised on something for this repository, and BEFORE your final reply, append ONE entry to the end of `AI-LOG.md`. Append only.
- Format, exactly:

  ```md
  ## <YYYY-MM-DD> — <what you were working on>

  Tool: <tool and model>
  Asked for: <the task, in one sentence>
  Kept: <what you took as it came>
  Changed: <what was rewritten, and why>
  Rejected: <what was thrown away, and why>
  By hand: <the parts the person wrote themselves>
  ```

- Write only what the conversation shows. What only the person can know is written as `(person to fill in)`. Never write PASS or "checked" unless that check was run in this session.

## Git

- Branches: `main` (stable, deployed) ← `dev` (daily integration) ← `feat/...`, `fix/...`, `chore/...` (one task each).
- No direct pushes to `main` or `dev`. A PR into `dev`, one teammate reviews within 12 hours, CI green. Write `Closes #<issue>` in the PR.
- `dev` → `main` only at the Thursday-evening weekly review.
- Small commits with clear messages (`feat: add photo selection counter`).

## Done when (every task)

- [ ] Runs on staging, not only on your machine
- [ ] Main logic has tests (clash check, payments and permissions are mandatory)
- [ ] No sideways scroll at 360/768/1280; correct status names and sample story
- [ ] PR reviewed; the author can explain every line
- [ ] `AI-LOG.md` entry if AI was used
