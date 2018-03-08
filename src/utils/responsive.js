/* eslint react/prop-types: 0 */
import React from 'react';
import { css } from 'styled-components';
import Responsive from 'react-responsive';


export const mediaCssBreakpoints = {
  xs: 480,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};

export const Desktop = ({ children }) => (
  <Responsive minWidth={mediaCssBreakpoints.md}>{children}</Responsive>
);

export const NotDesktop = ({ children }) => (
  <Responsive maxWidth={mediaCssBreakpoints.md}>{children}</Responsive>
);

export const Tablet = ({ children }) => (
  <Responsive minWidth={mediaCssBreakpoints.sm} maxWidth={mediaCssBreakpoints.md}>
    {children}
  </Responsive>
);

export const mobile = ({ children }) => (
  <Responsive maxWidth={mediaCssBreakpoints.sm}>{children}</Responsive>
);

export const Default = ({ children }) => (
  <Responsive minWidth={mediaCssBreakpoints.sm}>{children}</Responsive>
);

/**
 * Iterate through the mediaCssBreakpoints and create a media template
 * @link https://www.styled-components.com/docs/advanced#media-templates
 * @param {string} type
 * @return {{}}
 */
const mediaCssFactory = type => Object.keys(mediaCssBreakpoints).reduce((acc, label) => {
  acc[label] = (...args) => css`@media (${type}-width: ${mediaCssBreakpoints[label]}px) { ${css(...args)} }`;
  return acc;
}, {});

export const MediaCss = {
  max: mediaCssFactory('max'),
  min: mediaCssFactory('min'),
};
