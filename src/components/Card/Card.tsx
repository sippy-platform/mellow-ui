import { ButtonHTMLAttributes, ComponentPropsWithoutRef, ElementType, ReactNode, useMemo } from 'react';

import clsx from 'clsx';

interface ICardProps<T> extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Custom function when clicking
   */
  onClick?: () => void;
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * As what the component should be rendered
   */
  as?: T;
  /**
   * Card contents.
   */
  children: ReactNode;
}

export type CardProps<T extends ElementType> = ICardProps<T> & ComponentPropsWithoutRef<T>;

/**
 * Primary UI component for user interaction
 */
export function Card<T extends ElementType>({
  className,
  children,
  as,
  onClick,
  ...props
}: CardProps<T>) {
  const Component = useMemo(() => (as ? as : (onClick ? 'button' : 'div')) as ElementType, [as, onClick]);

  return (
    <Component
      className={clsx(
        'card',
        className
      )}
      onClick={onClick}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
