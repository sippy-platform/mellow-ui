import DemoBox from "@docs/components/DemoBox";

import { Pivot, PivotItem, PivotNav, PivotPanel, PivotPanels } from "@components";

export default function PivotDemo() {
  return (
    <>
      <h2>Pivot</h2>
      <DemoBox>
        <Pivot>
          <PivotNav>
            <PivotItem>Tab 1</PivotItem>
            <PivotItem>Tab 2</PivotItem>
            <PivotItem>Tab 3</PivotItem>
          </PivotNav>
          <PivotPanels>
            <PivotPanel>Content 1</PivotPanel>
            <PivotPanel>Content 2</PivotPanel>
            <PivotPanel>Content 3</PivotPanel>
          </PivotPanels>
        </Pivot>
      </DemoBox>
      <h3>Pills</h3>
      <DemoBox>
        <Pivot>
          <PivotNav variant="pills">
            <PivotItem>Tab 1</PivotItem>
            <PivotItem>Tab 2</PivotItem>
            <PivotItem>Tab 3</PivotItem>
          </PivotNav>
          <PivotPanels>
            <PivotPanel>Content 1</PivotPanel>
            <PivotPanel>Content 2</PivotPanel>
            <PivotPanel>Content 3</PivotPanel>
          </PivotPanels>
        </Pivot>
      </DemoBox>
      <h3>Underline</h3>
      <DemoBox>
        <Pivot>
          <PivotNav variant="underline">
            <PivotItem>Tab 1</PivotItem>
            <PivotItem>Tab 2</PivotItem>
            <PivotItem>Tab 3</PivotItem>
          </PivotNav>
          <PivotPanels>
            <PivotPanel>Content 1</PivotPanel>
            <PivotPanel>Content 2</PivotPanel>
            <PivotPanel>Content 3</PivotPanel>
          </PivotPanels>
        </Pivot>
      </DemoBox>
    </>
  );
}
