import React from 'react';
import renderer from 'react-test-renderer';
import SpacedAccordion from '.';
import { faqsExample } from './index.story';

describe('<SpacedAccordion>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<SpacedAccordion data={faqsExample} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
