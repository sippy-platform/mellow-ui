import DemoBox from "@docs/components/DemoBox";

import { Progress } from "@components";

export default function ProgressDemo() {
  return (
    <>
      <h2>Progress</h2>
      <DemoBox>
        <div>
          <Progress color="red" value={10} className="mt-1" />
          <Progress color="orange" value={16} className="mt-1" />
          <Progress color="amber" value={22} className="mt-1" />
          <Progress color="yellow" value={28} className="mt-1" />
          <Progress color="lime" value={34} className="mt-1" />
          <Progress color="green" value={40} className="mt-1" />
          <Progress color="teal" value={46} className="mt-1" />
          <Progress color="cyan" value={52} className="mt-1" />
          <Progress color="blue" value={58} className="mt-1" />
          <Progress color="indigo" value={64} className="mt-1" />
          <Progress color="violet" value={70} className="mt-1" />
          <Progress color="purple" value={76} className="mt-1" />
          <Progress color="pink" value={82} className="mt-1" />
          <Progress color="rose" value={88} className="mt-1" />
          <Progress color="brown" value={94} className="mt-1" />
          <Progress color="grey" value={100} className="mt-1" />
        </div>
      </DemoBox>
    </>
  );
}
