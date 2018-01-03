import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';

const MenuLink = ({
  to, children, linkProps, ...props
}) => {
  const isHashLink = to.charAt(0) === '#';

  const StyledLink = styled(isHashLink ? HashLink : Link)`
    width: 100%;
    display: flex;
    padding: ${p => (p.custom && p.custom.basic ? 0 : '.92857143em 1.14285714em')};
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
      <StyledLink to={to} custom={linkProps}>{children}</StyledLink>
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
  linkProps: PropTypes.object,
};

MenuLink.defaultProps = {
  linkProps: undefined,
};

export default MenuLink;
