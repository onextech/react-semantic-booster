import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import { MemoryRouter as Router, Link } from 'react-router-dom';
import ButtonLink from '.';


describe('<ButtonLink>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><ButtonLink to="http://www.facebook.com">Facebook</ButtonLink></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has link child', () => {
    const wrapper = shallow(<ButtonLink to="/url" />);
    expect(wrapper.find(Link).length).toBe(1);
  });

  it('has semantic button class', () => {
    const wrapper = render(<Router><ButtonLink to="/url" /></Router>);
    expect(wrapper.hasClass('ui')).toBe(true);
  });
});
