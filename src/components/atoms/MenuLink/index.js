import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Menu } from 'semantic-ui-react';
import { HashLink } from 'react-router-hash-link';


const StyledLinkFactory = `
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

const StyledHashLink = styled(HashLink)`
  ${StyledLinkFactory}
`;

const StyledLink = styled(Link)`
  ${StyledLinkFactory}
`;

const StyledMenuItem = styled(Menu.Item)`
  padding: 0 !important;
`;

const MenuLink = ({
  onClick,
  to,
  children,
  link,
  ...rest
}) => {
  const isHashLink = to.charAt(0) === '#';
  if (isHashLink) {
    return (
      <StyledMenuItem link fitted {...rest}>
        <StyledHashLink to={to} {...link}>{children}</StyledHashLink>
      </StyledMenuItem>
    );
  }

  return (
    <StyledMenuItem
      className="menulink"
      link
      fitted
      {...rest}>
      <StyledLink onClick={onClick} to={to} {...link}>{children}</StyledLink>
    </StyledMenuItem>
  );
};

MenuLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  to: PropTypes.string.isRequired,
  link: PropTypes.object,
  onClick: PropTypes.func,
};

MenuLink.defaultProps = {
  link: undefined,
  onClick: undefined,
};

export default MenuLink;
