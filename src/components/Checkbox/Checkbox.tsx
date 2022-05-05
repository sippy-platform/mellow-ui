import { Switch } from '@headlessui/react'

import clsx from 'clsx';

export interface CheckboxProps {
  /**
   * The name attached of the radio item
   */
  name?: string;
  /**
   * The label attached to the checkbox
   */
  label?: string;
  /**
   * The helper attached to the checkbox
   */
  helper?: string;
  /**
   * Whether or not the checkbox is checked
   */
  checked: boolean;
  /**
   * Whether or not the checkbox is checked
   */
  onChange: (checked: boolean) => void;
  /**
   * Custom classes for the checkbox
   */
  className?: string;
}

/**
 * Primary UI component for user interaction
 */
export const Checkbox = ({
  name,
  className,
  checked,
  onChange,
  label,
  helper
}: CheckboxProps) => {
  if (label || helper) {
    return (
      <Switch.Group>
        <div className={clsx('input-form', className)}>
          <Switch
            className="input-check"
            checked={checked}
            onChange={onChange}
            name={name}
          />
          <Switch.Label>
            {label}
          </Switch.Label>
          {helper && <span className="input-text">{helper}</span>}
        </div>
      </Switch.Group>
    );
  }

  return (
    <Switch className="input-check" checked={checked} onChange={onChange} />
  );
};

export default Checkbox;
