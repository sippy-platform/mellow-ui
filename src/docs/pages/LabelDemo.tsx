import DemoBox from "../components/DemoBox";
import Layout from "../components/Layout";

import { Label } from "../../components";

export default function LabelDemo() {
  return (
    <Layout>
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
      <h3>Plated</h3>
      <p>Set the variant to plated to make them appear softer.</p>
      <DemoBox>
        <div>
          <Label variant="plated" color="red">
            Red
          </Label>
          <Label variant="plated" color="orange">
            Orange
          </Label>
          <Label variant="plated" color="amber">
            Amber
          </Label>
          <Label variant="plated" color="yellow">
            Yellow
          </Label>
          <Label variant="plated" color="lime">
            Lime
          </Label>
          <Label variant="plated" color="green">
            Green
          </Label>
          <Label variant="plated" color="teal">
            Teal
          </Label>
          <Label variant="plated" color="cyan">
            Cyan
          </Label>
          <Label variant="plated" color="blue">
            Blue
          </Label>
          <Label variant="plated" color="indigo">
            Indigo
          </Label>
          <Label variant="plated" color="violet">
            Violet
          </Label>
          <Label variant="plated" color="purple">
            Purple
          </Label>
          <Label variant="plated" color="pink">
            Pink
          </Label>
          <Label variant="plated" color="rose">
            Rose
          </Label>
          <Label variant="plated" color="brown">
            Brown
          </Label>
          <Label variant="plated" color="grey">
            Grey
          </Label>
          <Label variant="plated" color="accent">
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
    </Layout>
  );
}
