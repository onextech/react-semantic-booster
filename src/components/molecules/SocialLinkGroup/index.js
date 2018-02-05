import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import { kebabCase } from 'lodash';


const socialLinkGroupClassName = 'social-link-group';
const borderlessClassName = 'borderless';
const basicClassName = 'basic';

const StyledButtonGroup = styled(Button.Group)`
  &.ui.buttons.${socialLinkGroupClassName} {
  
    // borderless
    &.borderless {
      border: none;
      .button {
        &, &:hover, &:active, &:focus {
          box-shadow: none;
        }
      }
    }
    
  }
`;

const SocialLinkGroup = ({ items, groupProps }) => {
  const { borderless, ...btnGroupProps } = groupProps;

  const getClassName = () => {
    const className = [socialLinkGroupClassName];
    if (borderless) {
      className.push(borderlessClassName, basicClassName);
    }
    return className.join(' ');
  };

  return (
    <StyledButtonGroup className={getClassName()} icon {...btnGroupProps}>
      {
        items.map(item => <Link {...item.link} key={kebabCase(item.name)}>
          <Button {...item.btn}>
            <Icon {...item.icon} />
          </Button>
        </Link>)
      }
    </StyledButtonGroup>
  );
};

SocialLinkGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.object, // react-router-dom link props
    btn: PropTypes.object, // semantic-ui button props
    icon: PropTypes.object, // semantic-ui icon props
  })).isRequired,
  groupProps: PropTypes.shape({
    borderless: PropTypes.bool, // custom: only works when basic: true
    // ... others, semantic-ui button group props
  }),
};

export default SocialLinkGroup;
