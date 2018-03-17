import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Menu } from 'semantic-ui-react';
import SidebarContentCombo from '.';
import Block from '../../atoms/Block';

const ExampleMenu = () => (
  <Menu text vertical style={{ padding: '1em 2em' }}>
    <Menu.Item header>Sort By</Menu.Item>
    <Menu.Item name="closest" />
    <Menu.Item name="mostComments" />
    <Menu.Item name="mostPopular" />
  </Menu>
);

const ExampleContent = () => (
  <Block attached inverted textAlign="center">
    <Container>
      <div style={{ padding: '8em 0' }}>
        <h1>Hello World</h1>
      </div>
    </Container>
  </Block>
);

storiesOf('SidebarContentCombo', module)
  .add('Default', () => (
    <SidebarContentCombo sidebar={<ExampleMenu />}>
      <ExampleContent />
    </SidebarContentCombo>
  ));
