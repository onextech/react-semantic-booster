import React from 'react';
import { render } from 'enzyme';
import { Block, MediaCss, Desktop } from '../dist';

describe('Distribution', () => {
  it('imports React component', () => {
    const wrapper = render(<Block>Hello World</Block>);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('ui segment')).toBe(true);
  });

  it('imports responsive utils', () => {
    expect(MediaCss).toBeTruthy();
    expect(Desktop).toBeTruthy();
  });
});
