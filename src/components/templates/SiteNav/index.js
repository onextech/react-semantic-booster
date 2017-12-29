import React from 'react';
import PropTypes from 'prop-types';
import { kebabCase } from 'lodash';
import { Sidebar, Segment, Dropdown, Responsive, Menu } from 'semantic-ui-react';
import FloatingMenu from '../../atoms/FloatingMenu';
import MenuLink from '../../atoms/MenuLink';
import DropdownLink from '../../atoms/DropdownLink';
import ButtonLink from '../../atoms/ButtonLink';
import './style.scss';


class SiteNav extends React.Component {
  state = {}

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

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
    const { menuProps: allMenuProps, menu } = this.props;
    const { custom, ...menuProps } = allMenuProps;
    return (
      <Menu attached {...menuProps}>
        <Responsive maxWidth={768} as={Menu.Menu}>
          <Dropdown item icon="content" onClick={this.toggleVisibility} />
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
    const { visible } = this.state;

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar
          as={Menu}
          animation='push'
          width='thin'
          visible={visible}
          icon='labeled'
          vertical
          inverted>
          {this.renderMobileMenu()}
        </Sidebar>
        <Sidebar.Pusher>
          {
            menuProps.custom.float ?
              <FloatingMenu
                menu={this.renderDesktopMenu()}
                container={menuProps.custom.container} /> :
              this.renderDesktopMenu()
          }
          {children}
        </Sidebar.Pusher>
      </Sidebar.Pushable>
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
