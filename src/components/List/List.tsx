import React, { ReactNode } from 'react';

import clsx from 'clsx';

import { MellowColor } from '@types';

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
  color?: MellowColor;
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
