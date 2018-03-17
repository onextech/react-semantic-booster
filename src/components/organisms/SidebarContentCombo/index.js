import React from 'react';
import PropTypes from 'prop-types';
import { Responsive, Menu, Button } from 'semantic-ui-react';
import styled from 'styled-components';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';
import { mediaCssBreakpoints } from '../../../utils/responsive';


const visibleClassName = 'visible';
const containerClassName = 'container';
const sidebarClassName = 'sidebar';
const contentClassName = 'content';
const mobileClassName = 'mobile';

const Wrapper = styled.div`
  & {
    .${containerClassName} {
      width: 100%;
      position: relative;
    }
    .${sidebarClassName} {
      width: 0%;
      position: absolute;
      top: 0;
      left: 0;
      transition: width .3s ease-out;
    }
    .${contentClassName} {
      width: 100%;
      position: absolute;
      top: 0;
      right: 0;
      transition: width .3s ease-out;
    }
    &.${visibleClassName} {
      .${sidebarClassName} {
        width: 20%;
        position: initial;
        transition: width .3s ease-out;
      }
      .${contentClassName} {
        width: 80%;
        transition: width .3s ease-out;
      }
    }
    
    // Mobile
    &.${visibleClassName}.${mobileClassName} {
      .${sidebarClassName} {
        width: 100%;
        height: 100vh;
        position: absolute;
        z-index: 1;
        background-color: rgba(255, 255, 255, 0.85);
      }
    }
  }
`;

class MenuContentCombo extends React.Component {
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
      menuProps,
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
        <Menu attached menuProps={menuProps}>
          <Menu.Item>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
          </Menu.Item>
          {menuItems}
        </Menu>
        <Responsive maxWidth={mediaCssBreakpoints.sm} onUpdate={this.handleMobileResize} />
        <Responsive minWidth={mediaCssBreakpoints.sm} onUpdate={this.handleDesktopResize} />
        <div className={containerClassName}>
          <div className={sidebarClassName}>{sidebar}</div>
          <div className={contentClassName}>{children}</div>
        </div>
      </Wrapper>
    );
  }
}

MenuContentCombo.propTypes = {
  sidebar: PropTypes.element,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
  menuItems: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]),
  menuProps: PropTypes.object, // sui menu props
};


export default MenuContentCombo;
