import DemoBox from "../components/DemoBox";
import Layout from "../components/Layout";

import { Grid, Col } from "../../components";

export default function GridDemo() {
  return (
    <Layout>
      <h2>Grid</h2>
      <DemoBox>
        <Grid>
          <Col xs={4} className="bg-accent p-2 rounded text-light">
            1/3
          </Col>
          <Col xs={4} className="bg-accent p-2 rounded text-light">
            1/3
          </Col>
          <Col xs={4} className="bg-accent p-2 rounded text-light">
            1/3
          </Col>
        </Grid>
      </DemoBox>
    </Layout>
  );
}
