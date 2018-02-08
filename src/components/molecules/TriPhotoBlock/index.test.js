import React from 'react';
import renderer from 'react-test-renderer';
import TriPhotoBlock from '.';
import { photos } from './index.story';

describe('<TriPhotoBlock>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<TriPhotoBlock photos={photos} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
