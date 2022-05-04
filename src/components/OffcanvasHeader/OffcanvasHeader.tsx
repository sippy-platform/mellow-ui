import React, { ReactNode } from 'react';

import { Dialog } from '@headlessui/react';

import clsx from 'clsx';

export interface OffcanvasHeaderProps {
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
export const OffcanvasHeader = ({
  action,
  className,
  children
}: OffcanvasHeaderProps) => {
  return (
    <div
      className={clsx(
        'offcanvas-header',
        className
      )}
    >
      <Dialog.Title className="offcanvas-title" as="h5">{children}</Dialog.Title>
      {action}
    </div>
  );
};

export default OffcanvasHeader;
