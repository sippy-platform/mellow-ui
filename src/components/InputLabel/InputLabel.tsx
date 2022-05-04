import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface InputLabelProps {
  /**
   * The id of the element this label is attached to
   */
  id?: string;
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
export const InputLabel = ({
  className,
  children,
  id
}: InputLabelProps) => {
  return (
    <label className={clsx('input-label', className)} htmlFor={id}>
      {children}
    </label>
  );
};

export default InputLabel;
