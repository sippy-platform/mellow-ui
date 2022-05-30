import { ReactNode } from 'react';

import clsx from 'clsx';

export interface BreadcrumbProps {
  /**
   * The color of the breadcrumb
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
