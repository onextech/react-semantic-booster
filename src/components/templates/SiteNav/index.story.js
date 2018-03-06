import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from 'semantic-ui-react';
import Block from '../../atoms/Block';
import SiteNav from './index';


export const menu = [ // eslint-disable-line import/prefer-default-export
  {
    position: 'left',
    content: [
      {
        name: 'Logo',
        to: '/',
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
      { name: 'Contact Us', to: '/contact', button: { primary: true } },
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
  ));
