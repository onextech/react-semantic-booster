import React from 'react';
import renderer from 'react-test-renderer';
import Tab from '.';
import { exampleTabProps } from './index.story';


describe('<Tab>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Tab {...exampleTabProps} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
