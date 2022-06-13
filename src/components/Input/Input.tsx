import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * Value of the input
   */
  value?: string | number | null;
  /**
   * ID of the input
   */
  id?: string;
  /**
   * Name of the input
   */
  name?: string;
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
};

export default Input;
