import React from 'react';
import { storiesOf } from '@storybook/react';
import Block from '../Block';
import Header from '.';

storiesOf('Header', module)
  .add('Default', () => (
    <div>
      <Block>
        <Header fontWeight="normal" content="Normal" />
        <Header content="Bold" />
      </Block>
      <Block inverted>
        <Header content="Inverted" />
      </Block>
      <Block>
        <Header relaxed content="Relaxed" />
        <Header compact content="Compact" />
      </Block>
    </div>
  ));
