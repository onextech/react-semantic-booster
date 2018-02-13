import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid as suiGrid } from 'semantic-ui-react';
import { verticalAlignFlexCssMap } from '../../../utils/constants';
import { MediaCss } from '../../../utils/responsive';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';

const attachedClassName = 'attached';

const StyledGrid = styled(suiGrid)`
  &.ui.grid.inverted {
    color: white;
  }
  &.ui.grid.${attachedClassName} > .row {
    padding-bottom: initial;
  }
`;

const ColumnContainer = styled.div`
  width: 75%;
  margin: 0 auto;
  padding: 3em 0;
  p { line-height: 1.6; }
  `;

const StyledColumn = styled(suiGrid.Column)`
  ${MediaCss.min.sm`height: 100%;`}
  display: flex;
  font-size: 120%;
  
  // Fix for column verticalAlign with the addition of .container element
  ${({ verticalAlign }) => {
    if (verticalAlign) {
      const vaCssValue = verticalAlignFlexCssMap[verticalAlign];
      return `
        &.column.aligned.${verticalAlign} .container {
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
  `;

const GridColumn = props => (
  <StyledColumn {...props}>
    <ColumnContainer className="container">
      {props.children}
    </ColumnContainer>
  </StyledColumn>
);

GridColumn.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

const Grid = (props) => {
  // 1. Define custom props for this component
  const customProps = {
    attached: attachedClassName,
  };
  // 1.5. Define default props
  const defaultProps = {
    attached: false,
  };
  const allProps = { ...defaultProps, ...props };
  // 2. Render the custom class names
  const className = props &&
    getCustomClassName(customProps, allProps);
  // 3. Clean up custom props from main prop set to avoid prop clashing
  const semanticProps = props &&
    subtractObject({ ...defaultProps, ...customProps }, allProps);

  return (
    <StyledGrid {...semanticProps} className={className} />
  );
};

Grid.Row = suiGrid.Row;
Grid.Column = GridColumn;

Grid.propTypes = {
  attached: PropTypes.bool,
  verticalAlign: PropTypes.oneOf(Object.keys(verticalAlignFlexCssMap)),
  background: PropTypes.shape({
    src: PropTypes.string,
    repeat: PropTypes.string,
    position: PropTypes.string,
    opacity: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
    fromColor: PropTypes.string,
    toColor: PropTypes.string,
    size: PropTypes.string,
    attachment: PropTypes.string,
    color: PropTypes.string,
    overlay: PropTypes.bool,
  }),
};

export default Grid;
