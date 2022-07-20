import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface DialogFooterProps {
  /**
   * Custom classes for the dialog header
   */
  className?: string;
  /**
   * Contents of the dialog header
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DialogFooter = ({
  className,
  children
}: DialogFooterProps) => {
  return (
    <div
      className={clsx(
        'dialog-footer',
        className
      )}
    >
      {children}
    </div>
  );
};

export default DialogFooter;
