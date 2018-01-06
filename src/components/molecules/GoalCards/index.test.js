import React from 'react';
import renderer from 'react-test-renderer';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import { difference } from 'lodash';
import GoalCards from '.';
import { demoCards } from './index.story';


describe('<GoalCards>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><GoalCards cards={demoCards} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has correct parent classes', () => {
    const wrapper = render(<Router><GoalCards cards={demoCards} /></Router>);
    const renderedClasses = wrapper.attr('class').split(' ');
    const shouldHaveClasses = 'ui doubling stackable cards'.split(' ');
    const areClassesCorrect = difference(shouldHaveClasses, renderedClasses).length === 0;
    expect(areClassesCorrect).toBe(true);
    expect(wrapper.length).toBe(1);
  });
});
