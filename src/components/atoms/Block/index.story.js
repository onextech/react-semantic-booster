import React from 'react';
import { storiesOf } from '@storybook/react';
import Block from '.';


storiesOf('Block', module)
  .add('Default', () => (
    <div>
      <Block textAlign="center" spacer={1}>Hello World</Block>
      <Block secondary textAlign="center" spacer={2}>Hello World</Block>
      <Block inverted textAlign="center" spacer={3}>Hello World</Block>
      <Block inverted textAlign="center" spacer={{ top: 3, left: 3, right: 3 }}>Hello World</Block>
    </div>
  ))
  .add('Angular', () => (
    <div>
      <Block inverted textAlign="center" spacer={2}>Hello World</Block>
      <Block textAlign="center" spacer={2} angular={{ top: true, bottom: true }}>Hello World</Block>
      <Block inverted textAlign="center" spacer={2}>Hello World</Block>
    </div>
  ))
  .add('Image background', () => (
    <div>
      <Block background={{
        src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong,_Sichuan,_China.JPG',
      }} attached inverted textAlign="center" spacer={3}>
        Hello World
      </Block>
    </div>
  ))
  .add('Page Center', () => (
    <Block pageCenter>
      I am centered
    </Block>
  ))
  .add('Vertical Align', () => (
    <div>
      <Block height={600} verticalAlign="top" inverted textAlign="center">
        Hello World
      </Block>
      <Block height={600} verticalAlign="middle" textAlign="center">
        Hello World
      </Block>
      <Block height={600} verticalAlign="bottom" inverted textAlign="center">
        Hello World
      </Block>
    </div>
  ));
