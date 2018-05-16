import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, Menu, Button, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';
import { MediaCss, mediaCssBreakpoints } from '../../../utils/responsive';


const visibleClassName = 'visible';
const containerClassName = 'container';
const sidebarClassName = 'sidebar';
const contentClassName = 'content';
const mobileClassName = 'mobile';
const menuClassName = 'toggle-menu';

const Wrapper = styled.div`
  & {
    height: 100%;
    .${menuClassName} {
      a.item { height: 100% }
      ${MediaCss.max.sm`overflow-x: auto;`}   
    }
    .${containerClassName} {
      width: 100%;
      height: 100%;
      display: flex;
      flex: 1;
      position: relative;
      overflow: hidden;
      > .${sidebarClassName} {
        width: 0;
        position: relative;
        float: left;
        top: 0;
        left: 0;
        max-height: 100%;
        overflow: auto;
        transition: width .3s ease-out;
      }
      > .${contentClassName} {
        width: 100%;
        position: relative;
        float: right;
        top: 0;
        right: 0;
        transition: width .3s ease-out;
      }
    }
    
    // Visible
    &.${visibleClassName} .${containerClassName} {
      > .${sidebarClassName} {
        ${props => props.sidebarProps.percentageWidth && `width: ${props.sidebarProps.percentageWidth}%;`}
        ${props => props.sidebarProps.maxWidth && `max-width: ${props.sidebarProps.maxWidth};`}
        position: initial;
        transition: width .3s ease-out;
      }
      > .${contentClassName} {
        ${props => props.sidebarProps.percentageWidth && `width: calc(100% - ${props.sidebarProps.percentageWidth}%);`}
        ${props => props.sidebarProps.maxWidth && `min-width: calc(100% - ${props.sidebarProps.maxWidth});`}
        transition: width .3s ease-out;
      }
    }
    
    // Mobile
    &.${mobileClassName} {
      .${sidebarClassName} {
        position: absolute;
        z-index: 1;
        background-color: white;
        box-shadow: 10px 0px 17px -8px rgba(0,0,0,0.25);
      }
      &.${visibleClassName} {
        .${sidebarClassName} {
          width: 50%;
        }  
      }
    }
  }
`;

class Sider extends React.Component {
  state = {
    visible: true,
    mobile: false,
  }

  toggleVisibility = () => {
    const state = { visible: !this.state.visible };
    this.setState(state);
  }

  handleDesktopResize = (e, { width, minWidth }) => {
    if (width < minWidth) {
      this.setState({ visible: false, mobile: true });
    }
  }
  handleMobileResize = (e, { width, maxWidth }) => {
    if (width > maxWidth) {
      this.setState({ visible: true, mobile: false });
    }
  }

  render() {
    const { visible, mobile } = this.state;
    const {
      sidebar,
      children,
      menuItems,
      sidebarProps,
      toggleProps,
      ...props
    } = this.props;

    // 1. Define custom props for this component
    const classProps = {
      visible: visibleClassName,
      mobile: mobileClassName,
    };
    // 1.5. Define default props
    const defaultProps = {
      visible,
      mobile,
    };
    const customProps = {
      visible,
      mobile,
      sidebarProps,
    };
    const allProps = { ...defaultProps, ...props };
    // 2. Render the custom class names
    const className = props &&
      getCustomClassName(classProps, allProps);
    // 3. Clean up custom props from main prop set to avoid prop clashing
    const semanticProps = props &&
      subtractObject({ ...defaultProps, ...classProps }, allProps);

    return (
      <Wrapper {...semanticProps} {...customProps} className={className}>
        <Menu attached className={menuClassName}>
          <Responsive
            maxWidth={mediaCssBreakpoints.sm}
            fireOnMount
            onUpdate={this.handleMobileResize}>
            <Menu.Item onClick={this.toggleVisibility}>
              <Icon name={toggleProps.icon} />
              {toggleProps.mobileName || toggleProps.name}
            </Menu.Item>
          </Responsive>
          <Responsive
            minWidth={mediaCssBreakpoints.sm}
            fireOnMount
            onUpdate={this.handleDesktopResize}>
            <Menu.Item>
              <Button
                content={toggleProps.name}
                icon={{ name: toggleProps.icon }}
                onClick={this.toggleVisibility}
                {...toggleProps.button}/>
            </Menu.Item>
          </Responsive>
          {menuItems}
        </Menu>
        <div className={containerClassName}>
          <div className={sidebarClassName}>{sidebar}</div>
          <div className={contentClassName}>{children}</div>
        </div>
      </Wrapper>
    );
  }
}

Sider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  sidebar: PropTypes.element.isRequired,
  sidebarProps: PropTypes.shape({
    percentageWidth: PropTypes.number, // in percentage only e.g. 20, 30
    maxWidth: PropTypes.string,
  }),
  toggleProps: PropTypes.shape({
    name: PropTypes.string,
    mobileName: PropTypes.string,
    icon: PropTypes.string,
    button: PropTypes.object, // sui button props
  }),
  menuItems: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
};

Sider.defaultProps = {
  sidebarProps: {
    percentageWidth: 25,
    maxWidth: '200px',
  },
  toggleProps: {
    name: 'Toggle Navigation',
    nameMobile: '',
    icon: 'content',
    button: {
      primary: false,
    },
  },
};

export default Sider;
