import React, { ReactNode } from 'react';

export interface DialogBodyProps {
  /**
   * Contents of the dialog
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const DialogBody = ({
  children
}: DialogBodyProps) => {
  return (
    <div className="dialog-body">
      {children}
    </div>
  );
};

export default DialogBody;
