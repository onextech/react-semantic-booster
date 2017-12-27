import React from 'react';
import { storiesOf } from '@storybook/react';
import HomeTemplate from '.';
import { heroProps } from '../../organisms/Hero/index.story';
import Block from '../../atoms/Block';


storiesOf('HomeTemplate', module)
  .add('Default', () => (
    <HomeTemplate heroProps={heroProps}>
      <Block attached textAlign="center" inverted>
        Hello World
      </Block>
    </HomeTemplate>
  ));
