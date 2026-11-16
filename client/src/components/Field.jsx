import { useId } from 'react';
import './Field.css';

/**
 * Field component (accessible form input with visible label and error linking)
 * @param {Object} props
 * @param {string} [props.id]
 * @param {string} props.label - Visible label
 * @param {string} [props.error] - Error message (linked via aria-describedby)
 * @param {string} [props.hint] - Helpful hint text
 * @param {boolean} [props.required=false]
 * @param {boolean} [props.disabled=false]
 * @param {string} [props.type='text']
 * @param {string} [props.className]
 */
export function Field({
  id,
  label,
  error,
  hint,
  required = false,
  disabled = false,
  type = 'text',
  className = '',
  'aria-describedby': ariaDescribedByProp,
  ...rest
}) {
  const generatedId = useId();
  const inputId = id || `field-${generatedId}`;
  const errorId = error ? `${inputId}-error` : undefined;
  const hintId = hint ? `${inputId}-hint` : undefined;

  const describedBy = [ariaDescribedByProp, errorId, hintId].filter(Boolean).join(' ') || undefined;

  return (
    <div className={`field ${error ? 'field--error' : ''} ${className}`}>
      <label htmlFor={inputId} className="field__label">
        {label}
        {required && (
          <span className="field__required" aria-hidden="true">
            *
          </span>
        )}
      </label>

      <input
        id={inputId}
        type={type}
        required={required}
        disabled={disabled}
        aria-invalid={Boolean(error)}
        aria-describedby={describedBy}
        className="field__input"
        {...rest}
      />

      {error && (
        <div id={errorId} className="field__error" role="alert">
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            aria-hidden="true"
            focusable="false"
          >
            <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5" />
            <path d="M8 4.5V8.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="11.5" r="1" fill="currentColor" />
          </svg>
          <span>{error}</span>
        </div>
      )}

      {!error && hint && (
        <div id={hintId} className="field__hint">
          {hint}
        </div>
      )}
    </div>
  );
}

export default Field;
