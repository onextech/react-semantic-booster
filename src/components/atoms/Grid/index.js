import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid as suiGrid } from 'semantic-ui-react';
import GridColumn from './GridColumn';
import { verticalAlignFlexCssMap } from '../../../utils/constants';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';


const attachedClassName = 'attached';
const fluidClassName = 'fluid';

const StyledGrid = styled(suiGrid)`
  &.ui.grid.inverted {
    color: white;
  }
  &.ui.grid.${attachedClassName} > .row {
    padding-bottom: initial;
  }
  &.ui.grid.${fluidClassName} > .row > .column {
    &:not(:first-of-type) {
      padding-left: 0;
    }
    &:not(:last-of-type) {
      padding-right: 0;
    }
  }
`;

const Grid = (props) => {
  // 1. Define custom props for this component
  const customProps = {
    attached: attachedClassName,
    fluid: fluidClassName,
  };
  // 1.5. Define default props
  const defaultProps = {
    attached: false,
    fluid: false,
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
  fluid: PropTypes.bool,
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
