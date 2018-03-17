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
      overflow: hidden;
    }
    .${sidebarClassName} {
      width: 0%;
      position: relative;
      float: left;
      top: 0;
      left: 0;
      max-height: 100%;
      overflow: auto;
      transition: width .3s ease-out;
    }
    .${contentClassName} {
      width: 100%;
      position: relative;
      float: right;
      top: 0;
      right: 0;
      transition: width .3s ease-out;
    }
    
    // Visible
    &.${visibleClassName} {
      .${sidebarClassName} {
        ${props => props.sidebarPercentageWidth && `width: ${props.sidebarPercentageWidth}%;`}
        ${props => props.sidebarMaxWidth && `max-width: ${props.sidebarMaxWidth};`}
        position: initial;
        transition: width .3s ease-out;
      }
      .${contentClassName} {
        ${props => props.sidebarPercentageWidth && `width: calc(100% - ${props.sidebarPercentageWidth}%);`}
        ${props => props.sidebarMaxWidth && `min-width: calc(100% - ${props.sidebarMaxWidth});`}
        transition: width .3s ease-out;
      }
    }
    
    // Mobile only
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
          height: 100%;
        }  
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
      sidebarPercentageWidth,
      sidebarMaxWidth,
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
      sidebarPercentageWidth,
      sidebarMaxWidth,
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
        <Menu attached>
          <Menu.Item>
            <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
          </Menu.Item>
          {menuItems}
        </Menu>
        <Responsive maxWidth={mediaCssBreakpoints.sm} fireOnMount onUpdate={this.handleMobileResize} />
        <Responsive minWidth={mediaCssBreakpoints.sm} fireOnMount onUpdate={this.handleDesktopResize} />
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
  sidebarPercentageWidth: PropTypes.number, // in percentage only e.g. 20, 30
  sidebarMaxWidth: PropTypes.string,
};

MenuContentCombo.defaultProps = {
  sidebarPercentageWidth: 25,
  sidebarMaxWidth: '200px',
};


export default MenuContentCombo;
