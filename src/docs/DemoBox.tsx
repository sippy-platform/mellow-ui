import { createElement } from 'react';

import { refractor } from 'refractor';
import { toH } from 'hast-to-hyperscript';
import jsxToString from 'jsx-to-string';

import { Card, CardBody } from '../components';

function DemoBox({ children }) {
  const componentString = jsxToString(children);
  const tree = refractor.highlight(componentString, 'html');
  const exampleComponent = toH(createElement, tree);

  return (
    <Card className="border-2 mb-3">
      <CardBody>
        {children}
      </CardBody>
      <pre
        className="border-top border-2"
        style={{
          background: '#000',
          color: '#fff',
          borderRadius: '0 0 .4rem .4rem',
          margin: 0
        }}
      >
        {exampleComponent}
      </pre>
    </Card>
  );
}

export default DemoBox;
