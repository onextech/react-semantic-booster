import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from 'semantic-ui-react';
import Block from '../../atoms/Block';
import Site from './index';


export const menu = [ // eslint-disable-line import/prefer-default-export
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  {
    name: 'Support',
    dropdown: {
      items: [
        { name: 'Phone', to: '/phone' },
        { name: 'Email', to: '/email' },
      ],
    },
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

storiesOf('Site', module)
  .add('Default', () => (
    <Site menu={menu} menuProps={menuProps}>
      <Block attached inverted textAlign="center">
        <Container>
          <div style={{ padding: '8em 0' }}>
            <h1>Hello World</h1>
          </div>
        </Container>
      </Block>
    </Site>
  ));
