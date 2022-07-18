import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface InputAddonProps {
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
export const InputAddon = ({
  className,
  children,
  ...props
}: InputAddonProps) => {
  return (
    <span className={clsx('input-addon', className)} {...props}>
      {children}
    </span>
  );
};

export default InputAddon;
