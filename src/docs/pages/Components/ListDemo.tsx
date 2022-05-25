import { useState } from "react";

import DemoBox from "@docs/components/DemoBox";

import { Checkbox, List, ListItem, ListItemDivider } from "@components";
import ValkyrieIcon, { viHouse } from "@sippy-platform/valkyrie";

export default function ListDemo() {
  const [listBox, setListBox] = useState(false);

  return (
    <>
      <h2>List</h2>
      <DemoBox>
        <List dividers border>
          <ListItemDivider primary="Section divider" />
          <ListItem
            primary="This is a list item"
            startAction={<Checkbox checked={listBox} onChange={setListBox} />}
            startIcon={<ValkyrieIcon icon={viHouse} />}
          />
          <ListItem
            primary="This is also list item"
            endAction={<Checkbox checked={listBox} onChange={setListBox} />}
          />
          <ListItemDivider
            primary="Section divider"
            secondary="Section description"
          />
          <ListItem
            primary="This is a disabled list item"
            onClick={() => alert("You clicked")}
            disabled
            startIcon={<ValkyrieIcon icon={viHouse} />}
            endIcon={<ValkyrieIcon icon={viHouse} />}
          />
          <ListItem
            primary="This is an edgy list item"
            color="red"
            fullColor
            onClick={() => alert("You clicked")}
            endIcon={<ValkyrieIcon icon={viHouse} />}
          />
        </List>
      </DemoBox>
    </>
  );
}
