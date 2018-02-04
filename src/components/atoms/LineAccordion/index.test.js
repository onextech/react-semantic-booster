import React from 'react';
import renderer from 'react-test-renderer';
import LineAccordion from '.';
import { panelsExample } from './index.story';


describe('<LineAccordion>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<LineAccordion panels={panelsExample} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
