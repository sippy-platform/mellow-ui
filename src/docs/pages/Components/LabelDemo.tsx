import DemoBox from "@docs/components/DemoBox";

import { Label } from "@components";

export default function LabelDemo() {
  return (
    <>
      <h2>Label</h2>
      <p>Display avatars to represent your users.</p>
      <DemoBox>
        <Label>Default</Label>
      </DemoBox>
      <h3>Colors</h3>
      <p>The Avatar component provides support for the color prop.</p>
      <DemoBox>
        <div>
          <Label color="red">Red</Label>
          <Label color="orange">Orange</Label>
          <Label color="amber">Amber</Label>
          <Label color="yellow">Yellow</Label>
          <Label color="lime">Lime</Label>
          <Label color="green">Green</Label>
          <Label color="teal">Teal</Label>
          <Label color="cyan">Cyan</Label>
          <Label color="blue">Blue</Label>
          <Label color="indigo">Indigo</Label>
          <Label color="violet">Violet</Label>
          <Label color="purple">Purple</Label>
          <Label color="pink">Pink</Label>
          <Label color="rose">Rose</Label>
          <Label color="brown">Brown</Label>
          <Label color="grey">Grey</Label>
          <Label color="accent">Accent</Label>
        </div>
      </DemoBox>
      <h3>Outlined</h3>
      <p>Set the variant to outlined to make them appear with a transparent background and a solid border color.</p>
      <DemoBox>
        <div>
          <Label variant="outlined" color="red">
            Red
          </Label>
          <Label variant="outlined" color="orange">
            Orange
          </Label>
          <Label variant="outlined" color="amber">
            Amber
          </Label>
          <Label variant="outlined" color="yellow">
            Yellow
          </Label>
          <Label variant="outlined" color="lime">
            Lime
          </Label>
          <Label variant="outlined" color="green">
            Green
          </Label>
          <Label variant="outlined" color="teal">
            Teal
          </Label>
          <Label variant="outlined" color="cyan">
            Cyan
          </Label>
          <Label variant="outlined" color="blue">
            Blue
          </Label>
          <Label variant="outlined" color="indigo">
            Indigo
          </Label>
          <Label variant="outlined" color="violet">
            Violet
          </Label>
          <Label variant="outlined" color="purple">
            Purple
          </Label>
          <Label variant="outlined" color="pink">
            Pink
          </Label>
          <Label variant="outlined" color="rose">
            Rose
          </Label>
          <Label variant="outlined" color="brown">
            Brown
          </Label>
          <Label variant="outlined" color="grey">
            Grey
          </Label>
          <Label variant="outlined" color="accent">
            Accent
          </Label>
        </div>
      </DemoBox>
      <h3>Solid</h3>
      <p>Show off the label's color with the solid variants.</p>
      <DemoBox>
        <div>
          <Label variant="solid" color="red">
            Red
          </Label>
          <Label variant="solid" color="orange">
            Orange
          </Label>
          <Label variant="solid" color="amber">
            Amber
          </Label>
          <Label variant="solid" color="yellow">
            Yellow
          </Label>
          <Label variant="solid" color="lime">
            Lime
          </Label>
          <Label variant="solid" color="green">
            Green
          </Label>
          <Label variant="solid" color="teal">
            Teal
          </Label>
          <Label variant="solid" color="cyan">
            Cyan
          </Label>
          <Label variant="solid" color="blue">
            Blue
          </Label>
          <Label variant="solid" color="indigo">
            Indigo
          </Label>
          <Label variant="solid" color="violet">
            Violet
          </Label>
          <Label variant="solid" color="purple">
            Purple
          </Label>
          <Label variant="solid" color="pink">
            Pink
          </Label>
          <Label variant="solid" color="rose">
            Rose
          </Label>
          <Label variant="solid" color="brown">
            Brown
          </Label>
          <Label variant="solid" color="grey">
            Grey
          </Label>
          <Label variant="solid" color="accent">
            Accent
          </Label>
        </div>
      </DemoBox>
    </>
  );
}
