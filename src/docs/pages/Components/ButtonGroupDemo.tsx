import DemoBox from "@docs/components/DemoBox";

import { Button, ButtonGroup } from "@components";

export default function ButtonGroupDemo() {
  return (
    <>
      <h2>Button Group</h2>
      <h3>Simple group</h3>
      <DemoBox>
        <ButtonGroup>
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </DemoBox>
      <p>You can chain multiple different styles together.</p>
      <DemoBox>
        <ButtonGroup>
          <Button>Button</Button>
          <Button variant="secondary">Button</Button>
          <Button variant="primary">Button</Button>
        </ButtonGroup>
      </DemoBox>
      <h3>Sizes</h3>
      <p>You can set the size of an entire group at once.</p>
      <DemoBox>
        <ButtonGroup size="sm">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </DemoBox>
      <DemoBox>
        <ButtonGroup size="lg">
          <Button>Button</Button>
          <Button>Button</Button>
          <Button>Button</Button>
        </ButtonGroup>
      </DemoBox>
    </>
  );
}
