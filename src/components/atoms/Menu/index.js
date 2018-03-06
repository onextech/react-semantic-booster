import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Menu as SuiMenu, Container } from 'semantic-ui-react';
import { getCustomClassName, subtractObject, setStyledSpacer } from '../../../utils/helpers';


const floatClassName = 'float';
const containerClassName = 'container';
const spacerClassName = 'spacer';

const StyledMenu = styled(SuiMenu)`
  &.ui.menu.${containerClassName} {
    &:not(.tabular) { border: 0; }
    .menu.left .item:first-child > a { padding-left: 0; }
    .menu.right .item:last-child > a { padding-right: 0; }
    .menu.right .item:last-child { padding-right: 0; }
  }
  &.ui.menu.${floatClassName} {
    position: absolute;
    z-index: 1;
    top: initial;
    bottom: initial;
  }
  ${props => props.spacer && setStyledSpacer(props.spacer, 1)}
`;

const Menu = (props) => {
  // 1. Define custom props for this component
  const classProps = {
    float: floatClassName,
    container: containerClassName,
    spacer: spacerClassName,
  };
  // 1.5. Define default props
  const defaultProps = {
    float: false,
    container: false,
    spacer: 1,
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

  if (props.container) {
    return (
      <StyledMenu {...semanticProps} {...customProps} className={className}>
        <Container>{props.children}</Container>
      </StyledMenu>
    );
  }

  return (
    <StyledMenu {...semanticProps} {...customProps} className={className}>
      {props.children}
    </StyledMenu>
  );
};

Menu.propTypes = {
  spacer: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      top: PropTypes.number,
      bottom: PropTypes.number,
    }),
  ]),
  container: PropTypes.bool,
  float: PropTypes.bool,
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
