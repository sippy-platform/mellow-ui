import { useState } from "react";

import DemoBox from "@docs/components/DemoBox";

import { Radio, List, ListItem, ListItemDivider } from "@";
import ValkyrieIcon, { viHouse } from "@sippy-platform/valkyrie";
import { RadioGroup } from "@headlessui/react";

export default function ListDemo() {
  const [listBox, setListBox] = useState(false);

  return (
    <>
      <h2>List</h2>
      <DemoBox>
        <RadioGroup onChange={setListBox} value={listBox}>
          <List dividers border>
            <ListItemDivider primary="Section divider" />
            <ListItem
              primary="This is a list item"
              startAction={<Radio value="first" />}
              startIcon={<ValkyrieIcon icon={viHouse} />}
            />
            <ListItem
              primary="This is also list item"
              endAction={<Radio value="second" />}
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
        </RadioGroup>
      </DemoBox>
    </>
  );
}
