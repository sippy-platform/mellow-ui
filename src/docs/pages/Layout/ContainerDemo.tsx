import DemoBox from "@docs/components/DemoBox";

import { Container } from "@";

export default function ContainerDemo() {
  return (
    <>
      <h2>Container</h2>
      <p>A container helps you place content on your website. It's a great component to enclose other Mellow components in.</p>
      <DemoBox>
        <Container className="bg-blue">
          This is a container
        </Container>
      </DemoBox>
    </>
  );
}
