import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface InputLabelProps {
  /**
   * Whether the label should shrink
   */
  shrink?: boolean;
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
  shrink,
  className,
  children,
  id
}: InputLabelProps) => {
  return (
    <label className={clsx('input-label', { 'input-label-shrink': shrink }, className)} htmlFor={id} id={`${id}-label`}>
      {children}
    </label>
  );
};

export default InputLabel;
