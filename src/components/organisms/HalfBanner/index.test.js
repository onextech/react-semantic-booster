import React from 'react';
import renderer from 'react-test-renderer';
import HalfBanner from './index';
import { defaultExample } from './index.story';

describe('<HalfBanner>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<HalfBanner {...defaultExample} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
