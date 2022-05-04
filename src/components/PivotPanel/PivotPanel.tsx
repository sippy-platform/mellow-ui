import React, { ReactNode, Fragment } from 'react';

import { Tab } from '@headlessui/react';
import clsx from 'clsx';

export interface PivotPanelProps {
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
export const PivotPanel = ({
  className,
  children
}: PivotPanelProps) => {
  return (
    <Tab.Panel as={Fragment}>
      {({ selected }) => (
        <div
          className={clsx(
            'tab-content',
            {
              'active': selected,
              'show': selected
            },
            className
          )}
        >
          {children}
        </div>
      )}
    </Tab.Panel>
  );
};

export default PivotPanel;
