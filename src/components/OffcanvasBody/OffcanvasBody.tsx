import React, { ReactNode } from 'react';

export interface OffcanvasBodyProps {
  /**
   * Contents of the dialog
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const OffcanvasBody = ({
  children
}: OffcanvasBodyProps) => {
  return (
    <div className="offcanvas-body">
      {children}
    </div>
  );
};

export default OffcanvasBody;
