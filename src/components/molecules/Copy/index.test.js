import React from 'react';
import renderer from 'react-test-renderer';
import Copy from '.';


describe('<Copy>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Copy />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
