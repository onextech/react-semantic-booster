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
      <Block attached textAlign="center">Hello World</Block>
    </div>
  ))
  .add('Spacer', () => (
    <div>
      <Block attached secondary textAlign="center" spacer={1}>Hello World</Block>
      <Block attached textAlign="center" spacer={2}>Hello World</Block>
      <Block attached inverted textAlign="center" spacer={3}>Hello World</Block>
    </div>
  ));
