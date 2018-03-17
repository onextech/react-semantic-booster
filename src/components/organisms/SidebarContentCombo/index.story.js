import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container, Menu, Card } from 'semantic-ui-react';
import SidebarContentCombo from '.';
import Block from '../../atoms/Block';
import MenuLink from '../../atoms/MenuLink';

const src = 'https://react.semantic-ui.com/assets/images/wireframe/white-image.png';

const CardExampleColored = () => (
  <Card.Group itemsPerRow={4}>
    <Card color='red' image={src} />
    <Card color='orange' image={src} />
    <Card color='yellow' image={src} />
    <Card color='olive' image={src} />
    <Card color='green' image={src} />
    <Card color='teal' image={src} />
    <Card color='blue' image={src} />
    <Card color='violet' image={src} />
    <Card color='purple' image={src} />
    <Card color='pink' image={src} />
    <Card color='brown' image={src} />
    <Card color='grey' image={src} />
  </Card.Group>
);

const ExampleMenu = () => (
  <Menu text vertical fluid style={{ padding: '1.3em' }}>
    <Menu.Item header>Sort By</Menu.Item>
    <Menu.Item name="closest" />
    <Menu.Item name="mostComments" />
    <Menu.Item name="mostPopular" />
  </Menu>
);

const ExampleContent = () => (
  <Block attached inverted textAlign="center" style={{ padding: '1em' }}>
    <Container>
      <h1>Hello World</h1>
      <CardExampleColored />
    </Container>
  </Block>
);

const ExampleMenuItems = () => (
  [
    <Menu.Menu key="left" position="left">
      <MenuLink key={1} to="/1">One</MenuLink>
      <MenuLink key={2} to="/2">Two</MenuLink>
      <MenuLink key={3} to="/3">Three</MenuLink>
    </Menu.Menu>,
    <Menu.Menu key="right" position="right">
      <MenuLink key={4} to="/4">Four</MenuLink>
      <MenuLink key={5} to="/5">Five</MenuLink>
      <MenuLink key={6} to="/6">Six</MenuLink>
    </Menu.Menu>,
  ]
);

storiesOf('SidebarContentCombo', module)
  .add('Default', () => (
    <SidebarContentCombo sidebar={<ExampleMenu />} menuItems={<ExampleMenuItems />}>
      <ExampleContent />
    </SidebarContentCombo>
  ));
