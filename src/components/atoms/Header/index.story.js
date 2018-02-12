import React from 'react';
import { storiesOf } from '@storybook/react';
import Block from '../Block';
import Header from '.';

storiesOf('Header', module)
  .add('Default', () => (
    <div>
      <Block>
        <Header fontWeight="normal" content="Hello World" />
        <Header content="Hello World" />
      </Block>
      <Block inverted>
        <Header fontWeight="normal" content="Hello World" />
        <Header content="Hello World" />
      </Block>
    </div>
  ));
