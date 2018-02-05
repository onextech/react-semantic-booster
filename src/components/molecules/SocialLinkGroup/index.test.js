import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import SocialLinkGroup from '.';
import { itemsExample, groupPropsExample } from './index.story';


describe('<SocialLinkGroup>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><SocialLinkGroup items={itemsExample} groupProps={groupPropsExample} /></Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
