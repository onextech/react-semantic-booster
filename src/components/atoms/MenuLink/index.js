import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';

const MenuLink = ({ to, children, ...props }) => {
  const isHashLink = to.charAt(0) === '#';

  const StyledLink = styled(isHashLink ? HashLink : Link)`
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

  return (
    <Menu.Item link fitted {...props} style={{ padding: 0 }}>
      <StyledLink to={to}>{children}</StyledLink>
    </Menu.Item>
  );
};

MenuLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};

export default MenuLink;
