import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface InputGroupProps {
  /**
   * The label attached to the label
   */
  children?: ReactNode;
  /**
   * Custom classes for the label
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const InputGroup = ({
  className,
  children,
  ...props
}: InputGroupProps) => {
  return (
    <div className={clsx('input-group', className)} {...props}>
      {children}
    </div>
  );
};

export default InputGroup;
