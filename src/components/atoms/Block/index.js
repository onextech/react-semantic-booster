import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

const backgroundClassName = 'background';
const angularClassName = 'angular';

const StyledBlock = styled(Segment)`
  // spacer
  &.ui.segment {
    &.attached { border: 0; }
    ${(props) => {
    const baseEmPadding = 5;
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
    return className.join(' ');
  };
  if (props.angular) {
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
    const getSvgFill = () => {
      const defaultFill = '#fff';
      let svgFill = defaultFill;
      if (props.secondary) { svgFill = '#f3f4f5'; /* default semantic-ui secondary color */ }
      if (props.inverted) { svgFill = '#1b1c1d'; /* default semantic-ui inverted color */ }
      return svgFill;
    };
    const svgFill = getSvgFill();
    return (
      <StyledBlock className={getClassName()} {...props}>
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
  return (<StyledBlock className={getClassName()} {...props} />);
};

Block.propTypes = {
  spacer: PropTypes.number,
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
      PropTypes.object,
    ]),
    bottom: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.object,
    ]),
  }),
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  secondary: PropTypes.bool,
  inverted: PropTypes.bool,
};

Block.defaultProps = {
  spacer: 1,
  background: undefined,
  angular: undefined,
};

export default Block;
