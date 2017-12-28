import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from 'semantic-ui-react';
import Block from '../../atoms/Block';
import Site from './index';


export const menu = [ // eslint-disable-line import/prefer-default-export
  {
    key: 'home', name: 'Home', to: '/',
  },
  {
    key: 'about', name: 'About', to: '/about',
  },
];

storiesOf('Site', module)
  .add('Default', () => (
    <Site menu={menu}>
      <Block attached inverted>
        <Container>
          <h1>Hello World</h1>
        </Container>
      </Block>
    </Site>
  ));
