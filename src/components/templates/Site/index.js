import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Button, Menu, Dropdown, Responsive } from 'semantic-ui-react';
import MenuLink from '../../atoms/MenuLink';
import FloatingMenu from '../../atoms/FloatingMenu';
import './style.css';


class Site extends React.Component {
  state = {}

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  renderMenuItems = () => {
    const { menu } = this.props;
    const result = [];
    menu.map((item) => {
      const jsx = <MenuLink
        to={item.to}
        key={item.key}
        name={item.key}>
        {item.name}
      </MenuLink>;
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
    key: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
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
