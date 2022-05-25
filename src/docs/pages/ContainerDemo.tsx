import DemoBox from "../components/DemoBox";
import Layout from "../components/Layout";

import { Container } from "../../components";

export default function ContainerDemo() {
  return (
    <Layout>
      <h2>Container</h2>
      <p>A container helps you place content on your website. It's a great component to enclose other Mellow components in.</p>
      <DemoBox>
        <Container className="bg-blue">
          This is a container
        </Container>
      </DemoBox>
    </Layout>
  );
}
