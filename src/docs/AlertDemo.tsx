import { Alert, AlertTitle } from '../components';
import DemoBox from './DemoBox';

function AlertDemo() {
  return (
    <div className="my-3 container">
      <h2 className="mt-3">Alert</h2>
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
    </div>
  );
}

export default AlertDemo;
