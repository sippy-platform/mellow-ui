import { ElementType, ButtonHTMLAttributes, ReactNode, useMemo, ComponentPropsWithoutRef } from 'react';

import clsx from 'clsx';

import { MellowColor } from '@types';

interface IButtonProps<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'color' | 'hover' | 'primary' | 'secondary' | 'danger' | 'success';
  /**
   * The color of the button, only works when the variant is `color` or `hover`
   */
  color?: MellowColor;
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
   * Custom classes for the label
   */
  className?: string;
  /**
   * As what the component should be rendered
   */
  as?: T;
  /**
   * Is the button a placeholder
   */
  placeholderWidth?: 0 | 1 | 2 | 3 | 4 | 5 | 25 | 50 | 75 | 100 | 'auto';
  /**
   * Button contents.
   */
  children: ReactNode;
  /**
   * Optional click handler.
   */
  onClick?: () => void;
}

export type ButtonProps<T extends ElementType> = IButtonProps<T> & ComponentPropsWithoutRef<T>;

/**
 * Primary UI component for user interaction
 */
export function Button<T extends ElementType>({
  variant = 'default',
  size = 'md',
  color,
  children,
  active = false,
  disabled = false,
  block = false,
  href,
  className,
  as,
  placeholderWidth,
  ...props
}: ButtonProps<T>) {
  const Component = useMemo(() => (as ? as : (href ? 'a' : 'button')) as ElementType, [as, href]);

  if (placeholderWidth) {
    return (
      <button
        type="button"
        className={clsx(
          'btn',
          'placeholder',
          'disabled',
          `w-${placeholderWidth}`,
          `btn-${variant}`,
          {
            [`btn-${size}`]: size !== 'md',
            [`${color}`]: variant === 'color' || variant === 'hover',
            'btn-block': block,
          },
          className
        )}
        disabled
        {...props}
      />
    );
  }

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
        },
        className
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
