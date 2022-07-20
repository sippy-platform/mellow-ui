import { ReactNode } from 'react';

import clsx from 'clsx';

export interface ToolbarProps {
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * Custom classes for the label
   */
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  /**
   * Button contents.
   */
  children: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export function Toolbar({
  children,
  className,
  justify = 'start',
  ...props
}: ToolbarProps) {
  return (
    <div
      className={clsx(
        'toolbar',
        {
          [`justify-content-${justify}`]: justify !== 'start'
        },
        className
      )}
      role="toolbar"
      {...props}
    >
      {children}
    </div>
  );
};

export default Toolbar;
