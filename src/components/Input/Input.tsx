import React from 'react';

import clsx from 'clsx';

export interface InputProps {
  /**
   * Value of the input
   */
  value?: string;
  /**
   * Placeholder of the input
   */
  placeholder?: string;
  /**
   * Type of the input
   */
  type?: string;
  /**
   * Custom classes for the label
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Input = ({
  className,
  value,
  type = 'text',
  placeholder,
  ...props
}: InputProps) => {
  if (type !== 'textarea') {
    return (
      <input
        type={type}
        value={value}
        className={clsx(
          'input',
          className
        )}
        placeholder={placeholder}
        {...props}
      />
    );
  }

  return (
    <textarea
      className={clsx(
        'input',
        className
      )}
      placeholder={placeholder}
      {...props}
    >
      {value}
    </textarea>
  );
};

export default Input;
