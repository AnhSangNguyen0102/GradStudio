import './Badge.css';

/**
 * Badge component
 * @param {Object} props
 * @param {'default' | 'highlight'} [props.variant='default'] - Use 'highlight' for "Phổ biến nhất"
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export function Badge({ variant = 'default', className = '', children, ...rest }) {
  return (
    <span className={`badge badge--${variant} ${className}`} {...rest}>
      {children}
    </span>
  );
}

export default Badge;
