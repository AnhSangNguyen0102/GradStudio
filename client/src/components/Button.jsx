import { useId } from 'react';
import './Button.css';

/**
 * Button component
 * @param {Object} props
 * @param {'primary' | 'secondary' | 'ghost'} [props.variant='primary']
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.note] - Visible note linked via aria-describedby (especially for disabled actions)
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 * @param {'button' | 'submit' | 'reset'} [props.type='button']
 */
export function Button({
  variant = 'primary',
  disabled = false,
  note,
  className = '',
  children,
  type = 'button',
  id,
  'aria-describedby': ariaDescribedByProp,
  ...rest
}) {
  const generatedId = useId();
  const buttonId = id || `btn-${generatedId}`;
  const noteId = note ? `${buttonId}-note` : undefined;

  const describedBy = [ariaDescribedByProp, noteId].filter(Boolean).join(' ') || undefined;

  const btnElement = (
    <button
      id={buttonId}
      type={type}
      disabled={disabled}
      className={`btn btn--${variant} ${className}`}
      aria-describedby={describedBy}
      {...rest}
    >
      {children}
    </button>
  );

  if (note) {
    return (
      <div className="btn-wrapper">
        {btnElement}
        <span id={noteId} className="btn-note">
          {note}
        </span>
      </div>
    );
  }

  return btnElement;
}

export default Button;
