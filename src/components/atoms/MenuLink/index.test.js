import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import MenuLink from '.';


describe('<MenuLink>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><MenuLink to="/">Home</MenuLink></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has a link child', () => {
    const wrapper = render(<Router><MenuLink to="/">Home</MenuLink></Router>);
    expect(wrapper.find('a').length).toBe(1);
  });
});
