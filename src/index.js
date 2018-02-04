// @flow

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
export const sayHello = (name: string = 'Haz'): string => `Hello, ${name}!`;

// atoms
export { default as ButtonLink } from './components/atoms/ButtonLink';
export { default as MenuLink } from './components/atoms/MenuLink';
export { default as Block } from './components/atoms/Block';
export { default as Breadcrumbs } from './components/atoms/Breadcrumbs';

// molecules
export { default as VideoBackground } from './components/molecules/VideoBackground';
export { default as GoalCards } from './components/molecules/GoalCards';
export { default as PhotoCard } from './components/molecules/PhotoCard';

// organisms
export { default as Hero } from './components/organisms/Hero';

// templates
export { default as SiteNav } from './components/templates/SiteNav';
export { default as HomeTemplate } from './components/templates/HomeTemplate';

// utils
export * from './utils/responsive';
