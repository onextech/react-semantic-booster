import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import HomeTemplate from '.';
import { heroProps } from '../../organisms/Hero/index.story';


describe('<HomeTemplate>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><HomeTemplate heroProps={heroProps} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
