import React from 'react';
import { render } from 'enzyme';
import { sayHello, Block, MediaCss, Desktop } from '../dist';


describe('Distribution', () => {
  it('imports functions', () => {
    expect(sayHello()).toBe('Hello, Haz!');
    expect(sayHello('foo')).toBe('Hello, foo!');
  });

  it('imports React component', () => {
    const wrapper = render(<Block>Hello World</Block>);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('ui vertical segment')).toBe(true);
  });

  it('imports responsive utils', () => {
    expect(MediaCss).toBeTruthy();
    expect(Desktop).toBeTruthy();
  });
});
