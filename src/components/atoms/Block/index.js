import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';
import { isPlainObject } from 'lodash';

const backgroundClassName = 'background';
const angularClassName = 'angular';
const verticalAlignClassName = 'vertical-align';

const StyledBlock = styled(Segment)`
  // spacer
  &.ui.segment {
    &.attached { border: 0; }
    ${(props) => {
    const baseEmPadding = 5;
    if (isPlainObject(props.spacer)) {
      const topSpacer = props.spacer.top * baseEmPadding || null;
      const bottomSpacer = props.spacer.bottom * baseEmPadding || null;
      const result = [];
      if (topSpacer) {
        result.push(`padding-top: ${topSpacer}em;`);
      }
      if (bottomSpacer) {
        result.push(`padding-bottom: ${bottomSpacer}em;`);
      }
      return result.join(' ');
    }
    return `padding: ${baseEmPadding * props.spacer}em 0`;
  }}
  }
  
  // background
  ${(props) => {
    if (props.background) {
      const {
        src,
        repeat,
        position,
        opacity,
        fromColor,
        toColor,
        size,
        attachment,
      } = props.background;
      const defaultOpacity = 0.8;
      const linearOpacity = opacity || defaultOpacity;
      // eslint-disable-next-line
      const defaultLinearColor = 'rgba(0,0,0,' + linearOpacity + ')';
      const linearFrom = fromColor || defaultLinearColor;
      const linearTo = toColor || defaultLinearColor;
      return `
        &.ui.segment.${backgroundClassName} {
          background: linear-gradient(${linearFrom}, ${linearTo}), url('${src}');
          background-position: ${position || 'center'};
          background-repeat: ${repeat || 'no-repeat'};
          background-size: ${size || 'cover'};
          background-attachment: ${attachment || 'scroll'};
        }`;
    }
    return false;
  }}
  
  // vertical-align
  &.ui.segment.${verticalAlignClassName} {
    display: flex;
    &.top { align-items: flex-start; }
    &.middle { align-items: center; }
    &.bottom { align-items: flex-end; }
  }
  
  `;
/**
 * Create an angular block
 * @link https://css-tricks.com/creating-non-rectangular-headers/
 */
const AngularSvg = styled.svg`
  position: absolute;
  left: 0;
  width: 100%;
  height: 10vw;
  z-index: 1;
  `;
const TopSvg = styled(AngularSvg)`
  top: 0;
  margin-top: -10.1%;
  `;

const BottomSvg = styled(AngularSvg)`
  bottom: 0;
  margin-bottom: -10.1%;
  transform: rotate(180deg);
  `;

const Block = ({ ...props }) => {
  const getClassName = () => {
    const className = [];
    if (props.background) {
      className.push(backgroundClassName);
    }
    if (props.angular) {
      className.push(angularClassName);
    }
    if (props.verticalAlign) {
      className.push(verticalAlignClassName, props.verticalAlign);
    }
    return className.join(' ');
  };
  // separate custom from semantic props
  let semanticSegmentProps = {};
  if (props) {
    const {
      verticalAlign, ...rest
    } = props;
    semanticSegmentProps = rest;
  }

  if (props.angular) {
    const getSvgFill = () => {
      const defaultFill = '#fff';
      let svgFill = defaultFill;
      if (props.secondary) { svgFill = '#f3f4f5'; /* default semantic-ui secondary color */ }
      if (props.inverted) { svgFill = '#1b1c1d'; /* default semantic-ui inverted color */ }
      return svgFill;
    };
    const svgFill = getSvgFill();
    return (
      <StyledBlock className={getClassName()} {...semanticSegmentProps}>
        {props.angular.top && <TopSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill={`${props.angular.top.fill || svgFill}`} points="0,100 100,0 100,100" />
          </TopSvg>}
        {props.children}
        {props.angular.bottom && <BottomSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill={`${props.angular.bottom.fill || svgFill}`} points="0,100 100,0 100,100" />
          </BottomSvg>}
      </StyledBlock>
    );
  }
  // default
  return (<StyledBlock className={getClassName()} {...semanticSegmentProps} />);
};

Block.propTypes = {
  spacer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      top: PropTypes.number,
      bottom: PropTypes.number,
    }),
  ]),
  background: PropTypes.shape({
    src: PropTypes.string.isRequired,
    repeat: PropTypes.string,
    position: PropTypes.string,
    opacity: PropTypes.number,
    fromColor: PropTypes.string, // 'rgba(0,0,0,0.5)'
    toColor: PropTypes.string, // 'rgba(0,0,0,0.8)'
    size: PropTypes.string,
    attachment: PropTypes.string,
  }),
  angular: PropTypes.shape({
    top: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        fill: PropTypes.string,
      }),
    ]),
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.shape({
        fill: PropTypes.string,
      }),
    ]),
  }),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  secondary: PropTypes.bool,
  inverted: PropTypes.bool,
  verticalAlign: PropTypes.string,
};

Block.defaultProps = {
  spacer: 1,
  background: undefined,
  angular: undefined,
  verticalAlign: undefined,
};

export default Block;
