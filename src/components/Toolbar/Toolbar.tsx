import { ReactNode } from 'react';

import clsx from 'clsx';

export interface ToolbarProps {
  /**
   * Custom classes for the label
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
export function Toolbar({
  children,
  className,
  ...props
}: ToolbarProps) {
  return (
    <div
      className={clsx(
        'btn-toolbar',
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
