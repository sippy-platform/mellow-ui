import { useState } from "react";

import DemoBox from "@docs/components/DemoBox";

import {
  Button,
  CloseButton,
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "@components";

export default function OffcanvasDemo() {
  const [canvas, setCanvas] = useState(false);

  return (
    <>
      <h2>Offcanvas</h2>
      <DemoBox>
        <div>
          <Button onClick={() => setCanvas(true)}>Open canvas</Button>
          <Offcanvas open={canvas} setOpen={setCanvas}>
            <OffcanvasHeader action={<CloseButton setOpen={setCanvas} />}>
              Offcanvas example
            </OffcanvasHeader>
            <OffcanvasBody>
              <p>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
            </OffcanvasBody>
          </Offcanvas>
        </div>
      </DemoBox>
    </>
  );
}
