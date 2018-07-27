import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';

const StyledLink = styled(Link)`
  width: 100%;
  display: inline-block;
  padding: .78571429em 1.14285714em;
  line-height: 1;
  color: inherit;
  &:hover {
    color: inherit;
    background-color: rgba(0, 0, 0, .05);
  }
`;

const DropdownLink = ({ to, children, ...rest }) => {
  if (to) {
    return (
      <StyledLink to={to}>{children}</StyledLink>
    );
  }

  return (
    <Dropdown.Item {...rest}>{children}</Dropdown.Item>
  );
};

DropdownLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  to: PropTypes.string,
};

DropdownLink.defaultProps = {
  to: undefined,
};

export default DropdownLink;
