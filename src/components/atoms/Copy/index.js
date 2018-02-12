import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Header } from 'semantic-ui-react';
import { sizes } from '../../../utils/constants';

/**
 * Calculate scale based on y = ax2 + bx + c
 * @link https://www.desmos.com/calculator/zukjgk9iry
 * @param {number} size - The x value
 * @return {number} - The y value
 */
const getEmSizeScale = size => (0.083 * (size ** 2)) + 0.5;

const ContentContainer = styled.div`
  .sub.header + .header {
    margin-top: .1em;
  }
  .header {
    margin-bottom: 0;
  }
  p {
    line-height: 1.6;
  }
  ${({ textAlign }) => textAlign && `text-align: ${textAlign};`}
  ${({ size }) => {
    if (size) {
      const found = sizes.indexOf(size);
      return `
        font-size: ${getEmSizeScale(found)}em;
        .ui.header {
          line-height: ${1.2 - (found * 0.033)};
        }
        p {
          line-height: ${1.6 - (found * 0.067)}; 
        }
      `;
    }
    return false;
  }}
  `;

const ContentHeader = styled(Header)`
  &.ui.header {
    width: 100%;
    opacity: 0.95;
    &:only-child {
      margin-bottom: 0;
    }
  }
  `;

const ContentSubheader = styled(Header)`
  &.ui.header {
    opacity: 0.86;
    letter-spacing: 1px;
  }
  `;

const Copy = ({
  subheader,
  header,
  body,
  content,
  ...rest
}) => (
  <ContentContainer {...rest}>
    {subheader && <ContentSubheader as="h6" sub size="tiny" {...subheader} />}
    {header && <ContentHeader as="h5" size="huge" {...header} />}
    <p>{body}</p>
    {content}
  </ContentContainer>
);

Copy.propTypes = {
  textAlign: PropTypes.string,
  size: PropTypes.oneOf(sizes),
};

export default Copy;
