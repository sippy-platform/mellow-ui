import DemoBox from "@docs/components/DemoBox";

import { Button, ButtonGroup, Input, InputGroup, InputAddon, Toolbar } from "@components";

export default function ToolbarDemo() {
  return (
    <>
      <h2>Toolbar</h2>
      <h3>Buttons</h3>
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
      <h3>Text</h3>
      <p>You can also insert text elements.</p>
      <DemoBox>
        <Toolbar>
          <p className="fs-h5">Toolbar</p>
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
      <h3>Inputs</h3>
      <p>Toolbars support using Inputs.</p>
      <DemoBox>
        <Toolbar>
          <p className="fs-h5">Toolbar</p>
          <Input placeholder="Default" />
          <Button>Submit</Button>
        </Toolbar>
      </DemoBox>
      <DemoBox>
        <Toolbar>
          <p className="fs-h5">Toolbar</p>
          <InputGroup>
            <InputAddon>Search</InputAddon>
            <Input placeholder="Search" />
          </InputGroup>
          <Button>Search</Button>
        </Toolbar>
      </DemoBox>
    </>
  );
}
