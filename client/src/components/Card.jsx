import './Card.css';

/**
 * Card component (tactile paper card in scrapbook style)
 * @param {Object} props
 * @param {'paper' | 'kraft' | 'polaroid'} [props.variant='paper']
 * @param {boolean} [props.torn=false] - Whether to apply torn paper edges
 * @param {string} [props.className]
 * @param {React.ReactNode} props.children
 * @param {string} [props.as='div']
 */
export function Card({
  variant = 'paper',
  torn = false,
  className = '',
  children,
  as: Component = 'div',
  ...rest
}) {
  const tornClass = torn ? 'card--torn' : '';
  return (
    <Component className={`card card--${variant} ${tornClass} ${className}`} {...rest}>
      {children}
    </Component>
  );
}

export default Card;
