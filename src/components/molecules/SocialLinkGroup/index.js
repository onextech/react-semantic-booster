import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
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
        items.map(item => <a {...item.link} key={kebabCase(item.name)}>
          <Button {...item.btn}>
            <Icon {...item.icon} />
          </Button>
        </a>)
      }
    </StyledButtonGroup>
  );
};

SocialLinkGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.object, // <a> props
    btn: PropTypes.object, // semantic-ui button props
    icon: PropTypes.object, // semantic-ui icon props
  })).isRequired,
  groupProps: PropTypes.shape({
    borderless: PropTypes.bool, // custom: only works when basic: true
    // ... others, semantic-ui button group props
  }),
};

export default SocialLinkGroup;
