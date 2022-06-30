import React, { ReactNode } from 'react';

import { Tab } from '@headlessui/react';
import clsx from 'clsx';

export interface PivotNavProps {
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * The label attached to the label
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const PivotNav = ({
  className,
  children
}: PivotNavProps) => {
  return (
    <Tab.List
      className={
        clsx(
          'pivot',
          className
        )
      }
    >
      {children}
    </Tab.List>
  );
};

export default PivotNav;
