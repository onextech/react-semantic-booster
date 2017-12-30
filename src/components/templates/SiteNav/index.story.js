import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from 'semantic-ui-react';
import Block from '../../atoms/Block';
import SiteNav from './index';


export const menu = [ // eslint-disable-line import/prefer-default-export
  {
    position: 'left',
    content: [
      { name: 'Home', to: '/' },
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
  inverted: false,
  pointing: false,
  secondary: false,
  // Custom props not defined in semantic-ui
  custom: {
    float: false,
    container: false, // only applied when float = true
  },
};

export const floatedMenuProps = {
  inverted: true,
  pointing: true,
  secondary: true,
  // Custom props not defined in semantic-ui
  custom: {
    float: true,
    container: true, // only applied when float = true
  },
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
    <SiteNav menu={menu} menuProps={menuProps}>
      <ExampleContent />
    </SiteNav>
  ))
  .add('Floated', () => (
    <SiteNav menu={menu} menuProps={floatedMenuProps}>
      <ExampleContent />
    </SiteNav>
  ));
