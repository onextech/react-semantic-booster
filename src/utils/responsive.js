/* eslint react/prop-types: 0 */
import { css } from 'styled-components';


const sizes = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};

// export const Desktop = ({ children }) => <Responsive minWidth={sizes.md}>{children}</Responsive>;
// export const NotDesktop = ({ children }) =>
// <Responsive maxWidth={sizes.md}>{children}</Responsive>;
// export const Tablet = ({ children }) => (
//   <Responsive minWidth={sizes.sm} maxWidth={sizes.md}>{children}</Responsive>
// );
// export const mobile = ({ children }) => <Responsive maxWidth={sizes.sm}>{children}</Responsive>;
// export const Default = ({ children }) => <Responsive minWidth={sizes.sm}>{children}</Responsive>;

// Iterate through the sizes and create a media template
// @link https://www.styled-components.com/docs/advanced#media-templates
const mediaCssFactory = type => Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`@media (${type}-width: ${sizes[label]}px) { ${css(...args)} }`;
  return acc;
}, {});

// eslint-disable-next-line import/prefer-default-export
export const MediaCss = {
  max: mediaCssFactory('max'),
  min: mediaCssFactory('min'),
};
