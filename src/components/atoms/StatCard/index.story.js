import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from 'semantic-ui-react';
import StatCard from '.';


const style1 = {
  card: {
    raised: true,
    basic: true,
  },
  headers: {
    color: 'blue',
    gradient: {
      from: '#1f40e6',
      to: '#37dee7',
    },
  },
};

const style2 = {
  card: {
    raised: true,
    stretched: true,
  },
  headers: {
    color: 'blue',
    gradient: {
      from: '#1f40e6',
      to: '#37dee7',
    },
  },
};

export const style0Example = [
  {
    content: {
      number: '60',
      header: 'world-class specialists',
      description: 'hired and onboarded',
    },
  },
  {
    content: {
      number: '8',
      header: 'agreements signed',
      description: 'with agencies, startups, and manufacturers',
    },
  },
  {
    content: {
      number: '1',
      header: 'fully-operational business',
      description: 'ready to capture the IoT opportunity',
    },
  },
];
export const style1Example = [
  {
    ...style1,
    content: {
      number: '60',
      header: 'world-class specialists',
      description: 'hired and onboarded',
    },
  },
  {
    ...style1,
    content: {
      number: '8',
      header: 'agreements signed',
      description: 'with agencies, startups, and manufacturers',
    },
  },
  {
    ...style1,
    content: {
      number: '1',
      header: 'fully-operational business',
      description: 'ready to capture the IoT opportunity',
    },
  },
];
export const style2Example = [
  {
    ...style2,
    content: {
      number: '60',
      header: 'world-class specialists',
      description: 'hired and onboarded',
    },
  },
  {
    ...style2,
    content: {
      number: '8',
      header: 'agreements signed',
      description: 'with agencies, startups, and manufacturers',
    },
  },
  {
    ...style2,
    content: {
      number: '1',
      header: 'fully-operational business',
      description: 'ready to capture the IoT opportunity',
    },
  },
];

storiesOf('StatCard', module)
  .add('Default', () => (
    <div>
      <Grid container stackable>
        <Grid.Row columns="equal">
          {style0Example.map(stat => (
            <Grid.Column key={stat.content.number}>
              <StatCard {...stat} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
      <Grid container stackable divided>
        <Grid.Row columns="equal">
          {style1Example.map(stat => (
            <Grid.Column key={stat.content.number}>
              <StatCard {...stat} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
      <Grid container stackable>
        <Grid.Row columns="equal">
          {style2Example.map(stat => (
            <Grid.Column key={stat.content.number}>
              <StatCard {...stat} />
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    </div>
  ));
