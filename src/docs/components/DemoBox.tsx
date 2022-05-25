import { createElement } from 'react';

import { refractor } from 'refractor';
import { toH } from 'hast-to-hyperscript';
import reactElementToJSXString from 'react-element-to-jsx-string';

import { Card, CardBody } from '@components';

export default function DemoBox({ children }) {
  const componentString = reactElementToJSXString(children);
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
