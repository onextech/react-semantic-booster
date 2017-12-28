import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { render } from 'enzyme';
import Site from '.';
import { menu } from './index.story';


describe('<Site>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><Site menu={menu}>Hello World</Site></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has sidebar', () => {
    const wrapper = render(<Router><Site menu={menu}>Hello World</Site></Router>);
    expect(wrapper.hasClass('pushable')).toBe(true);
    expect(wrapper.find('.sidebar').length).toBe(1);
  });
});
