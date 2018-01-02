import React from 'react';
import { render } from 'enzyme';
import { MemoryRouter as Router } from 'react-router-dom';
import { sayHello, Block, SiteNav } from '../dist/index';
import { menu, menuProps } from '../src/components/templates/SiteNav/index.story';


describe('Distribution', () => {
  it('imports functions', () => {
    expect(sayHello()).toBe('Hello, Haz!');
    expect(sayHello('foo')).toBe('Hello, foo!');
  });

  it('imports React component', () => {
    const wrapper = render(<Block>Hello World</Block>);
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('ui segment')).toBe(true);
  });

  it('renders styles', () => {
    const wrapper = render(<Router>
        <SiteNav menu={menu} menuProps={menuProps}>
          Hello World
        </SiteNav>
      </Router>);
    const button = wrapper.find('button.custom');
    console.log('button', button.attr('class'));
    expect(wrapper.is('div')).toBe(true);
    expect(wrapper.hasClass('ui segment')).toBe(true);
  });
});
