import React, { ReactNode } from 'react';

import { Dialog } from '@headlessui/react';

import clsx from 'clsx';

export interface DialogHeaderProps {
  /**
   * Custom classes for the dialog header
   */
  className?: string;
  /**
   * Any action to display with the header
   */
  action?: ReactNode;
  /**
   * Contents of the dialog header
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DialogHeader = ({
  action,
  className,
  children
}: DialogHeaderProps) => {
  return (
    <div
      className={clsx(
        'dialog-header',
        className
      )}
    >
      <Dialog.Title className="dialog-title" as="h5">{children}</Dialog.Title>
      {action}
    </div>
  );
};

export default DialogHeader;
