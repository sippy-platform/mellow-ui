import DemoBox from "@docs/components/DemoBox";

import { Menu, MenuItem, MenuItems, MenuTrigger } from "@components";

export default function MenuDemo() {
  return (
    <>
      <h2>Button</h2>
      <DemoBox>
        <Menu>
          <MenuTrigger>Open menu</MenuTrigger>
          <MenuItems>
            <MenuItem>Hello</MenuItem>
            <MenuItem>World</MenuItem>
          </MenuItems>
        </Menu>
      </DemoBox>
    </>
  );
}
