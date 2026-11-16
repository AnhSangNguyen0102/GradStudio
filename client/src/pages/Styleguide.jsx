import { useState } from 'react';
import { Button, Field, StatusBadge, Card, Badge } from '../components';
import './Styleguide.css';

const COLOR_GROUPS = [
  {
    title: 'Nền (Backgrounds)',
    items: [
      {
        name: '--color-bg',
        hex: '#F6EFE2',
        role: 'Nền giấy kem chính toàn trang',
        contrast: '13.68:1 với chữ espresso',
        textLight: false,
      },
      {
        name: '--color-surface',
        hex: '#FFFDF9',
        role: 'Bề mặt thẻ, card, input',
        contrast: '15.40:1 với chữ espresso',
        textLight: false,
      },
      {
        name: '--color-kraft',
        hex: '#E6D7BF',
        role: 'Nền giấy kraft mộc có mép xé',
        contrast: '11.05:1 với chữ espresso',
        textLight: false,
      },
      {
        name: '--color-dark',
        hex: '#2D2118',
        role: 'Khu vực nền tối (tối đa 1/trang)',
        contrast: '13.68:1 với chữ kem #F6EFE2',
        textLight: true,
      },
    ],
  },
  {
    title: 'Chữ (Typography)',
    items: [
      {
        name: '--color-text',
        hex: '#2D2118',
        role: 'Chữ chính (nâu espresso đậm)',
        contrast: '> 11:1 trên mọi nền sáng',
        textLight: true,
      },
      {
        name: '--color-text-muted',
        hex: '#655243',
        role: 'Chữ phụ, nhãn phụ, mô tả',
        contrast: '6.46:1 trên nền kem',
        textLight: true,
      },
      {
        name: '--color-text-on-dark',
        hex: '#F6EFE2',
        role: 'Chữ kem trên nền tối',
        contrast: '13.68:1 trên nền dark',
        textLight: false,
      },
    ],
  },
  {
    title: 'Nâu thương hiệu (Brand Brown)',
    items: [
      {
        name: '--color-brand',
        hex: '#8B5A2B',
        role: 'Link, viền, icon, nút phụ (secondary)',
        contrast: '5.11:1 trên nền kem (đạt AA)',
        textLight: true,
      },
      {
        name: '--color-brand-hover',
        hex: '#6F451F',
        role: 'Trạng thái hover của nâu thương hiệu',
        contrast: '7.21:1 trên nền kem (đạt AAA)',
        textLight: true,
      },
    ],
  },
  {
    title: 'Màu nhấn (Accent - Terracotta)',
    items: [
      {
        name: '--color-accent',
        hex: '#A6461F',
        role: 'Nút chính primary, giá tiền, badge highlight',
        contrast: '5.22:1 với chữ kem',
        textLight: true,
      },
      {
        name: '--color-accent-hover',
        hex: '#8A3A19',
        role: 'Hover nút chính primary',
        contrast: '6.80:1 với chữ kem',
        textLight: true,
      },
      {
        name: '--color-accent-soft',
        hex: '#F6DDD0',
        role: 'Nền badge "Phổ biến nhất"',
        contrast: '4.60:1 với chữ #A6461F',
        textLight: false,
      },
      {
        name: '--color-accent-on-dark',
        hex: '#E8A27C',
        role: 'Điểm nhấn link/icon trên nền tối',
        contrast: '7.37:1 trên nền dark (AAA)',
        textLight: false,
      },
    ],
  },
  {
    title: 'Trạng thái (Status - Cách ly hoàn toàn với màu nhấn)',
    items: [
      {
        name: '--color-success',
        hex: '#375336',
        role: 'Chữ thành công (Đã chốt, Đã đặt, Hoàn thành)',
        contrast: '6.09:1 trên nền success-bg',
        textLight: true,
      },
      {
        name: '--color-success-bg',
        hex: '#CFDEC9',
        role: 'Nền trạng thái thành công (xanh sage)',
        contrast: 'Nền cho #375336',
        textLight: false,
      },
      {
        name: '--color-warning',
        hex: '#6C572D',
        role: 'Chữ cảnh báo/chờ (Đang tư vấn, Chờ cọc 30%)',
        contrast: '5.44:1 trên nền warning-bg',
        textLight: true,
      },
      {
        name: '--color-warning-bg',
        hex: '#EFE3CD',
        role: 'Nền cảnh báo/chờ (vàng bơ)',
        contrast: 'Nền cho #6C572D',
        textLight: false,
      },
      {
        name: '--color-danger',
        hex: '#8E2B3A',
        role: 'Chữ huỷ/lỗi (Chưa trả lời, Đã hủy)',
        contrast: '6.59:1 trên nền danger-bg',
        textLight: true,
      },
      {
        name: '--color-danger-bg',
        hex: '#F8E1E1',
        role: 'Nền huỷ/lỗi (hồng pastel)',
        contrast: 'Nền cho #8E2B3A',
        textLight: false,
      },
    ],
  },
];

