import DemoBox from "@docs/components/DemoBox";

import { Nav, NavItem } from "@";

export default function NavDemo() {
  return (
    <>
      <h2>Nav</h2>
      <DemoBox>
        <Nav>
          <NavItem>Tab 1</NavItem>
          <NavItem>Tab 2</NavItem>
          <NavItem>Tab 3</NavItem>
        </Nav>
      </DemoBox>
    </>
  );
}
