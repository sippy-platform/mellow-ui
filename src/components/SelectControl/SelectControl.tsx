import { ReactNode, Fragment, useMemo } from "react";

import InputLabel from "../InputLabel";
import SelectItem from "../SelectItem";

import { Listbox, Transition } from "@headlessui/react";

import clsx from "clsx";
import ValkyrieIcon, { viAngleDown } from "@sippy-platform/valkyrie";

export interface SelectControlProps {
  /**
   * ID of the input
   */
  id: string;
  /**
   * The name attached of the select
   */
  name?: string;
  /**
   * Label of the input
   */
  label: string;
  /**
   * The helper text
   */
  helper?: string;
  /**
   * The placeholder for the select
   */
  placeholder?: string;
  /**
   * Value of the select
   */
  value?: any;
  /**
   * The array of options
   */
  options: any[];
  /**
   * The callback for changing values
   */
  onChange: (form: { id: string, value: any | null }) => void;
  /**
   * The callback for getting the option label
   */
  getLabel?: (value: any) => string;
  /**
   * The callback for getting the option label
   */
  getValue?: (value: any) => any;
  /**
   * Whether the radio group is disabled
   */
  disabled?: boolean;
  /**
   * Is being used with a floating label
   */
  floating?: boolean;
  /**
   * Custom classes for the label
   */
  className?: string;
  /**
   * The label attached to the label
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const SelectControl = ({
  id,
  name,
  placeholder,
  className,
  options,
  value,
  onChange,
  getLabel = (x) => x.label,
  getValue = (x) => x.value,
  disabled,
  floating = false,
  label,
  helper,
  ...props
}: SelectControlProps) => {
  const uniqueName = name ?? id;
  const currentValue = useMemo(
    () => options.find((option) => getValue(option) === value),
    [options, value]
  );

  return (
    <div>
      <div className="form-floating">
        <Listbox
          value={value}
          onChange={(value) => onChange({ value, id })}
          disabled={disabled}
          name={uniqueName}
        >
          <Listbox.Button
            className={clsx("input-select", className)}
            {...props}
          >
            <span className="text-truncate pt-4 pb-1">
              {currentValue ? (
                getLabel(currentValue)
              ) : (
                <span className="select-placeholder">{placeholder}</span>
              )}
            </span>
            <span className="d-flex align-items-center">
              <ValkyrieIcon icon={viAngleDown} />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            enter="transition ease-in duration-50"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="listbox">
              {options.map((option, key) => (
                <SelectItem
                  option={option}
                  getValue={getValue}
                  getLabel={getLabel}
                  key={key}
                />
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
        <InputLabel id={uniqueName} shrink={value !== undefined || value !== null}>
          {label}
        </InputLabel>
      </div>
      {helper && (
        <div id={`${uniqueName}-help`} className="input-text">
          {helper}
        </div>
      )}
    </div>
  );
};

export default SelectControl;
