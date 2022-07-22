import { useState } from "react";

import DemoBox from "@docs/components/DemoBox";

import {
  Button,
  CloseButton,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@";

export default function DialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h2>Dialog</h2>
      <DemoBox>
        <div>
          <Button onClick={() => setOpen(true)}>Open dialog</Button>
          <Dialog open={open} setOpen={setOpen}>
            <DialogHeader action={<CloseButton setOpen={setOpen} />}>
              Dialog example
            </DialogHeader>
            <DialogBody>
              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
            </DialogBody>
            <DialogFooter>
              <Button onClick={() => setOpen(false)}>Dismiss</Button>
            </DialogFooter>
          </Dialog>
        </div>
      </DemoBox>
    </>
  );
}
