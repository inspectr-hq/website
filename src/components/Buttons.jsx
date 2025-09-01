// src/components/Button.jsx
import { cx } from '../utils/cx';

export default function Button({
  children,
  variant = 'primary',
  as = 'button',
  href,
  className,
  ...props
}) {
  const base =
    'inline-flex items-center  justify-center  px-4 py-2 border text-sm font-medium rounded';
  const styles = {
    primary: 'bg-indigo-600 text-white border-transparent hover:bg-indigo-700',
    secondary: 'bg-white text-indigo-600 border-gray-300 hover:bg-gray-50',
    light: 'bg-transparent text-indigo-600 hover:underline border-transparent'
  };
  const Comp = as === 'a' ? 'a' : 'button';
  const compProps = as === 'a' ? { href } : {};
  return (
    <Comp className={cx(base, styles[variant], className)} {...compProps} {...props}>
      {children}
    </Comp>
  );
}
