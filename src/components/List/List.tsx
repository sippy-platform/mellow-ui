import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface ListProps {
  /**
   * Show a border around the list
   */
  border?: boolean;
  /**
   * Show dividers in the list
   */
  dividers?: boolean | 'full';
  /**
   * The color of the list
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * The button size.
   */
  size?: 'sm' | 'md' | 'lg';
  /**
   * Custom classes for the container box
   */
  className?: string;
  /**
   * Children
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const List = ({
  border = false,
  dividers = false,
  color,
  className,
  size = 'md',
  ...props
}: ListProps) => {
  return (
    <ul
      className={clsx(
        'list',
        {
          [`list-${size}`]: size !== 'md',
          'border': border,
          [`${color}`]: color,
          [`list-dividers${dividers === 'full' ? '-full' : ''}`]: dividers
        },
        className
      )}
      {...props}
    >
      {props.children}
    </ul>
  );
};

export default List;
