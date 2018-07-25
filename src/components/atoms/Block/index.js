import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';
import { setStyledSpacer, setCustomProps } from '../../../utils/helpers';

const backgroundClassName = 'background';
const angularClassName = 'angular';
const verticalAlignClassName = 'vertical-align';
const spacerClassName = 'spacer';
const heightClassName = 'height';
const pageCenterClassName = 'page-center';

const StyledBlock = styled(Segment)`
  // spacer
  &.ui.segment {
    &.attached { border: 0; }
    ${props => props.spacer && setStyledSpacer(props.spacer)}
  }
  
  // page-center
  &.ui.segment.${pageCenterClassName} {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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
    &.left { justify-content: flex-start; }
    &.center { justify-content: center; }
    &.right { justify-content: flex-end; }
  }
  
  // height
  &.ui.segment {
  ${({ height: rawHeight }) => {
    if (rawHeight) {
      const height = typeof rawHeight === 'number' ? `${rawHeight}px` : rawHeight;
      return `height: ${height}; min-height: ${height};`;
    }
    return false;
  }}
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
  margin-top: -10vw;
  `;

const BottomSvg = styled(AngularSvg)`
  bottom: 0;
  margin-bottom: -10vw;
  transform: rotate(180deg);
  `;

const Block = (rawProps) => {
  const props = setCustomProps(rawProps, {
    angular: { className: angularClassName, props: rawProps.angular },
    verticalAlign: { className: verticalAlignClassName, classProps: rawProps.verticalAlign },
    background: { className: backgroundClassName, props: rawProps.background },
    spacer: { className: spacerClassName, props: rawProps.spacer },
    height: { className: heightClassName, props: rawProps.height },
    pageCenter: pageCenterClassName,
  }, { vertical: true });

  const { angular } = props;
  if (angular) {
    const getSvgFill = () => {
      const defaultFill = '#fff';
      let svgFill = defaultFill;
      if (props.secondary) { svgFill = '#f3f4f5'; /* default semantic-ui secondary color */ }
      if (props.inverted) { svgFill = '#1b1c1d'; /* default semantic-ui inverted color */ }
      return svgFill;
    };
    const svgFill = getSvgFill();
    return (
      <StyledBlock {...props}>
        {angular.top && <TopSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill={`${angular.top.fill || svgFill}`} points="0,100 100,0 100,100" />
          </TopSvg>}
        {props.children}
        {angular.bottom && <BottomSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill={`${angular.bottom.fill || svgFill}`} points="0,100 100,0 100,100" />
          </BottomSvg>}
      </StyledBlock>
    );
  }

  return (<StyledBlock {...props} />);
};

Block.propTypes = {
  spacer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      top: PropTypes.number,
      bottom: PropTypes.number,
      left: PropTypes.number,
      right: PropTypes.number,
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
  height: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
};

Block.defaultProps = {
  spacer: 1,
  background: undefined,
  angular: undefined,
  verticalAlign: undefined,
  height: undefined,
};

export default Block;
