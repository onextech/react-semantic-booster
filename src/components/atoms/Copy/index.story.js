import React from 'react';
import { storiesOf } from '@storybook/react';
import { Divider } from 'semantic-ui-react';
import Block from '../Block';
import Copy from '.';
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
    </div>
  ));
