import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface AlertProps {
  /**
   * The variant of the button.
   */
  variant?: 'default' | 'plated' | 'solid';
  /**
   * The color of the button, only works when the variant is `color` or `hover`
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * Alert contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function Alert({
  color,
  children,
  className,
  ...props
}: AlertProps) {
  return (
    <div
      role="alert"
      className={clsx(
        'alert',
        color,
        className
      )}
      {...props}
    >
      <div className="alert-message">
        {children}
      </div>
    </div>
  );
};

export default Alert;
