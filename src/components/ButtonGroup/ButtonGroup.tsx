import { ElementType, ReactNode } from 'react';

import clsx from 'clsx';

export interface ButtonGroupProps {
  /**
   * The button size.
   */
  size?: 'sm' | 'md' | 'lg';
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
export function ButtonGroup({
  size = 'md',
  children,
  className,
  ...props
}: ButtonGroupProps) {
  return (
    <div
      className={clsx(
        'btn-group',
        {
          [`btn-group-${size}`]: size !== 'md',
        },
        className
      )}
      role="group"
      {...props}
    >
      {children}
    </div>
  );
};

export default ButtonGroup;
