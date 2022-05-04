import React from 'react';

import clsx from 'clsx';

export interface ListDividerProps {
  /**
   * Show a label around the list
   */
  full?: boolean;
  /**
   * Custom classes for the container box
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const ListDivider = ({
  full = false,
  className,
  ...props
}: ListDividerProps) => {
  return (
    <li
      role="separator"
      className={clsx(`list-divider${full ? '-full' : ''}`, className)}
      {...props}
    />
  );
};

export default ListDivider;
