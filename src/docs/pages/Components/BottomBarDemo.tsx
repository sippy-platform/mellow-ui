import DemoBox from '@docs/components/DemoBox';

import { BottomBar, BottomBarItem } from '@components';
import ValkyrieIcon, { viEllipsis, viGear, viHouse, viSippy, viUser, viValkyrieSword } from '@sippy-platform/valkyrie';

export default function BottomBarDemo() {
  return (
    <>
      <h2>Bottom Bar</h2>
      <DemoBox>
        <BottomBar>
          <BottomBarItem icon={<ValkyrieIcon icon={viHouse} />} active>Home</BottomBarItem>
          <BottomBarItem icon={<ValkyrieIcon icon={viUser} />}>Users</BottomBarItem>
          <BottomBarItem icon={<ValkyrieIcon icon={viGear} />}>Settings</BottomBarItem>
          <BottomBarItem icon={<ValkyrieIcon icon={viValkyrieSword} />}>Valkyrie</BottomBarItem>
          <BottomBarItem icon={<ValkyrieIcon icon={viSippy} />}>Sippy</BottomBarItem>
          <BottomBarItem icon={<ValkyrieIcon icon={viEllipsis} />}>More</BottomBarItem>
        </BottomBar>
      </DemoBox>
    </>
  );
}
