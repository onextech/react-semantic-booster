import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';


const StyledDropdownLink = styled(Link)`
  width: 100%;
  padding: .78571429em 1.14285714em;
  color: inherit;
  &:hover {
    color: inherit;
  }
`;

const DropdownLink = ({
  onClick,
  to,
  children,
  ...rest
}) => (
  <Dropdown.Item className="fitted link" {...rest}>
    <StyledDropdownLink to={to} onClick={onClick}>
      {children}
    </StyledDropdownLink>
  </Dropdown.Item>
);

DropdownLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  to: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

DropdownLink.defaultProps = {
  onClick: undefined,
};

export default DropdownLink;
