import { ElementType, ReactNode, useMemo } from 'react';

import clsx from 'clsx';

export interface CardProps {
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
  as?: string | ElementType;
  /**
   * Card contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function Card({
  className,
  children,
  as,
  onClick,
  ...props
}: CardProps) {
  const Component = useMemo(() => (as ? as : (onClick ? 'div' : 'button')) as ElementType, [as, onClick]);

  return (
    <Component
      className={clsx(
        'card',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Card;
