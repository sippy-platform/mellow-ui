import React, { ReactNode, Fragment } from 'react';

import { Tab } from '@headlessui/react';
import clsx from 'clsx';

export interface PivotItemProps {
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
export const PivotItem = ({
  className,
  children
}: PivotItemProps) => {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <button
          className={clsx(
            'pivot-link',
            {
              'active': selected
            },
            className
          )}
        >
          {children}
        </button>
      )}
    </Tab>
  );
};

export default PivotItem;
