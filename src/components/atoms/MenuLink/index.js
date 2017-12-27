import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';

const StyledMenuLink = styled(Link)`
  width: 100%;
  display: flex;
  padding: .92857143em 1.14285714em;
  color: inherit;
  &:hover {
    color: inherit;
  }
  &:hover, &:focus {
    text-decoration: none;
  }
`;

const MenuLink = ({ to, children, ...props }) => (
  <Menu.Item link fitted {...props}>
    <StyledMenuLink to={to}>{children}</StyledMenuLink>
  </Menu.Item>
);

MenuLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuLink;
