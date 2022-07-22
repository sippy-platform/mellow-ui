import DemoBox from "@docs/components/DemoBox";

import { Checkbox } from "@";
import { useState } from "react";

export default function CheckboxDemo() {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <>
      <h2>Checkbox</h2>
      <DemoBox>
        <Checkbox
          checked={checkbox}
          onChange={(checked) => setCheckbox(checked)}
          label="Basic checkbox"
          helper="Basic checkbox helper"
        />
      </DemoBox>
    </>
  );
}
