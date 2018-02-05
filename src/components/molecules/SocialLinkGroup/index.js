import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button, Icon } from 'semantic-ui-react';
import { kebabCase } from 'lodash';


const socialLinkGroupClassName = 'social-link-group';
const borderlessClassName = 'borderless';

const StyledButtonGroup = styled(Button.Group)`
  &.ui.buttons.${socialLinkGroupClassName} {
  
    &:not(.basic) {
      .button {
        border-radius: 0;
      }
    }
  
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

const TextSpan = styled.span`
  margin-left: .25em;
  margin-right: .4em;
`;

const SocialLinkGroup = ({ items, groupProps }) => {
  const getClassName = () => {
    const className = [socialLinkGroupClassName];
    if (groupProps && groupProps.borderless) {
      className.push(borderlessClassName);
    }
    return className.join(' ');
  };

  // separate custom from semantic props
  let semanticButtonGroupProps = {};
  if (groupProps) {
    const { borderless, ...rest } = groupProps;
    semanticButtonGroupProps = rest;
  }

  return (
    <StyledButtonGroup className={getClassName()} icon {...semanticButtonGroupProps}>
      {
        items.map(item => <a {...item.link} key={kebabCase(item.name)}>
          <Button {...item.btn}>
            <Icon {...item.icon} />
            {item.text && <TextSpan>{item.text}</TextSpan>}
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
    text: PropTypes.string,
  })).isRequired,
  groupProps: PropTypes.shape({
    borderless: PropTypes.bool, // custom: only works when basic: true
    // ... others, semantic-ui button group props
  }),
};

export default SocialLinkGroup;
