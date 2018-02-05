import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialLinkGroup from '.';


export const itemsExample = [
  {
    name: 'facebook',
    link: { to: 'http://www.facebook.com' },
    icon: { name: 'facebook f' },
    btn: { color: 'facebook' },
  },
  {
    name: 'instagram',
    link: { to: 'http://www.instagram.com' },
    icon: { name: 'instagram' },
    btn: { color: 'instagram' },
  },
  {
    name: 'twitter',
    link: { to: 'http://www.twitter.com' },
    icon: { name: 'twitter' },
    btn: { color: 'twitter' },
  },
];

export const groupPropsExample = { size: 'massive' };

storiesOf('SocialLinkGroup', module)
  .add('Default', () => (
    <SocialLinkGroup items={itemsExample} groupProps={{ ...groupPropsExample }} />
  ))
  .add('Basic', () => (
    <SocialLinkGroup
      items={itemsExample}
      groupProps={{ ...groupPropsExample, basic: true, borderless: true }} />
  ));
