import React from 'react';
import renderer from 'react-test-renderer';
import SocialLinkGroup from '.';
import { itemsExample, groupPropsExample } from './index.story';


describe('<SocialLinkGroup>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SocialLinkGroup items={itemsExample} groupProps={groupPropsExample} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
