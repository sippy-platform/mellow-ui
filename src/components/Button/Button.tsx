import React, { ReactNode, useMemo } from 'react';

import clsx from 'clsx';

export interface ButtonProps {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'color' | 'hover' | 'primary' | 'secondary' | 'danger' | 'success';
  /**
   * The color of the button, only works when the variant is `color` or `hover`
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * The button size.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Button activation state.
   */
  active?: boolean;
  /**
   * Button disabled state.
   */
  disabled?: boolean;
  /**
   * Show button as a block.
   */
  block?: boolean;
  /**
   * If we have a href, it's an anchor.
   */
  href?: string;
  /**
   * Button contents.
   */
  children: ReactNode;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export function Button({
  variant = 'default',
  size = 'md',
  color,
  children,
  active = false,
  disabled = false,
  block = false,
  href,
  ...props
}: ButtonProps) {
  const Component = useMemo(() => (href ? 'a' : 'button'), [href]);

  return (
    <Component
      type="button"
      className={clsx(
        'btn',
        `btn-${variant}`,
        {
          [`btn-${size}`]: size !== 'md',
          'active': active,
          [`${color}`]: variant === 'color' || variant === 'hover',
          'btn-block': block
        }
      )}
      href={href}
      aria-disabled={disabled}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Button;
