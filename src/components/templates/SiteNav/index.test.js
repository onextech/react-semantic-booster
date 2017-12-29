import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import SiteNav from '.';
import { menu } from './index.story';


describe('<SiteNav>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><SiteNav menu={menu}>Hello World</SiteNav></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has sidebar', () => {
    const wrapper = render(<Router><SiteNav menu={menu}>Hello World</SiteNav></Router>);
    expect(wrapper.hasClass('pushable')).toBe(true);
    expect(wrapper.find('.sidebar').length).toBe(1);
  });
});
