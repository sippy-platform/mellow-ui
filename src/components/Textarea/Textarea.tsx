import clsx from 'clsx';
import { TextareaHTMLAttributes } from 'react';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  /**
   * Value of the textarea
   */
  value?: string;
  /**
   * ID of the textarea
   */
  id?: string;
  /**
   * Name of the textarea
   */
  name?: string;
  /**
   * Placeholder of the textarea
   */
  placeholder?: string;
  /**
   * Type of the textarea
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
export const Textarea = ({
  className,
  value,
  type = 'text',
  placeholder,
  ...props
}: TextareaProps) => {
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

export default Textarea;
