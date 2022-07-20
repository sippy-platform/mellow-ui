import { useState } from "react";

import DemoBox from "@docs/components/DemoBox";

import {
  Button,
  Dropdown,
  DropdownItem
} from "@components";

export default function GridDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h2>Dialog</h2>
      <DemoBox>
        <Dropdown
          trigger={
            <Button>Open dropdown</Button>
          }
        >
          <DropdownItem>Hello</DropdownItem>
        </Dropdown>
      </DemoBox>
      <h3>Color</h3>
      <DemoBox>
        <Dropdown
          color="indigo"
          trigger={
            <Button>Open dropdown</Button>
          }
        >
          <DropdownItem>Hello</DropdownItem>
          <DropdownItem>World</DropdownItem>
          <DropdownItem color="red">Delete</DropdownItem>
        </Dropdown>
      </DemoBox>
    </>
  );
}
