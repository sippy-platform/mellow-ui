import DemoBox from "@docs/components/DemoBox";

import { Grid, InputControl, SelectControl } from "@components";
import { useState } from "react";

export default function FormControlDemo() {
  const [value, setValue] = useState<number | null>(null);

  return (
    <>
      <h2>Form Control</h2>
      <p>The Form Control component is a composition of the Input, InputLabel, and Helper controls.</p>

      <h3>Input Control</h3>
      <DemoBox>
        <Grid xs={1}>
          <InputControl name="default" label="Default" placeholder="Default" helper="A default text field." />
          <InputControl name="email" type="email" label="Email" placeholder="Email" />
          <InputControl name="password" type="password" label="Password" placeholder="Password" />
          <InputControl name="textarea" type="textarea" label="Textarea" placeholder="Textarea" />
        </Grid>
      </DemoBox>

      <h3>Select Control</h3>
      <DemoBox>
        <SelectControl
          id="planet"
          label="Select planet"
          placeholder="Select planet"
          value={value}
          onChange={(formInput: { id: string, value: any | null }) => setValue(formInput.value)}
          options={[
            { value: 1, label: 'Mercury' },
            { value: 2, label: 'Venus' },
            { value: 3, label: 'Earth' }
          ]}
          getLabel={(x) => x.label}
          getValue={(x) => x.value}
          data-testid="planet-id"
          helper="Select a planet that you like."
        />
      </DemoBox>
    </>
  );
}
