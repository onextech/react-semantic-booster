import React from 'react';
import { storiesOf } from '@storybook/react';
import Hero from '.';

export const heroProps = { // eslint-disable-line import/prefer-default-export
  header: 'Header',
  subheader: 'Subheader',
  image: '/',
  btn: {
    content: 'Btn.Content',
    href: '#',
    isHashLink: true,
  },
  height: 700,
  textAlign: 'center',
  hasBreadcrumbs: false,
};

storiesOf('Hero', module)
  .add('Default', () => (
    <Hero {...heroProps} />
  ));
