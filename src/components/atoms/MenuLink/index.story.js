import React from 'react';
import { storiesOf } from '@storybook/react';
import { Menu } from 'semantic-ui-react';
import MenuLink from '.';

storiesOf('MenuLink', module)
  .add('Default', () => (
    <Menu>
      <Menu.Item link fitted>
        <MenuLink to="/">
          Home
        </MenuLink>
      </Menu.Item>
      <Menu.Item link fitted>
        <MenuLink to="/about">
          About
        </MenuLink>
      </Menu.Item>
    </Menu>
  ));
