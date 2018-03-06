import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Sidebar, Dropdown, Responsive, Menu, Dimmer, Image } from 'semantic-ui-react';
import FloatingMenu from '../../atoms/FloatingMenu';
import MenuLink from '../../atoms/MenuLink';
import DropdownLink from '../../atoms/DropdownLink';
import ButtonLink from '../../atoms/ButtonLink';

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
`;


class SiteNav extends React.Component {
  state = {}

  toggleSidebar = () => this.setState({ showSidebar: !this.state.showSidebar })

  handleDimmerClick = () => this.setState({ showSidebar: false });

  renderMenuItems = (items) => {
    const result = [];
    items.map((item) => {
      let jsx = <MenuLink
        to={item.to || '/'}
        key={kebabCase(item.name)}>
        {item.name}
      </MenuLink>;
      // render other menu item types
      switch (true) {
        case Boolean(item.image):
          jsx = <MenuLink to={item.to} key={kebabCase(item.name)} linkProps={{ basic: true }}>
            <Image {...item.image} />
          </MenuLink>;
          break;
        case Boolean(item.button):
          jsx = <Menu.Item key={kebabCase(item.name)}>
            <ButtonLink to={item.to} content={item.name} {...item.button} />
          </Menu.Item>;
          break;
        case Boolean(item.dropdown):
          jsx = <Dropdown item text={item.name} key={kebabCase(item.name)}>
            <Dropdown.Menu>
              {
                item.dropdown.items.map(dropdownItem => (
                  <DropdownLink
                    to={dropdownItem.to}
                    key={kebabCase(dropdownItem.name)}>
                    {dropdownItem.name}
                  </DropdownLink>
                ))
              }
            </Dropdown.Menu>
          </Dropdown>;
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
        <Responsive maxWidth={768} as={Menu.Menu}>
          <Dropdown item icon="content" onClick={this.toggleSidebar} />
        </Responsive>
        {menu.map((submenu, i) => (
          <Responsive
            key={i}
            as={Menu.Menu}
            position={submenu.position}
            minWidth={768}>
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
    return this.renderMenuItems(allMenus);
  }

  render() {
    const { children, menuProps } = this.props;
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
          {
            menuProps && menuProps.custom && menuProps.custom.float ?
              <FloatingMenu
                menu={this.renderDesktopMenu()}
                container={menuProps.custom.container} /> :
              this.renderDesktopMenu()
          }
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
