import DemoBox from "../components/DemoBox";
import Layout from "../components/Layout";

import { Checkbox } from "../../components";
import { useState } from "react";

export default function CheckboxDemo() {
  const [checkbox, setCheckbox] = useState(false);

  return (
    <Layout>
      <h2>Checkbox</h2>
      <DemoBox>
        <Checkbox
          checked={checkbox}
          onChange={(checked) => setCheckbox(checked)}
          label="Basic checkbox"
          helper="Basic checkbox helper"
        />
      </DemoBox>
    </Layout>
  );
}
