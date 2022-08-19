import DemoBox from "@docs/components/DemoBox";

import { Grid, Input } from "@";

export default function InputDemo() {
  return (
    <>
      <h2>Input</h2>
      <DemoBox>
        <Grid xs={1}>
          <Input placeholder="Default" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="textarea" placeholder="Textarea" />
        </Grid>
      </DemoBox>
    </>
  );
}
