import React from 'react';

import { RadioGroup as RadioGroupPrimitives } from '@headlessui/react'

import clsx from 'clsx';

export interface RadioProps {
  /**
   * The label attached to the radio item
   */
  label?: string;
  /**
   * The helper attached to the radio item
   */
  helper?: string;
  /**
   * Value of the radio item
   */
  value?: string;
  /**
   * Custom classes for the radio item
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Radio = ({
  className,
  value = '',
  label,
  helper
}: RadioProps) => {
  return (
    <RadioGroupPrimitives.Option
      value={value}
      className={clsx('input-form', className)}
    >
      {({ checked }: { checked: boolean }) => (
        <>
          <input
            type="radio"
            className="input-check"
            checked={checked}
            readOnly
          />
          <RadioGroupPrimitives.Label>
            {label}
          </RadioGroupPrimitives.Label>
          <RadioGroupPrimitives.Description
            as="span"
            className="input-text"
          >
            {helper}
          </RadioGroupPrimitives.Description>
        </>
      )}
    </RadioGroupPrimitives.Option>
  );
};

export default Radio;
