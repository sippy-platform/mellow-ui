import clsx from 'clsx';
import { InputHTMLAttributes } from 'react';
import { InputLabel } from '..';

export interface InputControlProps extends InputHTMLAttributes<HTMLInputElement> {
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
   * Label of the input
   */
  label: string;
  /**
   * The helper text
   */
  helper?: string;
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
export const InputControl = ({
  id,
  label,
  name,
  className,
  value,
  type,
  placeholder,
  helper,
  ...props
}: InputControlProps) => {
  const uniqueName = name ?? id;

  return (
    <div className="form-floating">
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
        aria-describedby={helper ? `${uniqueName}-help` : undefined}
        {...props}
      />
      <InputLabel id={uniqueName}>{label}</InputLabel>
      {helper && <div id={`${uniqueName}-help`} className="input-text">{helper}</div>}
    </div>
  );
};

export default InputControl;
