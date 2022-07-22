import { useState } from "react";

import DemoBox from "@docs/components/DemoBox";

import { Select } from "@";

export default function SelectDemo() {
  const [select, setSelect] = useState(5);

  return (
    <>
      <h2>Select</h2>
      <DemoBox>
        <Select
          value={select}
          onChange={(value: any) => setSelect(value)}
          name="Option"
          options={[
            { value: 1, label: "Option 1" },
            { value: 2, label: "Option 2" },
            { value: 3, label: "Option 3" },
            { value: 4, label: "Option 4" },
            { value: 5, label: "Option 5" },
            { value: 10, label: "Option 10" },
            { value: 15, label: "Option 15" },
            { value: 20, label: "Option 20" },
            { value: 25, label: "Option 25" },
            { value: 30, label: "Option 30" },
            { value: 35, label: "Option 35" },
            { value: 40, label: "Option 40" },
            { value: 45, label: "Option 45" },
            { value: 50, label: "Option 50" },
            { value: 60, label: "Option 60" },
            { value: 70, label: "Option 70" },
            { value: 80, label: "Option 80" },
            { value: 90, label: "Option 90" },
            { value: 100, label: "Option 100" },
          ]}
        />
      </DemoBox>
    </>
  );
}
