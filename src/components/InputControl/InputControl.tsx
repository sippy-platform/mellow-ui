import clsx from "clsx";

import InputLabel from "../InputLabel";

export interface InputControlProps {
  /**
   * ID of the input
   */
  id: string;
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
   * The callback for changing values
   */
  onChange: (form: { id: string, value: any | null }) => void;
  /**
   * Type of the input
   */
  type?: string;
  /**
   * If the input is required or not
   */
  required?: boolean;
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
  onChange,
  required,
  ...props
}: InputControlProps) => {
  const uniqueName = name ?? id;

  return (
    <>
      <div className="form-floating">
        <input
          name={uniqueName}
          id={id}
          type={type}
          value={value}
          className={clsx("input", className)}
          placeholder={placeholder}
          required={required}
          onChange={(event) => onChange({ value: event?.target.value, id })}
          aria-describedby={helper ? `${uniqueName}-help` : undefined}
          {...props}
        />
        <InputLabel id={uniqueName}>{label}</InputLabel>
      </div>
      {helper && (
        <div id={`${uniqueName}-help`} className="input-text">
          {helper}
        </div>
      )}
    </>
  );
};

export default InputControl;
