import React, { Fragment, ReactNode } from 'react';

import { Dialog, Transition } from '@headlessui/react';

import clsx from 'clsx';

export interface OffcanvasProps {
  /**
   * The open state
   */
  open: boolean;
  /**
   * The function to change the open state
   */
  setOpen: (state: boolean) => void;
  /**
   * Position
   */
  position?: 'start' | 'end';
  /**
   * Custom classes for the dialog
   */
  className?: string;
  /**
   * The contents of the dialog
   */
  children?: ReactNode;
  /**
   * Disable the backdrop
   */
  disableBackdrop?: boolean;
}

/**
 * Primary UI component for user interaction
 */
export const Offcanvas = ({
  open,
  setOpen,
  className,
  children,
  position = 'start',
  disableBackdrop,
  ...props
}: OffcanvasProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog onClose={() => setOpen(false)} className="position-relative">
        {!disableBackdrop &&
          <Transition.Child
            as={Fragment}
            enter="transition-all duration-200 ease-inout"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-all duration-200 ease-inout"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="backdrop" aria-hidden="true" />
          </Transition.Child>
        }
        <Transition.Child
          as={Fragment}
          enter="transition-transform duration-200 ease-inout"
          enterFrom={position === 'start' ? 'transform-x-n100' : 'transform-x-100'}
          enterTo="transform-none"
          leave="transition-transform duration-200 ease-inout"
          leaveFrom="transform-none"
          leaveTo={position === 'start' ? 'transform-x-n100' : 'transform-x-100'}
        >
          <Dialog.Panel
            className={
              clsx(
                'offcanvas',
                `offcanvas-${position}`,
                className
              )
            }
            {...props}
          >
            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Offcanvas;
