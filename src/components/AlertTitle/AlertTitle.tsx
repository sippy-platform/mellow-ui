import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface AlertTitleProps {
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * AlertTitle contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function AlertTitle({
  children,
  className,
  ...props
}: AlertTitleProps) {
  return (
    <h4
    className={clsx(
      'alert-title',
      className
    )}
      {...props}
    >
      {children}
    </h4>
  );
};

export default AlertTitle;
