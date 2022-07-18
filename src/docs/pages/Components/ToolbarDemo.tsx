import DemoBox from "@docs/components/DemoBox";

import { Button, ButtonGroup, Toolbar } from "@components";

export default function ToolbarDemo() {
  return (
    <>
      <h2>Toolbar</h2>
      <p>You can combine multiple Button and ButtonGroup components in a Toolbar.</p>
      <DemoBox>
        <Toolbar>
          <ButtonGroup>
            <Button>Button</Button>
            <Button>Groups</Button>
            <Button>In</Button>
          </ButtonGroup>
          <ButtonGroup>
            <Button>A</Button>
            <Button>Toolbar</Button>
          </ButtonGroup>
          <Button color="red" variant="hover">Single</Button>
        </Toolbar>
      </DemoBox>
    </>
  );
}
