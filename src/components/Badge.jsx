// src/components/Badge.jsx
import React from 'react';
import { cx } from '../utils/cx';

const Badge = ({
  children,
  variant = 'gradient', // 'gradient' | 'solid' | 'secondary' | 'outline' | 'ghost'
  className,
  ...props
}) => {
  // map variant → CSS class
  const variantClass = {
    gradient: 'badge-gradient',
    solid: 'badge-solid',
    secondary: 'badge-secondary',
    outline: 'badge-outline',
    ghost: 'badge-ghost'
  }[variant];

  return (
    <span className={cx('badge', variantClass, className)} {...props}>
      {children}
    </span>
  );
};

export default Badge;
