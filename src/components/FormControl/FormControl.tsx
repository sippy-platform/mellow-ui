import { ChangeEventHandler } from 'react';
import { InputLabel, InputLabelProps, Input, InputProps } from '..';

export interface FormControlProps {
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
  helper: string;
  /**
   * Placeholder of the input
   */
  placeholder?: string;
  /**
   * Props for the label
   */
  labelProps?: InputLabelProps;
  /**
   * Props for the label
   */
  onChange?: ChangeEventHandler<HTMLInputElement>;
  /**
   * Props for the input
   */
  inputProps?: InputProps;
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * Type of the input
   */
  type?: string;
}

/**
 * Primary UI component for user interaction
 */
export const FormControl = ({
  id,
  label,
  name,
  className,
  value,
  type,
  inputProps,
  labelProps,
  placeholder,
  helper,
  onChange,
  ...props
}: FormControlProps) => {
  const uniqueName = name ?? id;

  return (
    <div className="form-floating">
      <Input
        name={uniqueName}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        aria-describedBy={helper ? `${uniqueName}-help` : undefined}
        {...inputProps}
        {...props}
      />
      <InputLabel id={name} {...labelProps}>{label}</InputLabel>
      {helper && <div id={`${uniqueName}-help`} className="input-text">{helper}</div>}
    </div>
  );
};

export default FormControl;
