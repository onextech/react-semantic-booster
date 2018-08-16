import React from 'react';
import { Link } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { Container, Icon, Menu } from 'semantic-ui-react';
import Block from '../../atoms/Block';
import SiteNav from './index';

export const menu = [ // eslint-disable-line import/prefer-default-export
  {
    position: 'left',
    content: [
      {
        name: 'Logo',
        to: '/',
        link: { style: { padding: 0 } },
        image: {
          height: 50,
          src: 'https://s3-ap-southeast-1.amazonaws.com/storage.api.merrymaker.com/images/merrymaker_mascot_head_side.svg',
        },
      },
      { name: 'Home', to: '/home' },
      { name: 'About', to: '/about' },
    ],
  },
  {
    position: 'right',
    content: [
      {
        name: 'Support',
        dropdown: {
          items: [
            { name: 'Phone', to: '/phone' },
            { name: 'Email', to: '/email' },
          ],
        },
      },
      { name: 'Contact Us', to: '/contact', button: { secondary: true } },
      { name: 'Login', button: { primary: true, onClick: () => console.log('Clicked on login') } }, // eslint-disable-line no-console
    ],
  },
];

export const menuCenter = [ // eslint-disable-line import/prefer-default-export
  {
    position: 'center',
    props: {
      style: {
        width: '100%',
        justifyContent: 'space-between',
      },
    },
    content: [
      {
        name: 'Logo',
        to: '/',
        link: { style: { padding: 0 } },
        image: {
          height: 50,
          src: 'https://s3-ap-southeast-1.amazonaws.com/storage.api.merrymaker.com/images/merrymaker_mascot_head_side.svg',
        },
      },
      { name: 'Home', to: '/home' },
      { name: 'About', to: '/about' },
    ],
  },
];

export const menuProps = {
  pointing: true,
  secondary: true,
  float: false,
  container: true,
};

export const floatMenuProps = {
  pointing: true,
  secondary: true,
  float: true,
  container: true,
};

export const menuTopItems = [
  { key: 'login', name: 'Login', to: '/login' },
  { key: 'signup', name: 'Signup', to: '/signup' },
  { key: 'basket', name: <Icon name='shopping basket' />, to: '/cart' },
];

export const menuTop = (
  <Menu size='mini'>
    { menuTopItems.map(item => (
        <Menu.Item link key={item.key}>
          <Link to={item.to}>{item.name}</Link>
        </Menu.Item>
      ))
    }
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

storiesOf('SiteNav', module)
  .add('Default', () => (
    <SiteNav menu={menu}>
      <ExampleContent />
    </SiteNav>
  ))
  .add('Inverted', () => (
    <SiteNav menu={menu} menuProps={{ inverted: true }}>
      <ExampleContent />
    </SiteNav>
  ))
  .add('Float Inverted', () => (
    <SiteNav menu={menu} menuProps={{ inverted: true, ...floatMenuProps }}>
      <ExampleContent />
    </SiteNav>
  ))
  .add('Float', () => (
    <SiteNav menu={menu} menuProps={floatMenuProps}>
      <Block secondary>
        <Container>
          <h1>Hello World</h1>
        </Container>
      </Block>
    </SiteNav>
  ))
  .add('Container Menu', () => (
    <SiteNav menu={menu} menuProps={menuProps}>
      <Block secondary>
        <Container>
          <h1>Hello World</h1>
        </Container>
      </Block>
    </SiteNav>
  ))
  .add('Container Menu Center', () => (
    <SiteNav menu={menuCenter} menuProps={menuProps} menuTop={menuTop}>
      <Block secondary>
        <Container>
          <h1>Hello World</h1>
        </Container>
      </Block>
    </SiteNav>
  ));
