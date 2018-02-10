import React from 'react';
import { storiesOf } from '@storybook/react';
import Banner from '.';
import { testImage2 } from '../../../../test/placeholders';


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
    content: 'Andy Rubin Sees AI and Quantum Computers as Next Big Thing',
    as: 'h1',
    size: 'huge',
  },
  subheader: {
    content: 'Technology',
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
  subheader: {
    content: 'Featured Story',
    bold: false,
  },
  header: {
    content: 'Station to station: The best train journeys you’ve never heard of',
    as: 'h1',
    size: 'large',
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
