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
          <Avatar label="Brennan Curtis" color />
          <Avatar label="Diane Earl" color />
          <Avatar label="Verna Lydia" color />
          <Avatar label="Brendo Iola" color />
          <Avatar label="Christine Deborah" color />
          <Avatar label="Alexis Elinor" color />
          <Avatar label="Bailey Leone" color />
          <Avatar label="Seymour Luvenia" color />
          <Avatar label="Dewayne Myrtle" color />
          <Avatar label="Maynard Bambi" color />
          <Avatar label="Kate Bishop" color />
          <Avatar label="Alger Solomon" color />
          <Avatar label="Dewey Celestine" color />
        </div>
      </DemoBox>
      <h3>Colors</h3>
      <p>The Avatar component provides support for the color prop.</p>
      <DemoBox>
        <div>
          <Avatar color="red" label="Red" />
          <Avatar color="orange" label="Orange" />
          <Avatar color="amber" label="Amber" />
          <Avatar color="yellow" label="Yellow" />
          <Avatar color="lime" label="Lime" />
          <Avatar color="green" label="Green" />
          <Avatar color="teal" label="Teal" />
          <Avatar color="cyan" label="Cyan" />
          <Avatar color="blue" label="Blue" />
          <Avatar color="indigo" label="Indigo" />
          <Avatar color="violet" label="Violet" />
          <Avatar color="purple" label="Purple" />
          <Avatar color="pink" label="Pink" />
          <Avatar color="rose" label="Rose" />
          <Avatar color="brown" label="Brown" />
          <Avatar color="grey" label="Grey" />
          <Avatar color="accent" label="Accent" />
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
      <h3>Disable initials</h3>
      <p>Sometimes you don't want the label visible to the user only to be the initials. You can disable this behavior by passing <code>disableInitials</code> to the component.</p>
      <DemoBox>
        <div>
          <Avatar label="Initials" className="me-3" />
          <Avatar label="Initials" disableInitials />
        </div>
      </DemoBox>
    </>
  );
}
