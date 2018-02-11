import React from 'react';
import renderer from 'react-test-renderer';
import StatCard from '.';
import { style0Example } from './index.story';


describe('<StatCard>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<StatCard {...style0Example[0]} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
