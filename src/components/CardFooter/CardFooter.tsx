import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface CardFooterProps {
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * CardFooter contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function CardFooter({
  className,
  children,
  ...props
}: CardFooterProps) {
  return (
    <div
      className={clsx(
        'card-footer',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardFooter;
