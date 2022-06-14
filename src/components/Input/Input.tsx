import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /**
   * ID of the input
   */
  id?: string;
  /**
   * Name of the input
   */
  name?: string;
  /**
   * Value of the input
   */
  value?: string | ReadonlyArray<string> | number | undefined;
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
  id,
  name,
  className,
  value,
  type = 'text',
  placeholder,
  ...props
}: InputProps) => {
  const uniqueName = name ?? id;

  return (
    <input
      name={uniqueName}
      id={id}
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
