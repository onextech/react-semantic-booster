import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import './style.scss';


const StyledDropdownLink = styled(Link)`
  width: 100%;
  padding: .78571429em 1.14285714em;
  color: inherit;
  &:hover {
    color: inherit;
  }
`;

const DropdownLink = ({ to, children, ...props }) => (
  <Dropdown.Item className="fitted link" {...props}>
    <StyledDropdownLink to={to}>{children}</StyledDropdownLink>
  </Dropdown.Item>
);

DropdownLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};

export default DropdownLink;
