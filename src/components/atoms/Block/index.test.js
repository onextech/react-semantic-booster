import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import Block from '.';


describe('<Block>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Block>Hello World</Block>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('is a semantic-ui segment component', () => {
    const wrapper = render(<Block>Hello World</Block>);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('ui segment')).toBe(true);
  });
});
