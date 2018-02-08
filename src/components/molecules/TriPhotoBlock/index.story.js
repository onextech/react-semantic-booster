import React from 'react';
import { storiesOf } from '@storybook/react';
import TriPhotoBlock from '.';
import { testImage1 } from '../../../../test/placeholders';

// eslint-disable-next-line import/prefer-default-export
export const photos = [
  {
    src: testImage1,
  },
  {
    src: testImage1,
  },
  {
    src: testImage1,
  },
];

storiesOf('TriPhotoBlock', module)
  .add('Default', () => (
    <TriPhotoBlock photos={photos} />
  ));
