// @flow

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const sayHello = (name: string = 'Haz'): string => `Hello, ${name}!`;

export default sayHello;

// atoms
export { default as ButtonLink } from './components/atoms/ButtonLink';
export { default as MenuLink } from './components/atoms/MenuLink';
export { default as Block } from './components/atoms/Block';
export { default as Breadcrumbs } from './components/atoms/Breadcrumbs';

// organisms
export { default as Hero } from './components/organisms/Hero';

// templates
export { default as Site } from './components/templates/Site';
export { default as HomeTemplate } from './components/templates/HomeTemplate';
