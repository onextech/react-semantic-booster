import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import Breadcrumbs from '.';


describe('<Breadcrumbs>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><Breadcrumbs /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('is made of semantic-ui', () => {
    const wrapper = render(<Router><Breadcrumbs>Hello World</Breadcrumbs></Router>);
    expect(wrapper.hasClass('ui breadcrumb')).toBe(true);
  });

  it('is always made up by at least three children by default', () => {
    const wrapper = render(<Router><Breadcrumbs>Hello World</Breadcrumbs></Router>);
    expect(wrapper.children().length).toBe(3);
  });

  it('has at least a link inside', () => {
    const wrapper = render(<Router><Breadcrumbs>Hello World</Breadcrumbs></Router>);
    expect(wrapper.find('a').length).toBeGreaterThanOrEqual(1);
  });
});
