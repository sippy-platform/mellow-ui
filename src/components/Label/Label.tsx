import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { MellowColor } from '@types';

export interface LabelProps {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'outlined' | 'solid';
  /**
   * The color of the button, only works when the variant is `color` or `hover`
   */
  color?: MellowColor;
  /**
   * Label contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function Label({
  variant = 'default',
  color,
  children,
  ...props
}: LabelProps) {
  return (
    <div
      className={clsx(
        'd-inline',
        'label',
        color,
        {
          [`label-${variant}`]: variant !== 'default'
        }
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Label;
