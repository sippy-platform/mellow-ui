import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface CardTitleProps {
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * CardTitle contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function CardTitle({
  className,
  children,
  ...props
}: CardTitleProps) {
  return (
    <h5
      className={clsx(
        'card-title',
        className
      )}
      {...props}
    >
      {children}
    </h5>
  );
};

export default CardTitle;
