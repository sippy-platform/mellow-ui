import { useState } from 'react';

import '@sippy-platform/mellow-css/dist/css/mellow.css';
import '@optimisegroup/valkyrie/dist/valkyrie.css';
import './mellow-ui.css';

import { Alert, AlertTitle, Button, Card, CardBody, CardFooter, CardHeader, CardLink, CardTitle, Checkbox, CloseButton, Col, Dialog, DialogBody, DialogHeader, Grid, Input, InputLabel, Label, List, ListItem, ListItemDivider, Offcanvas, OffcanvasBody, OffcanvasHeader, Pivot, PivotItem, PivotNav, PivotPanel, PivotPanels, Progress, Radio, RadioGroup, Range, Select } from './components';
import ValkyrieIcon, { viHouse } from '@optimisegroup/valkyrie';

function App() {
  const [open, setOpen] = useState(false);
  const [canvas, setCanvas] = useState(false);
  const [checkbox, setCheckbox] = useState(false);
  const [listBox, setListBox] = useState(false);
  const [radio, setRadio] = useState('hello');
  const [range, setRange] = useState(50);
  const [select, setSelect] = useState(5);

  return (
    <div className="my-3 container">
      <h1 className="marketing-1 fw-bold text-marketing">Mellow UI</h1>
      <h2 className="mt-3">Alert</h2>
      <Alert color="accent">
        <AlertTitle>Alert title</AlertTitle>
        Ho my god, they killed Kenny!
      </Alert>

      <h2 className="mt-3">Buttons</h2>
      <Button>Default</Button>

      <h3 className="mt-3">Color buttons</h3>
      <Button variant="color" color="red">Red</Button>
      <Button variant="color" color="orange">Orange</Button>
      <Button variant="color" color="amber">Amber</Button>
      <Button variant="color" color="yellow">Yellow</Button>
      <Button variant="color" color="lime">Lime</Button>
      <Button variant="color" color="green">Green</Button>
      <Button variant="color" color="teal">Teal</Button>
      <Button variant="color" color="cyan">Cyan</Button>
      <Button variant="color" color="blue">Blue</Button>
      <Button variant="color" color="indigo">Indigo</Button>
      <Button variant="color" color="violet">Violet</Button>
      <Button variant="color" color="purple">Purple</Button>
      <Button variant="color" color="pink">Pink</Button>
      <Button variant="color" color="rose">Rose</Button>
      <Button variant="color" color="brown">Brown</Button>
      <Button variant="color" color="grey">Grey</Button>
      <Button variant="color" color="accent">Accent</Button>

      <h3 className="mt-3">Hover buttons</h3>
      <Button variant="hover" color="red">Red</Button>
      <Button variant="hover" color="orange">Orange</Button>
      <Button variant="hover" color="amber">Amber</Button>
      <Button variant="hover" color="yellow">Yellow</Button>
      <Button variant="hover" color="lime">Lime</Button>
      <Button variant="hover" color="green">Green</Button>
      <Button variant="hover" color="teal">Teal</Button>
      <Button variant="hover" color="cyan">Cyan</Button>
      <Button variant="hover" color="blue">Blue</Button>
      <Button variant="hover" color="indigo">Indigo</Button>
      <Button variant="hover" color="violet">Violet</Button>
      <Button variant="hover" color="purple">Purple</Button>
      <Button variant="hover" color="pink">Pink</Button>
      <Button variant="hover" color="rose">Rose</Button>
      <Button variant="hover" color="brown">Brown</Button>
      <Button variant="hover" color="grey">Grey</Button>
      <Button variant="hover" color="accent">Accent</Button>

      <h3 className="mt-3">Context buttons</h3>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="success">Success</Button>

      <h3 className="mt-3">Sizes</h3>
      <Button size="sm">Small</Button>
      <Button>Medium</Button>
      <Button size="lg">Large</Button>

      <h3 className="mt-3">Block</h3>
      <Button block>Block button</Button>

      <h3 className="mt-3">States</h3>
      <Button>Default</Button>
      <Button active>Active</Button>
      <Button disabled>Disabled</Button>

      <h2 className="mt-3">Card</h2>
      <Card>
        <CardHeader>Card Header</CardHeader>
        <CardBody>
          <CardTitle>Card title</CardTitle>
          <p>This is a card body.</p>
          <CardLink>Infinity</CardLink>
          <CardLink>Beyond</CardLink>
        </CardBody>
        <CardFooter>Card footer</CardFooter>
      </Card>

      <h2 className="mt-3">Checkbox</h2>
      <Checkbox
        checked={checkbox}
        onChange={(checked) => setCheckbox(checked)}
        label="Basic checkbox"
        helper="Basic checkbox helper"
      />

      <h2 className="mt-3">Col</h2>
      <Grid>
        <Col xs={4} className="bg-accent p-2 rounded text-light">1/3</Col>
        <Col xs={4} className="bg-accent p-2 rounded text-light">1/3</Col>
        <Col xs={4} className="bg-accent p-2 rounded text-light">1/3</Col>
      </Grid>

      <h2 className="mt-3">Container</h2>
      <p>This content is located in a container.</p>

      <h2 className="mt-3">Dialog</h2>
      <Button onClick={() => setOpen(true)}>Open dialog</Button>
      <Dialog open={open} setOpen={setOpen}>
        <DialogHeader action={<CloseButton setOpen={setOpen} />}>Dialog example</DialogHeader>
        <DialogBody>
          <p>Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
        </DialogBody>
      </Dialog>

      <h2 className="mt-3">Input</h2>
      <Input placeholder="Default" />
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Input type="textarea" placeholder="Textarea" />

      <h2 className="mt-3">Input label</h2>
      <InputLabel>Input label</InputLabel>

      <h2 className="mt-3">Label</h2>
      <Label>Default</Label>
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

      <h3 className="mt-3">Plated label</h3>
      <Label variant="plated" color="red">Red</Label>
      <Label variant="plated" color="orange">Orange</Label>
      <Label variant="plated" color="amber">Amber</Label>
      <Label variant="plated" color="yellow">Yellow</Label>
      <Label variant="plated" color="lime">Lime</Label>
      <Label variant="plated" color="green">Green</Label>
      <Label variant="plated" color="teal">Teal</Label>
      <Label variant="plated" color="cyan">Cyan</Label>
      <Label variant="plated" color="blue">Blue</Label>
      <Label variant="plated" color="indigo">Indigo</Label>
      <Label variant="plated" color="violet">Violet</Label>
      <Label variant="plated" color="purple">Purple</Label>
      <Label variant="plated" color="pink">Pink</Label>
      <Label variant="plated" color="rose">Rose</Label>
      <Label variant="plated" color="brown">Brown</Label>
      <Label variant="plated" color="grey">Grey</Label>
      <Label variant="plated" color="accent">Accent</Label>

      <h3 className="mt-3">Solid labels</h3>
      <Label variant="solid" color="red">Red</Label>
      <Label variant="solid" color="orange">Orange</Label>
      <Label variant="solid" color="amber">Amber</Label>
      <Label variant="solid" color="yellow">Yellow</Label>
      <Label variant="solid" color="lime">Lime</Label>
      <Label variant="solid" color="green">Green</Label>
      <Label variant="solid" color="teal">Teal</Label>
      <Label variant="solid" color="cyan">Cyan</Label>
      <Label variant="solid" color="blue">Blue</Label>
      <Label variant="solid" color="indigo">Indigo</Label>
      <Label variant="solid" color="violet">Violet</Label>
      <Label variant="solid" color="purple">Purple</Label>
      <Label variant="solid" color="pink">Pink</Label>
      <Label variant="solid" color="rose">Rose</Label>
      <Label variant="solid" color="brown">Brown</Label>
      <Label variant="solid" color="grey">Grey</Label>
      <Label variant="solid" color="accent">Accent</Label>

      <h2 className="mt-3">List</h2>
      <List dividers border>
        <ListItemDivider primary="Section divider" />
        <ListItem
          primary="This is a list item"
          startAction={<Checkbox checked={listBox} onChange={setListBox} />}
          startIcon={<ValkyrieIcon icon={viHouse} />}
        />
        <ListItem
          primary="This is also list item"
          endAction={<Checkbox checked={listBox} onChange={setListBox} />}
        />
        <ListItemDivider primary="Section divider" secondary="Section description" />
        <ListItem
          primary="This is a disabled list item"
          onClick={() => alert('You clicked')}
          disabled
          startIcon={<ValkyrieIcon icon={viHouse} />}
          endIcon={<ValkyrieIcon icon={viHouse} />}
        />
        <ListItem
          primary="This is an edgy list item"
          color="red"
          fullColor
          onClick={() => alert('You clicked')}
          endIcon={<ValkyrieIcon icon={viHouse} />}
        />
      </List>

      <h2 className="mt-3">Offcanvas</h2>
      <Button onClick={() => setCanvas(true)}>Open canvas</Button>
      <Offcanvas open={canvas} setOpen={setCanvas}>
        <OffcanvasHeader action={<CloseButton setOpen={setCanvas} />}>Offcanvas example</OffcanvasHeader>
        <OffcanvasBody>
          <p>
            Are you sure you want to deactivate your account? All of your data
            will be permanently removed. This action cannot be undone.
          </p>
        </OffcanvasBody>
      </Offcanvas>

      <h2 className="mt-3">Pivot</h2>
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

      <h3 className="mt-3">Pills</h3>
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

      <h3 className="mt-3">Underline</h3>
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

      <h2 className="mt-3">Progress</h2>
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

      <h2 className="mt-3">Radio</h2>
      <RadioGroup
        onChange={setRadio}
        value={radio}
        label="Value checker"
      >
        <Radio value="hello" label="Hello" />
        <Radio value="bonjour" label="Bonjour" />
      </RadioGroup>

      <h2 className="mt-3">Range</h2>
      <Range
        value={range}
        onChange={(e) => setRange(e.target.value as unknown as number)}
      />

      <h2 className="mt-3">Select</h2>
      <Select
        value={select}
        onChange={(value: any) => setSelect(value)}
        name="Option"
        options={[
          { value: 1, label: 'Option 1' },
          { value: 2, label: 'Option 2' },
          { value: 3, label: 'Option 3' },
          { value: 4, label: 'Option 4' },
          { value: 5, label: 'Option 5' },
          { value: 10, label: 'Option 10' },
          { value: 15, label: 'Option 15' },
          { value: 20, label: 'Option 20' },
          { value: 25, label: 'Option 25' },
          { value: 30, label: 'Option 30' },
          { value: 35, label: 'Option 35' },
          { value: 40, label: 'Option 40' },
          { value: 45, label: 'Option 45' },
          { value: 50, label: 'Option 50' },
          { value: 60, label: 'Option 60' },
          { value: 70, label: 'Option 70' },
          { value: 80, label: 'Option 80' },
          { value: 90, label: 'Option 90' },
          { value: 100, label: 'Option 100' },
        ]}
      />
    </div>
  );
}

export default App;
