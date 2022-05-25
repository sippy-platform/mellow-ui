import DemoBox from "../components/DemoBox";
import Layout from "../components/Layout";

import { Grid, Input } from "../../components";

export default function InputDemo() {
  return (
    <Layout>
      <h2>Input</h2>
      <DemoBox>
        <Grid xs={{ grid: 1, gap: 3 }}>
          <Input placeholder="Default" />
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Input type="textarea" placeholder="Textarea" />
        </Grid>
      </DemoBox>
    </Layout>
  );
}
