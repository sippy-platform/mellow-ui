import DemoBox from "@docs/components/DemoBox";

import { Menu, MenuItem, MenuItems, MenuTrigger } from "@components";

export default function MenuDemo() {
  return (
    <>
      <h2>Menu</h2>
      <DemoBox>
        <Menu>
          <MenuTrigger>Open menu</MenuTrigger>
          <MenuItems>
            <MenuItem href="#">Default item</MenuItem>
            <MenuItem href="#">Secondary item</MenuItem>
            <MenuItem href="#" disabled>Disabled item</MenuItem>
          </MenuItems>
        </Menu>
      </DemoBox>
    </>
  );
}
