import React from 'react';
import { storiesOf } from '@storybook/react';
import { Dropdown } from 'semantic-ui-react';
import DropdownLink from '.';

storiesOf('DropdownLink', module)
  .add('Default', () => (
    <Dropdown text="Dropdown">
      <Dropdown.Menu>
        <DropdownLink to="/">Hello World</DropdownLink>
        <DropdownLink>Greetings</DropdownLink>
      </Dropdown.Menu>
    </Dropdown>
  ));
