import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface ContainerProps {
  /**
   * Container size
   */
  fluid?: boolean | 'sm' | 'md' | 'lg' | 'xl' | 'ul';
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
export const Container = ({
  fluid = false,
  className,
  ...props
}: ContainerProps) => {
  return (
    <div
      className={clsx(
        `container${fluid === false ? '' : (fluid === true ? '-fluid' : `-${fluid}`)}`,
        className
      )}
      {...props}
    >
      {props.children}
    </div>
  );
};

export default Container;
