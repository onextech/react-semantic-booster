import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown, Icon } from 'semantic-ui-react';
import DropdownLink from '.';

storiesOf('DropdownLink', module)
  .add('Default', () => (
    <Dropdown text="Dropdown">
      <Dropdown.Menu>
        <DropdownLink to="/">Hello World</DropdownLink>
        <DropdownLink>Hello World</DropdownLink>
        <DropdownLink to="/"><Icon name='star' /> Hello World</DropdownLink>
        <DropdownLink><Icon name='star' /> Hello World</DropdownLink>
      </Dropdown.Menu>
    </Dropdown>
  ));
