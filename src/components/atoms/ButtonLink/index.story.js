import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import ButtonLink from '.';

storiesOf('ButtonLink', module)
  .add('Default', () => (
    <ButtonLink
      content="Hello World"
      to="/"
      onClick={action('clicked')} />
  ))
  .add('Primary', () => (
    <ButtonLink
      content="Hello World"
      primary
      size="huge"
      to="/"
      onClick={action('clicked')} />
  ));
