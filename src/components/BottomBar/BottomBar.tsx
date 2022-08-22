import { ReactNode } from 'react';

import clsx from 'clsx';

import { MellowColor } from '@types';

export interface BottomBarProps {
  /**
   * The color of the bottom bar
   */
  color?: MellowColor;
  /**
   * Custom classes for the bottom nav
   */
  className?: string;
  /**
   * Button contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function BottomBar({
  color,
  children,
  className,
  ...props
}: BottomBarProps) {
  return (
    <nav
      className={clsx(
        'bottom-bar',
        {
          [`${color}`]: color
        },
        className
      )}
      {...props}
    >
      {children}
    </nav>
  );
};

export default BottomBar;
