import { ReactNode } from 'react';

import clsx from 'clsx';

export interface BottomBarProps {
  /**
   * The color of the bottom bar
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
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
