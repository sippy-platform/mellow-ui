import DemoBox from "@docs/components/DemoBox";

import { Button } from "@";

export default function ButtonDemo() {
  return (
    <>
      <h2>Button</h2>
      <DemoBox>
        <Button>Default</Button>
      </DemoBox>
      <h3>States</h3>
      <DemoBox>
        <div>
          <Button>Default</Button>
          <Button active>Active</Button>
          <Button disabled>Disabled</Button>
        </div>
      </DemoBox>
      <h3>Sizes</h3>
      <p>Change the size with the size prop.</p>
      <DemoBox>
        <div>
          <Button size="sm">Small</Button>
          <Button>Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </DemoBox>
      <h3>Block</h3>
      <p>
        Make a button take the full available widht by enabling the block prop.
      </p>
      <DemoBox>
        <Button block>Block button</Button>
      </DemoBox>
      <h3>Colors</h3>
      <p>The Button component provides support for the color prop.</p>
      <DemoBox>
        <div>
          <Button variant="color" color="red">
            Red
          </Button>
          <Button variant="color" color="orange">
            Orange
          </Button>
          <Button variant="color" color="amber">
            Amber
          </Button>
          <Button variant="color" color="yellow">
            Yellow
          </Button>
          <Button variant="color" color="lime">
            Lime
          </Button>
          <Button variant="color" color="green">
            Green
          </Button>
          <Button variant="color" color="teal">
            Teal
          </Button>
          <Button variant="color" color="cyan">
            Cyan
          </Button>
          <Button variant="color" color="blue">
            Blue
          </Button>
          <Button variant="color" color="indigo">
            Indigo
          </Button>
          <Button variant="color" color="violet">
            Violet
          </Button>
          <Button variant="color" color="purple">
            Purple
          </Button>
          <Button variant="color" color="pink">
            Pink
          </Button>
          <Button variant="color" color="rose">
            Rose
          </Button>
          <Button variant="color" color="brown">
            Brown
          </Button>
          <Button variant="color" color="grey">
            Grey
          </Button>
          <Button variant="color" color="accent">
            Accent
          </Button>
        </div>
      </DemoBox>
      <h3>Hover variants</h3>
      <p>Use the hover variants for a more subtle look.</p>
      <DemoBox>
        <div>
          <Button variant="hover" color="red">
            Red
          </Button>
          <Button variant="hover" color="orange">
            Orange
          </Button>
          <Button variant="hover" color="amber">
            Amber
          </Button>
          <Button variant="hover" color="yellow">
            Yellow
          </Button>
          <Button variant="hover" color="lime">
            Lime
          </Button>
          <Button variant="hover" color="green">
            Green
          </Button>
          <Button variant="hover" color="teal">
            Teal
          </Button>
          <Button variant="hover" color="cyan">
            Cyan
          </Button>
          <Button variant="hover" color="blue">
            Blue
          </Button>
          <Button variant="hover" color="indigo">
            Indigo
          </Button>
          <Button variant="hover" color="violet">
            Violet
          </Button>
          <Button variant="hover" color="purple">
            Purple
          </Button>
          <Button variant="hover" color="pink">
            Pink
          </Button>
          <Button variant="hover" color="rose">
            Rose
          </Button>
          <Button variant="hover" color="brown">
            Brown
          </Button>
          <Button variant="hover" color="grey">
            Grey
          </Button>
          <Button variant="hover" color="accent">
            Accent
          </Button>
        </div>
      </DemoBox>
    </>
  );
}
