import React from 'react';
import renderer from 'react-test-renderer';
import Grid from '.';


describe('<Grid>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Grid />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
