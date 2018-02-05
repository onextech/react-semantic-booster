import React from 'react';
import { storiesOf } from '@storybook/react';
import SocialLinkGroup from '.';


export const itemsExample = [
  {
    name: 'facebook',
    link: { to: 'http://www.facebook.com' },
    icon: { name: 'facebook f' },
  },
  {
    name: 'instagram',
    link: { to: 'http://www.instagram.com' },
    icon: { name: 'instagram' },
  },
  {
    name: 'twitter',
    link: { to: 'http://www.twitter.com' },
    icon: { name: 'twitter' },
  },
];

export const groupPropsExample = { size: 'massive', basic: true, icon: true };

storiesOf('SocialLinkGroup', module)
  .add('Default', () => (
    <SocialLinkGroup items={itemsExample} groupProps={groupPropsExample} />
  ));
