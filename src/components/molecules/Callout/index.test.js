import React from 'react';
import renderer from 'react-test-renderer';
import Callout from '.';
import { text, cta } from './index.story';


describe('<Callout>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Callout text={text} cta={cta} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
