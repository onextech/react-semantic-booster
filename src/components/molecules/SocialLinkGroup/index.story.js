import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialLinkGroup from '.';


export const itemsExample = [
  {
    name: 'facebook',
    link: { href: 'http://www.facebook.com', target: '_blank' },
    icon: { name: 'facebook f' },
    btn: { color: 'facebook' },
  },
  {
    name: 'instagram',
    link: { href: 'http://www.instagram.com', target: '_blank' },
    icon: { name: 'instagram' },
    btn: { color: 'instagram' },
  },
  {
    name: 'twitter',
    link: { href: 'http://www.twitter.com', target: '_blank' },
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
