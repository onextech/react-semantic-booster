// @flow
export { default as ButtonLink } from './components/atoms/ButtonLink';

/**
 * This function says hello.
 * @param name Some name to say hello for.
 * @returns The hello.
 */
const sayHello = (name: string = 'Haz'): string => `Hello, ${name}!`;

export default sayHello;
