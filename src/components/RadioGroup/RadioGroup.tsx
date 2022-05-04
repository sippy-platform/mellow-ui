import React, { FormEventHandler, ReactNode } from 'react';

import { RadioGroup as RadioGroupPrimitives } from '@headlessui/react'

export interface RadioGroupProps {
  /**
   * The name attached of the radio item
   */
  name?: string;
  /**
   * The label attached to the checkbox
   */
  label?: string;
  /**
   * Value of the radio item
   */
  value?: string;
  /**
   * The callback for changing values
   */
  onChange: ((value: string) => void) | (FormEventHandler<HTMLDivElement> & ((value: string) => void));
  /**
   * Whether the radio group is disabled
   */
  disabled?: boolean;
  /**
   * Custom classes for the radio item
   */
  className?: string;
  /**
   * Children
   */
  children?: ReactNode;
}

/**
 * Primary UI component for user interaction
 */
export const RadioGroup = ({
  label,
  className,
  value = '',
  onChange,
  children,
  disabled
}: RadioGroupProps) => {
  return (
    <RadioGroupPrimitives
      value={value}
      onChange={onChange}
      className={className}
      disabled={disabled}
    >
      {label && <RadioGroupPrimitives.Label className="mb-2">{label}</RadioGroupPrimitives.Label>}
      {children}
    </RadioGroupPrimitives>
  );
};

export default RadioGroup;
