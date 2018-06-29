import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Sidebar, Dropdown, Responsive, Dimmer, Image } from 'semantic-ui-react';
import MenuLink from '../../atoms/MenuLink';
import DropdownLink from '../../atoms/DropdownLink';
import ButtonLink from '../../atoms/ButtonLink';
import Menu from '../../atoms/Menu';
import { mediaCssBreakpoints } from '../../../utils/responsive';


const SidebarPushable = styled(Sidebar.Pushable)`
  /* Button */
  .ui.menu.vertical .ui.button {
    width: 100%;
  }
  
  /* Fix for button padding in SUI menus */
  .ui.menu:not(.vertical) .item>.button.custom {
    padding-top: 0;
    padding-bottom: 0;
  }
  
  /* Dropdown */
  .ui.menu .ui.dropdown .menu>.item.fitted.link {
    display: flex;
    padding: 0 !important;
    a {
      color: inherit;
      &:focus, &:hover {
        text-decoration: none;
      }
    }
  }
  
  // Fix for dropdown link in  menu
  .inverted.ui.menu .ui.dropdown .menu > .item.fitted.link a {
    color: rgba(0,0,0,.87);
  }
  
  // Fix for dropdown text alignment in vertical menu
  .ui.menu.vertical .ui.item.dropdown {
    text-align: left;
  }
  
  /* Fix for dropdown menu not showing in sidebar due to SUI */
  .ui.sidebar {
    overflow-y: initial !important;
  }
  
  /* Sidebar */
  // Fix for menu items not positioned correctly
  .ui.secondary.pointing.menu .item {
    align-self: center;
  }
    
  // Fix for removing padding-left on hamburger icon in secondary menu only only
  .ui.secondary.pointing.menu:not(.sidebar) {
    .ui.item.dropdown[role="listbox"] {
        padding-left: 0;
    }
    .right, .left {
      .ui.item.dropdown[role="listbox"] {
        padding-left: 1.14286em;
      }
    }
  }
`;


class SiteNav extends React.Component {
  state = {}

  toggleSidebar = () => this.setState({ showSidebar: !this.state.showSidebar })

  handleDimmerClick = () => this.setState({ showSidebar: false });

  renderMenuItems = (items, isMobile = false) => {
    const result = [];

    const defaultMenuLinkProps = {};
    if (isMobile) {
      defaultMenuLinkProps.onClick = this.toggleSidebar;
    }

    items.map((item) => {
      // default menu item type
      let jsx = (
        <MenuLink
          to={item.to || '/'}
          key={kebabCase(item.name)}
          {...defaultMenuLinkProps}>
          {item.name}
        </MenuLink>
      );
      // render other menu item types
      switch (true) {
        case Boolean(item.image):
          jsx = (
            <MenuLink
              to={item.to}
              key={kebabCase(item.name)}
              {...defaultMenuLinkProps}>
              <Image {...item.image} />
            </MenuLink>
          );
          break;
        case Boolean(item.button):
          jsx = (
            <Menu.Item key={kebabCase(item.name)}>
              <ButtonLink
                to={item.to}
                content={item.name}
                {...item.button}
                {...defaultMenuLinkProps} />
            </Menu.Item>
          );
          break;
        case Boolean(item.dropdown):
          jsx = (
            <Dropdown item text={item.name} key={kebabCase(item.name)}>
              <Dropdown.Menu>
                {
                  item.dropdown.items.map(dropdownItem => (
                    <DropdownLink
                      to={dropdownItem.to}
                      key={kebabCase(dropdownItem.name)}
                      {...defaultMenuLinkProps}>
                      {dropdownItem.name}
                    </DropdownLink>
                  ))
                }
              </Dropdown.Menu>
            </Dropdown>
          );
          break;
        default:
          break;
      }
      return result.push(jsx);
    });
    return result;
  }

  renderDesktopMenu = () => {
    const { menuProps, menu } = this.props;
    return (
      <Menu attached {...menuProps}>
        <Responsive maxWidth={mediaCssBreakpoints.sm} as={Menu.Menu}>
          <Dropdown item icon="content" onClick={this.toggleSidebar} />
        </Responsive>
        {menu.map((submenu, i) => (
          <Responsive
            key={i}
            as={Menu.Menu}
            position={submenu.position}
            minWidth={mediaCssBreakpoints.sm}>
            {this.renderMenuItems(submenu.content)}
          </Responsive>
        ))}
      </Menu>
    );
  }

  renderMobileMenu = () => {
    const { menu } = this.props;
    const allMenus = [];
    if (menu.length > 1) {
      // merge menu contents
      menu.map(submenu => allMenus.push(...submenu.content));
    }
    return this.renderMenuItems(allMenus, true);
  }

  render() {
    const { children } = this.props;
    const { showSidebar } = this.state;

    return (
      <SidebarPushable>
        <Sidebar
          as={Menu}
          animation='push'
          width='thin'
          visible={showSidebar}
          icon='labeled'
          vertical
          inverted>
          {this.renderMobileMenu()}
        </Sidebar>
        <Sidebar.Pusher>
          {this.renderDesktopMenu()}
          <Dimmer active={showSidebar} onClick={this.handleDimmerClick} />
          {children}
        </Sidebar.Pusher>
      </SidebarPushable>
    );
  }
}

SiteNav.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    position: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      to: PropTypes.string,
      dropdown: PropTypes.shape({
        items: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
        })).isRequired,
      }),
      button: PropTypes.object,
    })).isRequired,
  })).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
  menuProps: PropTypes.object,
};

SiteNav.defaultProps = {
  menuProps: undefined,
};

export default SiteNav;
