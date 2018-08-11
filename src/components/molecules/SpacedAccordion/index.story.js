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
  {
    key: 4,
    header: 'Accordion tab with multiple paragraphs (using an array of string)',
    content: [
      'Each story, and also this string, is an item in the array',
      'The Gingerbread Man - A little old woman baked a gingerbread man and when she took him out of the oven, he ran away. ' +
      'The woman and her husband chased him, as well as the pig, cow and horse. No one could catch him. ' +
      'He came to a river and a sly fox told him he could jump on his tail and he would take him across. ' +
      'He did and the fox went deeper and the gingerbread man had to jump on his back and then on his nose. ' +
      'When he got to his nose, the fox ate him. ',
      'Ugly Duckling - One duckling did not look like the others and he was sad. ' +
      'He decided to run away and came across a cottage. ' +
      'He stayed there for a while but the children scared him. ' +
      'He left and spent the winter in the pond. In the spring, he saw his reflection and realized he was a swan.',
    ],
  },
];

storiesOf('SpacedAccordion', module)
  .add('Default', () => (
    <SpacedAccordion data={faqsExample} />
  ));
