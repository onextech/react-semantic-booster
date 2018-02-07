import React from 'react';
import { render } from 'enzyme';
import { sayHello, Block, MediaCss, Desktop } from '../dist';
import { sayHello as sayHelloEs } from '../dist/es';


describe('Distribution', () => {
  it('imports functions', () => {
    expect(sayHello()).toBe('Hello, Haz!');
    expect(sayHello('foo')).toBe('Hello, foo!');
  });

  it('imports functions via es6', () => {
    expect(sayHelloEs()).toBe('Hello, Haz!');
    expect(sayHelloEs('foo')).toBe('Hello, foo!');
  });

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
