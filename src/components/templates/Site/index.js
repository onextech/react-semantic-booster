import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Button, Menu, Dropdown, Responsive } from 'semantic-ui-react';
import { kebabCase } from 'lodash';
import MenuLink from '../../atoms/MenuLink';
import FloatingMenu from '../../atoms/FloatingMenu';
import DropdownLink from '../../atoms/DropdownLink';
import './style.css';


class Site extends React.Component {
  state = {}

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  renderMenuItems = () => {
    const { menu } = this.props;
    const result = [];
    menu.map((item) => {
      let jsx = <MenuLink
        to={item.to || '/'}
        key={kebabCase(item.name)}>
        {item.name}
      </MenuLink>;
      if (item.dropdown) {
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
      }
      return result.push(jsx);
    });
    return result;
  }

  renderDesktopMenu = () => {
    const { menuProps: allMenuProps } = this.props;
    const { custom, ...menuProps } = allMenuProps;
    return (
      <Menu attached {...menuProps}>
        <Responsive maxWidth={768} as={Menu.Menu}>
          <Dropdown item icon="content" onClick={this.toggleVisibility} />
        </Responsive>
        <Responsive minWidth={768} as={Menu.Menu}>
          {this.renderMenuItems()}
        </Responsive>
        <Menu.Menu position='right'>
          <Dropdown item text='Language'>
            <Dropdown.Menu>
              <Dropdown.Item>English</Dropdown.Item>
              <Dropdown.Item>Russian</Dropdown.Item>
              <Dropdown.Item>Spanish</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Menu.Item>
            <Button>Log In</Button>
          </Menu.Item>
          <Menu.Item>
            <Button primary>Sign Up</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    );
  }

  render() {
    const { children, menuProps } = this.props;
    const { visible } = this.state;

    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          {this.renderMenuItems()}
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

Site.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    to: PropTypes.string,
    dropdown: PropTypes.shape({
      items: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
      })).isRequired,
    }),
  })).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]),
  menuProps: PropTypes.object,
};

Site.defaultProps = {
  menuProps: undefined,
};

export default Site;
