import React from 'react';
import { storiesOf } from '@storybook/react';
import { Menu } from 'semantic-ui-react';
import MenuLink from '.';

storiesOf('MenuLink', module)
  .add('Default', () => (
    <Menu>
      <MenuLink to="/">Home</MenuLink>
      <MenuLink to="#about">About</MenuLink>
      <MenuLink to="/google" link={{ target: '_blank' }}>External Link</MenuLink>
    </Menu>
  ));
