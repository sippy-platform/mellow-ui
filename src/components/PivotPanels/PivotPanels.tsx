import React, { ReactNode } from 'react';

import { Tab } from '@headlessui/react';
import clsx from 'clsx';

export interface PivotPanelsProps {
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
export const PivotPanels = ({
  className,
  children
}: PivotPanelsProps) => {
  return (
    <Tab.Panels
      className={
        clsx(
          'tab-box mt-3',
          className
        )
      }
    >
      {children}
    </Tab.Panels>
  );
};

export default PivotPanels;
