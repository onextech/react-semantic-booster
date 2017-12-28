import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import Hero from '.';
import { heroProps } from './index.story';


describe('<Hero>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><Hero {...heroProps} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has height prop', () => {
    const wrapper = shallow(<Router><Hero {...heroProps} /></Router>);
    expect(wrapper.find(Hero).props().height).toBeTruthy();
  });

  it('has h1 element', () => {
    const wrapper = render(<Router><Hero {...heroProps} /></Router>);
    expect(wrapper.find('h1').length).toBe(1);
  });
});
