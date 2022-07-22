import DemoBox from "@docs/components/DemoBox";

import { Button, Grid, Input, InputAddon, InputGroup } from "@";
import ValkyrieIcon, { viMagnifyingGlass } from "@sippy-platform/valkyrie";

export default function InputGroupDemo() {
  return (
    <>
      <h2>Input Group</h2>
      <h3>Input Addon</h3>
      <p>The input group allows you to add input addons to an input. These are small text labels.</p>
      <DemoBox>
        <Grid>
          <InputGroup>
            <InputAddon>Prefix</InputAddon>
            <Input placeholder="Default" />
          </InputGroup>
          <InputGroup>
            <Input type="email" placeholder="Email" />
            <InputAddon>Suffix</InputAddon>
          </InputGroup>
          <InputGroup>
            <Input type="password" placeholder="Password" />
            <InputAddon>Infix</InputAddon>
            <Input type="password" placeholder="Confirm Password" />
          </InputGroup>
          <InputGroup>
            <InputAddon><ValkyrieIcon icon={viMagnifyingGlass} /></InputAddon>
            <Input type="search" placeholder="Search" />
          </InputGroup>
        </Grid>
      </DemoBox>
      <h3>Buttons</h3>
      <p>You can also use it to add Buttons</p>
      <DemoBox>
        <Grid>
          <InputGroup>
            <Button>Default</Button>
            <Input placeholder="Default" />
          </InputGroup>
        </Grid>
      </DemoBox>
    </>
  );
}
