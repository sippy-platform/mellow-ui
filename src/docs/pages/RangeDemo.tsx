import { useState } from "react";

import DemoBox from "../components/DemoBox";
import Layout from "../components/Layout";

import { Range } from "../../components";

export default function RangeDemo() {
  const [range, setRange] = useState(50);

  return (
    <Layout>
      <h2>Range</h2>
      <DemoBox>
        <Range
          value={range}
          onChange={(e) => setRange(e.target.value as unknown as number)}
        />
      </DemoBox>
    </Layout>
  );
}
