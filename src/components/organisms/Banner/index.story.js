import React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from '.';

const testImage2 = 'https://images.pexels.com/photos/196652/pexels-photo-196652.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb';

const articleHero = {
  block: {
    height: 600,
    inverted: true,
    verticalAlign: 'bottom',
    background: {
      src: testImage2,
    },
  },
  header: {
    content: 'A new Internet of Things platform and business',
    as: 'h1',
    size: 'huge',
    inverted: true,
  },
  subheader: {
    content: 'Impact Story',
  },
};

const articleHeader = {
  block: {
    verticalAlign: 'bottom',
  },
  header: {
    content: 'A new Internet of Things platform and business',
    as: 'h1',
    size: 'huge',
  },
  subheader: {
    content: 'Impact Story',
  },
};

const articleSpotlight = {
  block: {
    inverted: true,
    verticalAlign: 'bottom',
    background: {
      src: testImage2,
    },
  },
  header: {
    content: 'Station to station: The best train journeys you’ve never heard of',
    as: 'h1',
    inverted: true,
  },
  container: {
    width: '50%',
  },
};

storiesOf('Banner', module)
  .add('Default', () => (
    <div>
      <Banner {...articleHero} />
      <Banner {...articleHeader} />
      <Banner {...articleSpotlight} />
    </div>
  ));
