import DemoBox from "@docs/components/DemoBox";

import { Grid, FormControl } from "@components";

export default function FormControlDemo() {
  return (
    <>
      <h2>Form Control</h2>
      <p>The Form Control component is a composition of the Input, InputLabel, and Helper controls.</p>
      <DemoBox>
        <Grid xs={{ grid: 1, gap: 3 }}>
          <FormControl name="default" label="Default" placeholder="Default" helper="A default text field." />
          <FormControl name="email" type="email" label="Email" placeholder="Email" />
          <FormControl name="password" type="password" label="Password" placeholder="Password" />
          <FormControl name="textarea" type="textarea" label="Textarea" placeholder="Textarea" />
        </Grid>
      </DemoBox>
    </>
  );
}
