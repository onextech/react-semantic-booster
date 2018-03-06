import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Menu as SuiMenu, Container } from 'semantic-ui-react';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';

const floatedClassName = 'floated';
const containerClassName = 'container';

const StyledMenu = styled(SuiMenu)`
  &.ui.menu.${containerClassName} {
    &:not(.tabular) { border: 0; }
    .menu.left .item:first-child > a { padding-left: 0; }
    .menu.right .item:last-child > a { padding-right: 0; }
    .menu.right .item:last-child { padding-right: 0; }
  }
  &.ui.menu.${floatedClassName} {
    position: absolute;
    z-index: 1;
    top: initial;
    bottom: initial;
  }
`;

const Menu = (props) => {
  // 1. Define custom props for this component
  const customProps = {
    floated: floatedClassName,
    container: containerClassName,
  };
  // 1.5. Define default props
  const defaultProps = {
    floated: false,
    container: false,
  };
  const allProps = { ...defaultProps, ...props };
  // 2. Render the custom class names
  const className = props &&
    getCustomClassName(customProps, allProps);
  // 3. Clean up custom props from main prop set to avoid prop clashing
  const semanticProps = props &&
    subtractObject({ ...defaultProps, ...customProps }, allProps);

  if (props.container) {
    return (
      <StyledMenu {...semanticProps} className={className}>
        <Container>{props.children}</Container>
      </StyledMenu>
    );
  }

  return (
    <StyledMenu {...semanticProps} className={className}>{props.children}</StyledMenu>
  );
};

Menu.propTypes = {
  container: PropTypes.bool,
  floated: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

Menu.Item = SuiMenu.Item;
Menu.Menu = SuiMenu.Menu;
Menu.Header = SuiMenu.Header;

export default Menu;
