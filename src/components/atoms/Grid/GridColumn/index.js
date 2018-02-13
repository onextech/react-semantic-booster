import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid as suiGrid } from 'semantic-ui-react';
import { verticalAlignFlexCssMap } from '../../../../utils/constants';
import { MediaCss } from '../../../../utils/responsive';
import { getCustomClassName, subtractObject } from '../../../../utils/helpers';


const paddedClassName = 'padded';
const containerClassName = 'container';

const StyledColumn = styled(suiGrid.Column)`
  ${MediaCss.min.sm`height: 100%;`}
  display: flex;
  font-size: 120%;
  
  // Fix for column verticalAlign with the addition of the container element
  ${({ verticalAlign }) => {
    if (verticalAlign) {
      const vaCssValue = verticalAlignFlexCssMap[verticalAlign];
      return `
        &.column.aligned.${verticalAlign} .${containerClassName} {
          height: 100%;
          display: flex;
          align-items: ${vaCssValue};
        }
      `;
    }
    return false;
  }}
  
  // background
  ${({ background }) => {
    if (background) {
      const {
        src,
        repeat,
        position,
        opacity,
        fromColor,
        toColor,
        size,
        attachment,
        color,
        overlay = true,
      } = background;
      const defaultOpacity = 0.8;
      const linearOpacity = overlay ? (opacity || defaultOpacity) : 0;
      const defaultLinearColor = 'rgba(0,0,0,' + linearOpacity + ')'; // eslint-disable-line
      const linearFrom = fromColor || defaultLinearColor;
      const linearTo = toColor || defaultLinearColor;
      return `
        &.column {
          background-color: ${color || 'black'};
          ${src && `
            background: linear-gradient(${linearFrom}, ${linearTo}), url('${src}');
            background-position: ${position || 'center'};
            background-repeat: ${repeat || 'no-repeat'};
            background-size: ${size || 'cover'};
            background-attachment: ${attachment || 'scroll'};`}
        }`;
    }
    return false;
  }}
  
  // padded
  &.${paddedClassName} .${containerClassName} {
    width: 75%;
    margin: 0 auto;
    padding: 5em 0;
    p { line-height: 1.6; } 
  }
  `;

const GridColumn = (props) => {
  // 1. Define custom props for this component
  const customProps = {
    padded: paddedClassName,
  };
  // 1.5. Define default props
  const defaultProps = {
    padded: false,
  };
  const allProps = { ...defaultProps, ...props };
  // 2. Render the custom class names
  const className = props &&
    getCustomClassName(customProps, allProps);
  // 3. Clean up custom props from main prop set to avoid prop clashing
  const semanticProps = props &&
    subtractObject({ ...defaultProps, ...customProps }, allProps);

  return (
    <StyledColumn {...semanticProps} className={className}>
      <div className={containerClassName}>
        {props.children}
      </div>
    </StyledColumn>
  );
};

GridColumn.propTypes = {
  padded: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

export default GridColumn;
