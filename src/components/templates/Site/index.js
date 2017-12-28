import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Button, Menu, Dropdown, Header, Responsive } from 'semantic-ui-react';
import MenuLink from '../../atoms/MenuLink/index';


class Site extends Component {
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
  render() {
    const { children } = this.props;
    const { visible } = this.state;
    return (
      <Sidebar.Pushable as={Segment}>
        <Sidebar as={Menu} animation='push' width='thin' visible={visible} icon='labeled' vertical inverted>
          {this.renderMenuItems()}
        </Sidebar>

        <Sidebar.Pusher>
          <Menu attached>
            <Responsive maxWidth={768} as={Menu.Menu}>
              <Menu.Item><Button onClick={this.toggleVisibility} icon="content" basic /></Menu.Item>
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
};

export default Site;
