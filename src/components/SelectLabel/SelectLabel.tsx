import React, { ReactNode } from 'react';

export interface SelectLabelProps {
  /**
   * Label of the input, will default to the value if none is given
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const SelectLabel = ({
  children
}: SelectLabelProps) => {
  return (
    <p className="group-title input-text m-0 ps-2">{children}</p>
  );
};

export default SelectLabel;
