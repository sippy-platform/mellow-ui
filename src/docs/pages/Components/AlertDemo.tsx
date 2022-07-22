import DemoBox from '@docs/components/DemoBox';

import { Alert, AlertTitle } from '@';

export default function AlertDemo() {
  return (
    <>
      <h2>Alert</h2>
      <p>The Alert component allows you to quickly create simple alert messages. A default Alert component has no color.</p>
      <DemoBox>
        <Alert>
          <AlertTitle>Alert title</AlertTitle>
          Ho my god, they killed Kenny!
        </Alert>
      </DemoBox>
      <h3>Colors</h3>
      <p>Like many other components, the Alert component supports a color prop.</p>
      <DemoBox>
        <Alert color="amber">
          <AlertTitle>Alert title</AlertTitle>
          Ho my god, they killed Kenny!
        </Alert>
      </DemoBox>
    </>
  );
}
