import { ReactNode } from 'react';

import clsx from 'clsx';

import { MellowColor } from '@types';

export interface BreadcrumbProps {
  /**
   * The color of the breadcrumb
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
export function Breadcrumb({
  color,
  children,
  className,
  ...props
}: BreadcrumbProps) {
  return (
    <nav
      className={clsx(
        'breadcrumb',
        {
          [`${color}`]: color
        },
        className
      )}
      aria-label="breadcrumb"
      {...props}
    >
      {children}
    </nav>
  );
};

export default Breadcrumb;
