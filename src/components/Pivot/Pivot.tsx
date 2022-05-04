import React, { ReactNode } from 'react';

import { Tab } from '@headlessui/react';

export interface PivotProps {
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
export const Pivot = ({
  className,
  children
}: PivotProps) => {
  return (
    <Tab.Group as="nav" aria-role="navigation" className={className}>
      {children}
    </Tab.Group>
  );
};

export default Pivot;
