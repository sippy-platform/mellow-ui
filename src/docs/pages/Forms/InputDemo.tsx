import DemoBox from "@docs/components/DemoBox";

import { Grid, Input } from "@components";

export default function InputDemo() {
  return (
    <>
      <h2>Input</h2>
      <DemoBox>
        <Grid>
          <Input placeholder="Default" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="textarea" placeholder="Textarea" />
        </Grid>
      </DemoBox>
    </>
  );
}
