import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface CardHeaderProps {
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * CardHeader contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function CardHeader({
  className,
  children,
  ...props
}: CardHeaderProps) {
  return (
    <div
      className={clsx(
        'card-header',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardHeader;
