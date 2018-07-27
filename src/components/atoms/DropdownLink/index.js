import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Dropdown } from 'semantic-ui-react';
import {mergeClassNames} from '../../..';

const DROPDOWNLINK_CLASS = 'dropdown-link';

const StyledDropdownItem = styled(Dropdown.Item)`
  &.item.link.fitted.${DROPDOWNLINK_CLASS} {
    padding: 0 !important;
    > a {
      width: 100%;
      display: inline-block;
      padding: .78571429em 1.14285714em;
      color: inherit;
      &:hover { color: inherit }
    }
  }
`;

const DropdownLink = ({ to, children, ...rest }) => {
  const dropdownItemProps = {...rest};
  dropdownItemProps.className = mergeClassNames([DROPDOWNLINK_CLASS, 'link', 'fitted'], rest.className);

  if (to) {
    return (
      <StyledDropdownItem {...dropdownItemProps}>
        <Link to={to}>{children}</Link>
      </StyledDropdownItem>
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
