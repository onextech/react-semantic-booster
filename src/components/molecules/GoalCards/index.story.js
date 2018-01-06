import React from 'react';
import { storiesOf } from '@storybook/react';
import GoalCards from '.';


export const demoCards = { // eslint-disable-line import/prefer-default-export
  items: [
    {
      header: 'Disrupt with game-changing strategies',
      listlinks: [
        { name: 'Data & Analytics', to: '/home' },
        { name: 'Digital Strategy', to: '/about' },
        { name: 'Internet of Things', to: '/work' },
        { name: 'Robotics & Automation', to: '/contact' },
      ],
    },
    {
      header: 'Build a digital culture',
      listlinks: [
        { name: 'Digital Culture & Capabilities', to: '/home' },
        { name: 'Digital Organization', to: '/about' },
        { name: 'Full-Scale Transformation', to: '/work' },
      ],
    },
    {
      header: 'Modernize core technology',
      listlinks: [
        { name: 'Cybersecurity', to: '/home' },
        { name: 'Application Management', to: '/about' },
        { name: 'Enterprise Architecture', to: '/work' },
        { name: 'Infrastructure & Cloud', to: '/work' },
        { name: 'IT Sourcing & Service Providers', to: '/work' },
      ],
    },
    {
      header: 'Create stunning digital experiences',
      listlinks: [
        { name: 'End-To-End Journey Redesign', to: '/home' },
        { name: 'Experience Design', to: '/about' },
      ],
    },
    {
      header: 'Turbo-charge marketing & sales',
      listlinks: [
        { name: 'Digital Marketing Operations', to: '/home' },
        { name: 'Digital Sales', to: '/about' },
        { name: 'Dynamic eCommerce Pricing', to: '/work' },
        { name: 'Personalization at Scale', to: '/work' },
      ],
    },
    {
      header: 'Optimize your operations',
      listlinks: [
        { name: 'Corporate Functions', to: '/home' },
        { name: 'Enterprise Resource Planning', to: '/about' },
        { name: 'IT Project Optimization', to: '/work' },
        { name: 'Lean IT', to: '/work' },
        { name: 'Service Operations', to: '/work' },
      ],
    },
  ],
  icon: true,
};

storiesOf('GoalCards', module)
  .add('Default', () => (
    <GoalCards cards={demoCards} />
  ));
