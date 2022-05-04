import React, { ChangeEventHandler } from 'react';

import clsx from 'clsx';

export interface RangeProps {
  /**
   * Minimum value of the input
   */
  min?: number;
  /**
   * Maximum value of the input
   */
  max?: number;
  /**
   * Steps between values on the range
   */
  step?: number;
  /**
   * Value of the input
   */
  value: number;
  /**
   * Value of the input
   */
  onChange: ChangeEventHandler<HTMLInputElement>;
  /**
   * Custom classes for the label
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Range = ({
  className,
  min = 0,
  max = 100,
  step = 1,
  value = 0,
  onChange,
  ...props
}: RangeProps) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      step={step}
      value={value}
      onChange={onChange}
      className={clsx(
        'input-range',
        className
      )}
      {...props}
    />
  );
};

export default Range;
