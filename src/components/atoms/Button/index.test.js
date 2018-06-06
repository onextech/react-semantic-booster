import React from 'react';
import renderer from 'react-test-renderer';
import Button from '.';


describe('<Button>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Button text content='Hello' />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
