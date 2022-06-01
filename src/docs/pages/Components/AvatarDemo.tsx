import DemoBox from '@docs/components/DemoBox';

import { Avatar } from '@components';

export default function AvatarDemo() {
  return (
    <>
      <h2>Avatar</h2>
      <p>Display avatars to represent your users. By default, based on the label passed to the Avatar component, it will pick one of the 16 color palettes available in Mellow to color the avatar.</p>
      <DemoBox>
        <div>
          <Avatar label="RB" />
          <Avatar label="AR" />
          <Avatar label="GY" />
          <Avatar label="AT" />
          <Avatar label="QE" />
          <Avatar label="PE" />
          <Avatar label="OE" />
          <Avatar label="GN" />
          <Avatar label="TL" />
          <Avatar label="LE" />
          <Avatar label="RL" />
          <Avatar label="CN" />
          <Avatar label="BN" />
          <Avatar label="HE" />
          <Avatar label="VT" />
          <Avatar label="RA" />
        </div>
      </DemoBox>

      <p>If you rather have Mellow use the default color, you can do so by setting the <code>color</code> prop. Setting <code>color</code> as a boolean property has the same effect as setting <code>color</code> to <code>accent</code>.</p>
      <DemoBox>
        <div>
          <Avatar label="MS" color />
          <Avatar label="RG" color />
          <Avatar label="KL" color />
          <Avatar label="VR" color />
          <Avatar label="UP" color />
          <Avatar label="GL" color />
          <Avatar label="RL" color />
          <Avatar label="SX" color />
          <Avatar label="QE" color />
          <Avatar label="HE" color />
          <Avatar label="PR" color />
          <Avatar label="NL" color />
          <Avatar label="YT" color />
        </div>
      </DemoBox>
      <h3>Colors</h3>
      <p>The Avatar component provides support for the color prop.</p>
      <DemoBox>
        <div>
          <Avatar color="red" label="RD" />
          <Avatar color="orange" label="OE" />
          <Avatar color="amber" label="AR" />
          <Avatar color="yellow" label="YW" />
          <Avatar color="lime" label="LE" />
          <Avatar color="green" label="GN" />
          <Avatar color="teal" label="TL" />
          <Avatar color="cyan" label="CN" />
          <Avatar color="blue" label="BE" />
          <Avatar color="indigo" label="IO" />
          <Avatar color="violet" label="VT" />
          <Avatar color="purple" label="PE" />
          <Avatar color="pink" label="PK" />
          <Avatar color="rose" label="RE" />
          <Avatar color="brown" label="BN" />
          <Avatar color="grey" label="GY" />
          <Avatar color="accent" label="AT" />
        </div>
      </DemoBox>
      <h3>Sizes</h3>
      <p>Change the size with the size prop.</p>
      <DemoBox>
        <div>
          <Avatar size="sm" label="SM" />
          <Avatar label="MD" />
          <Avatar size="lg" label="LG" />
        </div>
      </DemoBox>
      <h3>Plated</h3>
      <p>Set the variant to plated to make them appear softer.</p>
      <DemoBox>
        <div>
          <Avatar variant="plated" color="red" label="RD" />
          <Avatar variant="plated" color="orange" label="OE" />
          <Avatar variant="plated" color="amber" label="AR" />
          <Avatar variant="plated" color="yellow" label="YW" />
          <Avatar variant="plated" color="lime" label="LE" />
          <Avatar variant="plated" color="green" label="GN" />
          <Avatar variant="plated" color="teal" label="TL" />
          <Avatar variant="plated" color="cyan" label="CN" />
          <Avatar variant="plated" color="blue" label="BE" />
          <Avatar variant="plated" color="indigo" label="IO" />
          <Avatar variant="plated" color="violet" label="VT" />
          <Avatar variant="plated" color="purple" label="PE" />
          <Avatar variant="plated" color="pink" label="PK" />
          <Avatar variant="plated" color="rose" label="RE" />
          <Avatar variant="plated" color="brown" label="BN" />
          <Avatar variant="plated" color="grey" label="GY" />
          <Avatar variant="plated" color="accent" label="AT" />
        </div>
      </DemoBox>
    </>
  );
}
