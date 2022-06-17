import React, { FormEventHandler, ReactNode, Fragment, useMemo } from 'react';

import { Listbox, Transition } from '@headlessui/react';

import clsx from 'clsx';
import ValkyrieIcon, { viAngleDown } from '@sippy-platform/valkyrie';
import SelectItem from '../SelectItem';

export interface SelectProps {
  /**
   * ID of the input
   */
  id?: string;
  /**
   * The name attached of the select
   */
  name?: string;
  /**
   * The placeholder for the select
   */
  placeholder?: string;
  /**
   * Value of the select
   */
  value?: string | number;
  /**
   * The array of options
   */
  options: any[];
  /**
   * The callback for changing values
   */
  onChange: (value: string | number | null) => void;
  /**
   * The callback for getting the option label
   */
  getLabel?: (value: any) => string;
  /**
   * The callback for getting the option label
   */
  getValue?: (value: any) => string;
  /**
   * Whether the radio group is disabled
   */
  disabled?: boolean;
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
export const Select = ({
  id,
  name,
  placeholder,
  className,
  options,
  value,
  onChange,
  getLabel = (x) => x.label,
  getValue = (x) => x.value,
  disabled
}: SelectProps) => {
  const uniqueName = name ?? id;
  const currentValue = useMemo(() => {
    return options.find((option) => getValue(option) === value);
  }, [options, value]);

  return (
    <div className="position-relative">
      <Listbox value={value} onChange={onChange} disabled={disabled} name={uniqueName}>
        <Listbox.Button className={clsx('input-select', className)}>
          <span className="text-truncate">{getLabel(currentValue) || <span className="placeholder">{placeholder}</span>}</span>
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
              <SelectItem option={option} getValue={getValue} getLabel={getLabel} key={key} />
            ))}
          </Listbox.Options>
        </Transition>
      </Listbox>
    </div>
  );
};

export default Select;
