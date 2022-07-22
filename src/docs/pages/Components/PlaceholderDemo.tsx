import { useState } from "react";

import DemoBox from "@docs/components/DemoBox";

import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Grid,
  Placeholder,
} from "@";

export default function PlaceholderDemo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <h2>Placeholder</h2>
      <DemoBox>
        <Grid>
          <Card className="me-2" aria-hidden="true" style={{ width: 240 }}>
            <CardBody>
              <CardTitle>
                Hello card
              </CardTitle>
              <p>
                What an <span className="text-accent">beautiful</span> day for a fully loaded card of content, isn't it?
              </p>
              <Button href="#" variant="primary">Get started</Button>
            </CardBody>
          </Card>
          <Card className="me-2" aria-hidden="true" style={{ width: 240 }}>
            <CardBody>
              <CardTitle>
                <Placeholder width={5} />
              </CardTitle>
              <p>
                <Placeholder width={3} />
                <span className="text-accent"><Placeholder width={4} /></span>
                <Placeholder width={4} />
                <Placeholder width={5} />
                <Placeholder width={2} />
              </p>
              <Button href="#" variant="primary" placeholderWidth={5}>Get started</Button>
            </CardBody>
          </Card>
        </Grid>
      </DemoBox>
    </>
  );
}
