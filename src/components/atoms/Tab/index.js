import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Tab as SuiTab } from 'semantic-ui-react';
import { getCustomClassName, subtractObject, setStyledSpacer } from '../../../utils/helpers';


const basicClassName = 'basic';
const justifyClassName = 'justify';
const angularClassName = 'angular';
const secondaryClassName = 'secondary';
const subtleClassName = 'subtle';
const spacerClassName = 'spacer';

const StyledTab = styled(SuiTab)`
  &.${basicClassName} {
    .tab { padding: 0; }
    .segment { border: 0; }
    .ui.menu {
      border: 0;
      .item { margin: 0; }
    }
  }
  &.${justifyClassName} {
    .ui.menu {
      display: flex;
      justify-content: space-between;
      .item { flex-grow: 1; }
    }
  }
  &.${angularClassName} {
    .ui.menu .item { border-radius: 0; }
  }
  &.${secondaryClassName} {
    .ui.menu .item {
      color: grey;
      &.active { color: inherit; } 
    }
  }
  &.${subtleClassName} {
    .ui.menu .item:not(.active) {
      transition: color .75s;
      &:hover {
        background-color: inherit;
      }
    }
  }
  ${({ spacer }) => {
    if (spacer) {
      return `
        &.${spacerClassName} .ui.menu .item {
          ${setStyledSpacer(spacer, 1)}
        }
      `;
    }
    return false;
  }}
  `;

const Tab = (props) => {
  // 1. Define custom props for this component
  const classProps = {
    basic: basicClassName,
    justify: justifyClassName,
    angular: angularClassName,
    secondary: secondaryClassName,
    subtle: subtleClassName,
    spacer: spacerClassName,
  };
  // 1.5. Define default props
  const defaultProps = {
    basic: false,
    justify: false,
    angular: false,
    secondary: false,
    subtle: false,
    spacer: 0,
  };
  const customProps = {
    spacer: props.spacer,
  };

  const allProps = { ...defaultProps, ...props };
  // 2. Render the custom class names
  const className = props &&
    getCustomClassName(classProps, allProps);
  // 3. Clean up custom props from main prop set to avoid prop clashing
  const semanticProps = props &&
    subtractObject({ ...defaultProps, ...classProps }, allProps);

  return (
    <StyledTab {...semanticProps} {...customProps} className={className} />
  );
};

Tab.propTypes = {
  basic: PropTypes.bool,
  justify: PropTypes.bool,
  angular: PropTypes.bool,
  secondary: PropTypes.bool,
  subtle: PropTypes.bool,
  spacer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      top: PropTypes.number,
      bottom: PropTypes.number,
    }),
  ]),
};

Tab.Pane = SuiTab.Pane;

export default Tab;

