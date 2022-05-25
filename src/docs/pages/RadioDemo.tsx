import { useState } from "react";

import DemoBox from "../components/DemoBox";
import Layout from "../components/Layout";

import { Radio, RadioGroup } from "../../components";

export default function RadioDemo() {
  const [radio, setRadio] = useState("hello");

  return (
    <Layout>
      <h2>Radio</h2>
      <DemoBox>
      <RadioGroup onChange={setRadio} value={radio} label="Value checker">
        <Radio value="hello" label="Hello" />
        <Radio value="bonjour" label="Bonjour" />
      </RadioGroup>
      </DemoBox>
    </Layout>
  );
}
