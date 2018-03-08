import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { countArrayLessUndefinedItems } from '@onextech/react-apollo-utils';


const hasManyChildren = props => countArrayLessUndefinedItems(props.children.props.children) > 1;
const Wrapper = styled(Button)`
  &.ui.button {
    padding: 0 !important;
    overflow: hidden;
    a {
      display: inline-block;  
      padding: ${props => (hasManyChildren(props) ? '.78571429em 1.5em' : '.78571429em')};
      color: inherit;
      &:hover, &:focus {
        text-decoration: none;
      }
      .icon {
        margin-right: ${props => (hasManyChildren(props) ? '.25rem' : '0')};
      }
    }
  }
`;

const ButtonLink = ({
  onClick,
  to,
  icon,
  content,
  ...rest
}) => (<Wrapper {...rest}>
  <Link to={to} onClick={onClick}>
    {icon && <Icon name={icon} />}
    {content}
  </Link>
</Wrapper>);

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  content: PropTypes.string,
  onClick: PropTypes.func,
};

ButtonLink.defaultProps = {
  icon: undefined,
  content: undefined,
  onClick: undefined,
};

export default ButtonLink;
