import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from '../../atoms/Header/index';
import { sizes } from '../../../utils/constants';

/**
 * Calculate scale based on y = ax2 + bx + c
 * @link https://www.desmos.com/calculator/zukjgk9iry
 * @param {number} size - The x value
 * @return {number} - The y value
 */
const getEmSizeScale = size => (0.083 * (size ** 2)) + 0.5;

const ContentContainer = styled.div`
  width: 100%;
  .sub.header + .header {
    margin-top: .3em;
  }
  .header + p {
    margin-top: .6em;
  }
  .header {
    margin-bottom: 0;
  }
  p, .ui.list > .item {
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
  ${({ color }) => color && `color: ${color};`}
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
  &.ui.header.sub {
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
  <ContentContainer className="copy" {...rest}>
    {subheader && <ContentSubheader as="h6" sub size="tiny" {...subheader} />}
    {header && <ContentHeader as="h5" size="huge" {...header} />}
    {body && <p>{body}</p>}
    {content}
  </ContentContainer>
);

Copy.propTypes = {
  textAlign: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(sizes),
  subheader: PropTypes.object, // sui header props
  header: PropTypes.object, // sui header props
  body: PropTypes.string,
  content: PropTypes.element,
};

export default Copy;
