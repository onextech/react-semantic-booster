import React from 'react';
import renderer from 'react-test-renderer';
import IconList from '.';
import { items } from './index.story';


describe('<IconList>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<IconList items={items} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
