import React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from 'semantic-ui-react';
import Block from '../../atoms/Block/index';
import Copy from './index';
import { sizes } from '../../../utils/constants';


const defaultExample = {
  subheader: {
    content: 'Example',
  },
  header: {
    content: 'Hello World',
  },
  body: 'This is the world of the world of the world.',
};

const listExample = {
  list: {
    bulleted: true,
    relaxed: true,
    size: 'large',
    items: [
      'Designed an integration for realtime financial market data population',
      'Built an automatic chart generation and product table tool',
      'Simplified reporting process with built-in language integrations',
    ],
  },
};

const textAlignExample = { ...defaultExample, textAlign: 'center' };

storiesOf('Copy', module)
  .add('Default', () => (
    <div>
      <Block><Copy {...defaultExample} /></Block>
      <Block><Copy {...textAlignExample} /></Block>
      {
        sizes.slice(0).reverse().map((size) => {
          const data = {
            ...defaultExample,
            size,
            subheader: { content: `${size} example` },
          };
          return (<div key={size}><Copy {...data} /><Divider /></div>);
        })
      }
      <Block secondary><Copy {...listExample} /></Block>
    </div>
  ));
