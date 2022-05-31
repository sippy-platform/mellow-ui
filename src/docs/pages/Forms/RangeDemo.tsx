import { useState } from "react";

import DemoBox from "@docs/components/DemoBox";

import { Range } from "@components";

export default function RangeDemo() {
  const [range, setRange] = useState(50);

  return (
    <>
      <h2>Range</h2>
      <DemoBox>
        <Range
          value={range}
          onChange={(e) => setRange(e.target.value as unknown as number)}
        />
      </DemoBox>
    </>
  );
}