const STATUS_CODES = [
  'UNANSWERED',
  'CONSULTING',
  'AGREED',
  'DONE',
  'PENDING_DEPOSIT',
  'BOOKED',
  'COMPLETED',
  'CANCELLED',
];

export function Styleguide() {
  const [inputValue, setInputValue] = useState('');
  const [fieldError, setFieldError] = useState('Số điện thoại không hợp lệ (cần 10 chữ số).');

  return (
    <div className="styleguide">
      <header className="styleguide__header">
        <div className="container">
          <h1>Hệ thống Thiết kế GradStudio – Styleguide</h1>
          <p className="styleguide__intro">
            Trang tài liệu tra cứu trực quan và kiểm tra hệ thống design tokens, typography, bảng
            màu, 3 lớp khu vực và các thành phần giao diện theo phong cách scrapbook / film-journal.
          </p>
          <nav aria-label="Mục lục Styleguide" className="styleguide__toc">
            <a href="#palette">Bảng màu</a>
            <a href="#sections">3 Kiểu khu vực</a>
            <a href="#buttons">Nút bấm (Button)</a>
            <a href="#fields">Ô nhập liệu (Field)</a>
            <a href="#statuses">Trạng thái (StatusBadge)</a>
            <a href="#cards">Thẻ & Huy hiệu (Card / Badge)</a>
          </nav>
        </div>
      </header>

      <main className="container">
        {/* 1. BẢNG MÀU */}
        <section id="palette" className="styleguide-block">
          <h2 className="styleguide-block__title">1. Bảng màu & Tương phản WCAG</h2>
          <p className="styleguide-block__desc">
            Phân bổ màu chuẩn 60-30-10: 60% nền kem (#F6EFE2 / #FFFDF9), 30% nâu espresso & thương
            hiệu cho chữ/viền/icon, 10% màu nhấn đất nung (#A6461F) cho nút chính và điểm cốt lõi.
            Mọi cặp màu văn bản đều đạt chuẩn tương phản WCAG 2.1 AA (≥ 4.5:1).
          </p>

          {COLOR_GROUPS.map((group) => (
            <div key={group.title} style={{ marginBottom: 'var(--space-32)' }}>
              <h3 style={{ marginBottom: 'var(--space-12)', fontSize: '1.125rem' }}>
                {group.title}
              </h3>
              <div className="palette-grid">
                {group.items.map((item) => (
                  <div key={item.name} className="swatch-card">
                    <div
                      className="swatch-preview"
                      style={{
                        backgroundColor: item.hex,
                        color: item.textLight ? '#FFFDF9' : '#2D2118',
                        borderBottom: '1px solid var(--color-border)',
                      }}
                    >
                      {item.hex}
                    </div>
                    <div className="swatch-info">
                      <div className="swatch-name">{item.name}</div>
                      <div className="swatch-hex">{item.hex}</div>
                      <div className="swatch-meta">{item.role}</div>
                      <div className="swatch-contrast">✓ {item.contrast}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* 2. BA KIỂU KHU VỰC */}
        <section id="sections" className="styleguide-block">
          <h2 className="styleguide-block__title">2. Ba kiểu khu vực (Section Surfaces)</h2>
          <p className="styleguide-block__desc">
            Giải quyết triệt để vấn đề các khu vực trên trang dính vào nhau do chênh lệch tương phản
            kém. Mỗi trang có nhiều nhất một khu vực nền tối.
          </p>

          <div className="section-demo-wrapper">
            {/* .section--paper */}
            <div className="section--paper section-box">
              <span className="badge badge--default" style={{ marginBottom: 'var(--space-8)' }}>
                .section--paper
              </span>
              <h3>Khu vực Giấy kem (Classic Paper)</h3>
              <p>
                Nền chính của website (#F6EFE2), có hạt giấy tactile noise nhẹ, mang phong cách nhật
                ký hoài niệm của PA#2. Chữ espresso (#2D2118) đạt tương phản cao 13.68:1.
              </p>
              <Button variant="primary">Hành động chính</Button>
            </div>

            {/* .section--kraft */}
            <div className="section--kraft section-box">
              <span className="badge badge--default" style={{ marginBottom: 'var(--space-8)' }}>
                .section--kraft (Mép giấy xé)
              </span>
              <h3>Khu vực Giấy Kraft (Torn Paper Edges)</h3>
              <p>
                Nền giấy kraft mộc (#E6D7BF) với <strong>mép xé CSS tự nhiên</strong> ở mép trên và
                mép dưới (sử dụng clip-path polygon không tải ảnh ngoài). Tạo cảm giác một mảnh giấy
                kẹp trong sổ lưu bút, phân tách rõ ràng với khu vực giấy kem liền kề.
              </p>
              <div style={{ display: 'flex', gap: 'var(--space-12)', flexWrap: 'wrap' }}>
                <Button variant="primary">Đặt lịch ngay</Button>
                <Button variant="secondary">Xem bảng giá</Button>
              </div>
            </div>

            {/* .section--dark */}
            <div className="section--dark section-box">
              <span className="badge badge--default" style={{ marginBottom: 'var(--space-8)' }}>
                .section--dark
              </span>
              <h3>Khu vực Nền tối (Dark Espresso Journal)</h3>
              <p>
                Nền nâu đen espresso (#2D2118) chỉ dùng cho dải film hoặc phần nhấn mạnh đặc biệt
                (tối đa 1 khu vực trên mỗi trang). Chữ kem (#F6EFE2) đạt tương phản 13.68:1. Điểm
                nhấn liên kết và chi tiết quan trọng sử dụng token{' '}
                <span className="accent">--color-accent-on-dark (#E8A27C)</span> đạt tương phản
                7.37:1.
              </p>
              <p>
                <a href="#sections">Đường dẫn trong khu vực tối tự đổi sang màu cam ấm</a>
              </p>
            </div>
          </div>
        </section>

        {/* 3. NÚT BẤM */}
        <section id="buttons" className="styleguide-block">
          <h2 className="styleguide-block__title">3. Nút bấm (Button Variants)</h2>
          <p className="styleguide-block__desc">
            Quy chuẩn tương tác: Chiều cao tối thiểu 44px (chuẩn tap-target WCAG 2.5.5). Chỉ có DUY
            NHẤT MỘT nút primary trên mỗi khu vực. Các thao tác chưa có trang đích được disable kèm
            prop note nối bằng aria-describedby.
          </p>

          <div className="demo-row">
            <div className="demo-group">
              <span className="demo-group__label">Primary (Nổi bật nhất)</span>
              <Button variant="primary">Thanh toán cọc 30%</Button>
            </div>

            <div className="demo-group">
              <span className="demo-group__label">Secondary (Nâu thương hiệu)</span>
              <Button variant="secondary">Xem chi tiết gói</Button>
            </div>

            <div className="demo-group">
              <span className="demo-group__label">Ghost (Không viền)</span>
              <Button variant="ghost">Quay lại danh sách</Button>
            </div>
          </div>

          <h3
            style={{
              fontSize: '1.125rem',
              marginTop: 'var(--space-24)',
              marginBottom: 'var(--space-12)',
            }}
          >
            Trạng thái vô hiệu hóa kèm ghi chú (Disabled with Note)
          </h3>
          <div className="demo-row">
            <div className="demo-group">
              <span className="demo-group__label">Primary Disabled + Note</span>
              <Button
                variant="primary"
                disabled
                note="Chờ khách hàng đồng ý thời gian chụp trước khi tạo lịch"
              >
                Tạo booking
              </Button>
            </div>

            <div className="demo-group">
              <span className="demo-group__label">Secondary Disabled + Note</span>
              <Button
                variant="secondary"
                disabled
                note="Chức năng tải file hoàn thiện sẽ mở sau khi thanh toán 70%"
              >
                Nhận ảnh hoàn thiện
              </Button>
            </div>
          </div>
        </section>

        {/* 4. Ô NHẬP LIỆU */}
        <section id="fields" className="styleguide-block">
          <h2 className="styleguide-block__title">4. Ô nhập liệu (Field)</h2>
          <p className="styleguide-block__desc">
            Nhãn hiển thị rõ ràng và liên kết với input qua htmlFor. Phần thông báo lỗi liên kết qua
            aria-describedby và aria-invalid. Cỡ chữ 16px chống tự động zoom trên iOS Safari.
          </p>

          <div className="demo-row">
            <Field
              id="field-demo-name"
              label="Họ và tên người đại diện"
              required
              placeholder="Ví dụ: Nguyễn Thùy Linh"
              hint="Tên người nhận ảnh và quản lý lịch chụp với studio"
            />

            <Field
              id="field-demo-phone"
              label="Số điện thoại liên hệ"
              required
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                if (e.target.value.length === 10) {
                  setFieldError('');
                } else {
                  setFieldError('Số điện thoại không hợp lệ (cần 10 chữ số).');
                }
              }}
              error={fieldError}
              placeholder="0912 345 678"
            />

            <Field
              id="field-demo-disabled"
              label="Mã đặt lịch (Hệ thống cấp)"
              disabled
              value="GS-1024"
              hint="Mã booking được tạo tự động sau khi chốt lịch"
            />
          </div>
        </section>

        {/* 5. TRẠNG THÁI STATUS BADGE */}
        <section id="statuses" className="styleguide-block">
          <h2 className="styleguide-block__title">5. Huy hiệu Trạng thái (StatusBadge)</h2>
          <p className="styleguide-block__desc">
            Tuyệt đối KHÔNG BAO GIỜ dùng màu nhấn terracotta cho trạng thái. Luôn hiển thị kết hợp
            icon + nhãn chữ tiếng Việt có dấu đầy đủ theo đúng hợp đồng trong CLAUDE.md.
          </p>

          <div className="badges-grid">
            {STATUS_CODES.map((code) => (
              <div key={code} className="badge-item">
                <span className="badge-code">{code}</span>
                <StatusBadge status={code} />
              </div>
            ))}
          </div>
        </section>

        {/* 6. THẺ & HUY HIỆU */}
        <section id="cards" className="styleguide-block">
          <h2 className="styleguide-block__title">6. Thẻ (Card) & Huy hiệu (Badge)</h2>
          <p className="styleguide-block__desc">
            Badge variant "highlight" sử dụng màu nền dịu --color-accent-soft (#F6DDD0) dành riêng
            cho chữ "Phổ biến nhất". Thẻ Card hỗ trợ kiểu giấy trắng ngà, giấy kraft và mép xé
            scrap.
          </p>

          <div className="demo-row">
            <div className="demo-group">
              <span className="demo-group__label">Badge Highlight</span>
              <Badge variant="highlight">Phổ biến nhất</Badge>
            </div>
            <div className="demo-group">
              <span className="demo-group__label">Badge Default</span>
              <Badge variant="default">Gói 2 giờ · 30 ảnh</Badge>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 'var(--space-24)',
              marginTop: 'var(--space-16)',
            }}
          >
            <Card variant="paper">
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  Gói chụp cá nhân
                </span>
                <Badge variant="default">Cá nhân</Badge>
              </div>
              <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                Tốt nghiệp Tiêu chuẩn
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                Phù hợp cho sinh viên muốn lưu giữ bộ ảnh tốt nghiệp đơn giản, thanh lịch.
              </p>
              <div style={{ marginTop: 'var(--space-16)', fontWeight: 700, fontSize: '1.25rem' }}>
                1.200.000đ
              </div>
            </Card>

            <Card variant="paper" torn>
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  Gói chụp cao cấp
                </span>
                <Badge variant="highlight">Phổ biến nhất</Badge>
              </div>
              <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                Tốt nghiệp Premium (Mép xé)
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                2 giờ chụp tại Phòng B + make-up chuyên nghiệp bởi chuyên viên Mai.
              </p>
              <div
                style={{
                  marginTop: 'var(--space-16)',
                  fontWeight: 700,
                  fontSize: '1.25rem',
                  color: 'var(--color-accent)',
                }}
              >
                1.800.000đ
              </div>
            </Card>

            <Card variant="kraft">
              <div
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
              >
                <span style={{ fontWeight: 600, color: 'var(--color-text-muted)' }}>
                  Gói tập thể
                </span>
                <Badge variant="default">Kỷ yếu lớp</Badge>
              </div>
              <h3 style={{ marginTop: 'var(--space-8)', marginBottom: 'var(--space-8)' }}>
                Kỷ yếu Lớp Học
              </h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
                Chụp ngoại cảnh trường học và phòng studio kỷ yếu cho toàn bộ tập thể lớp.
              </p>
              <div style={{ marginTop: 'var(--space-16)', fontWeight: 700, fontSize: '1.25rem' }}>
                Từ 350.000đ/người
              </div>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Styleguide;
