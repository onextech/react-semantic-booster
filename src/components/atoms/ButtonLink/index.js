import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { countArrayLessUndefinedItems } from '@onextech/react-apollo-utils';


const hasManyChildren = props => countArrayLessUndefinedItems(props.children.props.children) > 1;
const ButtonLinkFactory = styled(Button)`
  &.ui.button {
    padding: 0;
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
  to, icon, content, ...props
}) => (<ButtonLinkFactory {...props}>
  <Link to={to}>
    {icon && <Icon name={icon} />}
    {content}
  </Link>
</ButtonLinkFactory>);

ButtonLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
  content: PropTypes.string,
};

ButtonLink.defaultProps = {
  icon: undefined,
  content: undefined,
};

export default ButtonLink;
