import { useState } from "react";

import DemoBox from "@docs/components/DemoBox";

import { Radio, RadioGroup } from "@";

export default function RadioDemo() {
  const [radio, setRadio] = useState("hello");

  return (
    <>
      <h2>Radio</h2>
      <DemoBox>
      <RadioGroup onChange={setRadio} value={radio} label="Value checker">
        <Radio value="hello" label="Hello" />
        <Radio value="bonjour" label="Bonjour" />
      </RadioGroup>
      </DemoBox>
    </>
  );
}
