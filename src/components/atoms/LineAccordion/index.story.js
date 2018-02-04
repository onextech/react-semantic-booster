import React from 'react';
import { storiesOf } from '@storybook/react';
import { Segment } from 'semantic-ui-react';
import LineAccordion from '.';

// eslint-disable-next-line import/prefer-default-export
export const panelsExample = [
  {
    title: {
      content: 'Residencies',
    },
    content: {
      content: <ul>
        <li>Resident DJ - Peaches Club, Singapore (former Cherry Disco) (2017 - 2018)</li>
        <li>Resident DJ - PLAY Club since 2010</li>
      </ul>,
    },
  },
  {
    title: {
      content: 'Venues Played',
    },
    content: {
      content: <ul>
        <li>Attica Club, Singapore</li>
        <li>Avalon Club, Singapore</li>
        <li>Filter Club, Singapore</li>
        <li>New Asia Bar, Singapore</li>
      </ul>,
    },
  },
];

storiesOf('LineAccordion', module)
  .add('Default', () => (
    <div>
      <Segment>
        <LineAccordion fluid size="small" panels={panelsExample} />
      </Segment>
      <Segment inverted>
        <LineAccordion inverted fluid defaultindex={1} panels={panelsExample} />
      </Segment>
    </div>
  ));

