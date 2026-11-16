import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Styleguide from './pages/Styleguide';
import { Button, Card, Badge } from './components';
import './App.css';

function Home() {
  return (
    <div
      className="section--paper"
      style={{ minHeight: '100vh', padding: 'var(--space-64) var(--space-16)' }}
    >
      <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
        <Badge variant="highlight" style={{ marginBottom: 'var(--space-16)' }}>
          GradStudio Design System
        </Badge>
        <h1 style={{ marginBottom: 'var(--space-16)', fontSize: '2.5rem' }}>
          GradStudio – Khoảnh khắc thanh xuân
        </h1>
        <p
          style={{
            fontSize: '1.125rem',
            color: 'var(--color-text-muted)',
            marginBottom: 'var(--space-32)',
            lineHeight: 1.6,
          }}
        >
          Hệ thống thiết kế client React theo phong cách scrapbook / film-journal. Bảng màu kem cổ
          điển kết hợp màu nhấn đất nung (#A6461F) tạo độ tương phản rõ nét.
        </p>

        <div
          style={{
            display: 'flex',
            gap: 'var(--space-16)',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <Link to="/styleguide" style={{ textDecoration: 'none' }}>
            <Button variant="primary">Mở trang Styleguide</Button>
          </Link>
          <a
            href="https://github.com/AnhSangNguyen0102/GradStudio"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
          >
            <Button variant="secondary">GitHub Repository</Button>
          </a>
        </div>

        <div style={{ marginTop: 'var(--space-48)', textAlign: 'left' }}>
          <Card variant="paper" torn>
            <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--space-8)' }}>
              Lối tắt kiểm tra giao diện (Styleguide)
            </h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9375rem' }}>
              Trang <code>/styleguide</code> hiển thị toàn bộ bảng màu kèm mã hex, tỉ lệ tương phản
              WCAG, 3 kiểu khu vực (.section--paper, .section--kraft, .section--dark), các biến thể
              của Button, Field (bình thường và lỗi), và toàn bộ các StatusBadge theo quy chuẩn
              CLAUDE.md.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/styleguide" element={<Styleguide />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
