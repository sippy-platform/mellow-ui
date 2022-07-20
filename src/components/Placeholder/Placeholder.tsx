import React, { ReactNode } from 'react';

import { Dialog } from '@headlessui/react';

import clsx from 'clsx';

export interface PlaceholderProps {
  /**
   * Custom classes for the placeholder
   */
  className?: string;
  /**
   * The width of the placeholder
   */
  width?: 0 | 1 | 2 | 3 | 4 | 5 | 25 | 50 | 75 | 100 | 'auto';
}

/**
 * Primary UI component for user interaction
 */
export const Placeholder = ({
  width,
  className
}: PlaceholderProps) => {
  return (
    <span
      className={clsx(
        'placeholder',
        'me-1',
        `w-${width}`,
        className
      )}
    />
  );
};

export default Placeholder;
