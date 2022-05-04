import React, { ReactNode } from 'react';

import clsx from 'clsx';

export interface ProgressProps {
  /**
   * The highest value on the progress bar
   */
  max?: number;
  /**
   * The current value on the progress bar
   */
  value?: number;
  /**
   * Color of the progress bar
   */
  color?: 'red' | 'orange' | 'amber' | 'yellow' | 'lime' | 'green' | 'teal' | 'cyan' | 'blue' | 'indigo' | 'violet' | 'purple' | 'pink' | 'rose' | 'brown' | 'grey' | 'accent';
  /**
   * Size of the progress bar
   */
  size?: 1 | 'sm' | 'md' | 'lg';
  /**
   * Custom classes for the progress bar
   */
  className?: string;
  /**
   * Show the label
   */
  label?: boolean;
  /**
   * Children
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const Progress = ({
  max = 100,
  value = 0,
  color = 'accent',
  size = 'md',
  label = false,
  className
}: ProgressProps) => {
  return (
    <div
      className={
        clsx(
          'progress',
          className,
          {
            [`progress-${size}`]: size !== 'md'
          }
        )
      }
    >
      <div
        className={
          clsx(
            'progress-bar',
            color
          )
        }
        style={{ width: `${value / max * 100}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      >
        {label && `${value / max * 100}%`}
      </div>
    </div>
  );
};

export default Progress;
