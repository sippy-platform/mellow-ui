import DemoBox from "@docs/components/DemoBox";

import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardLink,
  CardTitle,
} from "@";

export default function CardDemo() {
  return (
    <>
      <h2>Card</h2>
      <p>Show content in a card.</p>
      <DemoBox>
        <Card>
          <CardHeader>Card Header</CardHeader>
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <p>This is a card body.</p>
            <CardLink>Infinity</CardLink>
            <CardLink>Beyond</CardLink>
          </CardBody>
          <CardFooter>Card footer</CardFooter>
        </Card>
      </DemoBox>
      <h3>Clickable cards</h3>
      <p>Cards can be made clickable.</p>
      <DemoBox>
        <Card onClick={() => alert("Clicked the card")}>
          <CardBody>
            <p>This is a clickable card.</p>
          </CardBody>
        </Card>
      </DemoBox>
    </>
  );
}
