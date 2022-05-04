import React, { Fragment, ReactNode } from 'react';

import { Dialog as DialogUI, Transition } from '@headlessui/react';

import clsx from 'clsx';

export interface DialogProps {
  /**
   * The open state
   */
  open: boolean;
  /**
   * The function to change the open state
   */
  setOpen: (state: boolean) => void;
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
export const Dialog = ({
  open,
  setOpen,
  className,
  children,
  disableBackdrop,
  ...props
}: DialogProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <DialogUI onClose={() => setOpen(false)} className="position-relative">
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
        <div className="position-fixed top-0 end-0 bottom-0 start-0 d-flex justify-content-center align-items-center p-3" style={{ zIndex: 1040 }}>
          <Transition.Child
            as={Fragment}
            enter="transition-all duration-200 ease-inout"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="transition-all duration-200 ease-inout"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogUI.Panel
              className={
                clsx(
                  'dialog',
                  className
                )
              }
              {...props}
            >
              {children}
            </DialogUI.Panel>
          </Transition.Child>
        </div>
      </DialogUI>
    </Transition>
  );
};

export default Dialog;
