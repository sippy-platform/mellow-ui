import DemoBox from '@docs/components/DemoBox';

import { Avatar } from '@components';

export default function AvatarDemo() {
  return (
    <>
      <h2>Avatar</h2>
      <p>Display avatars to represent your users.</p>
      <DemoBox>
        <Avatar>DA</Avatar>
      </DemoBox>
      <h3>Sizes</h3>
      <p>Change the size with the size prop.</p>
      <DemoBox>
        <div>
          <Avatar size="sm">SM</Avatar>
          <Avatar>LD</Avatar>
          <Avatar size="lg">LG</Avatar>
        </div>
      </DemoBox>
      <h3>Colors</h3>
      <p>The Avatar component provides support for the color prop.</p>
      <DemoBox>
        <div>
          <Avatar color="red">RD</Avatar>
          <Avatar color="orange">OE</Avatar>
          <Avatar color="amber">AR</Avatar>
          <Avatar color="yellow">YW</Avatar>
          <Avatar color="lime">LE</Avatar>
          <Avatar color="green">GN</Avatar>
          <Avatar color="teal">TL</Avatar>
          <Avatar color="cyan">CN</Avatar>
          <Avatar color="blue">BE</Avatar>
          <Avatar color="indigo">IO</Avatar>
          <Avatar color="violet">VT</Avatar>
          <Avatar color="purple">PE</Avatar>
          <Avatar color="pink">PK</Avatar>
          <Avatar color="rose">RE</Avatar>
          <Avatar color="brown">BN</Avatar>
          <Avatar color="grey">GY</Avatar>
          <Avatar color="accent">AT</Avatar>
        </div>
      </DemoBox>
      <h3>Plated</h3>
      <p>Set the variant to plated to make them appear softer.</p>
      <DemoBox>
        <div>
          <Avatar variant="plated" color="red">RD</Avatar>
          <Avatar variant="plated" color="orange">OE</Avatar>
          <Avatar variant="plated" color="amber">AR</Avatar>
          <Avatar variant="plated" color="yellow">YW</Avatar>
          <Avatar variant="plated" color="lime">LE</Avatar>
          <Avatar variant="plated" color="green">GN</Avatar>
          <Avatar variant="plated" color="teal">TL</Avatar>
          <Avatar variant="plated" color="cyan">CN</Avatar>
          <Avatar variant="plated" color="blue">BE</Avatar>
          <Avatar variant="plated" color="indigo">IO</Avatar>
          <Avatar variant="plated" color="violet">VT</Avatar>
          <Avatar variant="plated" color="purple">PE</Avatar>
          <Avatar variant="plated" color="pink">PK</Avatar>
          <Avatar variant="plated" color="rose">RE</Avatar>
          <Avatar variant="plated" color="brown">BN</Avatar>
          <Avatar variant="plated" color="grey">GY</Avatar>
          <Avatar variant="plated" color="accent">AT</Avatar>
        </div>
      </DemoBox>
    </>
  );
}
