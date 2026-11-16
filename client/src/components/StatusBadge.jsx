import './StatusBadge.css';

/**
 * Status definitions with exact Vietnamese labels from CLAUDE.md
 * and strictly isolated status colors (NEVER using accent colors).
 */
const STATUS_CONFIG = {
  UNANSWERED: {
    label: 'Chưa trả lời',
    theme: 'danger',
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M8 4.5V8.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="8" cy="11.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  CONSULTING: {
    label: 'Đang tư vấn',
    theme: 'warning',
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M8 4.5V8L10.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  AGREED: {
    label: 'Đã chốt lịch',
    theme: 'success',
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M3.5 8.5L6.5 11.5L12.5 4.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  DONE: {
    label: 'Hoàn thành',
    theme: 'success',
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M3.5 8.5L6.5 11.5L12.5 4.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  PENDING_DEPOSIT: {
    label: 'Chờ cọc 30%',
    theme: 'warning',
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M8 4.5V8L10.5 10.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  BOOKED: {
    label: 'Đã đặt lịch',
    theme: 'success',
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M3.5 8.5L6.5 11.5L12.5 4.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  COMPLETED: {
    label: 'Hoàn thành',
    theme: 'success',
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M3.5 8.5L6.5 11.5L12.5 4.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  CANCELLED: {
    label: 'Đã hủy',
    theme: 'danger',
    icon: (
      <svg
        width="12"
        height="12"
        viewBox="0 0 16 16"
        fill="none"
        aria-hidden="true"
        focusable="false"
      >
        <path
          d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
};

/**
 * StatusBadge component
 * @param {Object} props
 * @param {'UNANSWERED' | 'CONSULTING' | 'AGREED' | 'DONE' | 'PENDING_DEPOSIT' | 'BOOKED' | 'COMPLETED' | 'CANCELLED'} props.status
 * @param {string} [props.className]
 */
export function StatusBadge({ status, className = '' }) {
  const config = STATUS_CONFIG[status];

  if (!config) {
    return (
      <span className={`status-badge status-badge--warning ${className}`}>
        <span>{status}</span>
      </span>
    );
  }

  return (
    <span className={`status-badge status-badge--${config.theme} ${className}`}>
      <span className="status-badge__icon">{config.icon}</span>
      <span className="status-badge__label">{config.label}</span>
    </span>
  );
}

export default StatusBadge;
