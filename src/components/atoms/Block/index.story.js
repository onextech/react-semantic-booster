import React from 'react';
import { storiesOf } from '@storybook/react';
import Block from '.';


storiesOf('Block', module)
  .add('Default', () => (
    <Block>Hello World</Block>
  ))
  .add('Stacked', () => (
    <div>
      <Block attached textAlign="center">Hello World</Block>
      <Block attached inverted textAlign="center">Hello World</Block>
    </div>
  ));
