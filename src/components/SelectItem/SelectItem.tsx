import React from 'react';

import { Listbox } from '@headlessui/react';

import clsx from 'clsx';

export interface SelectItemProps {
  /**
   * Value of the input
   */
  option: { [key: string]: any };
  /**
   * The callback for getting the option label
   */
  getLabel: (value: any) => string;
  /**
   * The callback for getting the option label
   */
  getValue: (value: any) => string;
}

/**
 * Primary UI component for user interaction
 */
export const SelectItem = ({
  option,
  getLabel = (x) => x.label,
  getValue = (x) => x.value
}: SelectItemProps) => {
  return (
    <Listbox.Option
      className={({ selected }) => clsx('dropdown-item', { 'active': selected })}
      value={getValue(option)}
    >
      {getLabel(option)}
    </Listbox.Option>
  );
};

export default SelectItem;
