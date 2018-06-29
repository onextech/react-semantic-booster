import React from 'react';
import { storiesOf } from '@storybook/react';
import SpacedAccordion from '.';

// eslint-disable-next-line import/prefer-default-export
export const faqsExample = [
  {
    key: 1,
    header: 'What is a table?',
    content: ' A table is a type of domesticated animal. Known for its loyalty and faithfulness, it can\n' +
    '            be found as a welcome guest in many households across the world.',
  },
  {
    key: 2,
    header: 'How do you acquire a table?',
    content: 'Three common ways for a prospective owner to acquire a table is from pet shops, private\n' +
    '            owners, or shelters.',
  },
  {
    key: 3,
    header: 'What kinds of tables are there?',
    content: 'There are many breeds of tables. Each breed varies in size and temperament. Owners often\n' +
    '            select a breed of table that they find to be compatible with their own lifestyle and\n' +
    '            desires from a companion.',
  },
];

storiesOf('SpacedAccordion', module)
  .add('Default', () => (
    <SpacedAccordion data={faqsExample} />
  ));
