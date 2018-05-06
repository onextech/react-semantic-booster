import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import Block from '../Block';
import Tab from '.';


const TabPane = ({ children }) => (
  <Tab.Pane>
    <Block secondary attached basic textAlign="center" spacer={2}>
      {children}
    </Block>
  </Tab.Pane>
);

TabPane.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.array,
  ]).isRequired,
};

/* eslint-disable react/display-name */
const panes = [
  {
    menuItem: { key: 'users', icon: 'users', content: 'Users' },
    render: () => <TabPane>Tab 1 Content</TabPane>,
  },
  {
    menuItem: { key: '2', icon: 'wifi', content: 'Users 2' },
    render: () => <TabPane>Tab 2 Content</TabPane>,
  },
  {
    menuItem: { key: '3', icon: 'world', content: 'Globe' },
    render: () => <TabPane>Tab 3 Content</TabPane>,
  },
  {
    menuItem: { key: '4', icon: 'trash', content: 'Trash' },
    render: () => <TabPane>Tab 4 Content</TabPane>,
  },
];
/* eslint-enable react/display-name */

const menu = {
  icon: 'labeled',
  attached: true,
  secondary: true,
  tabular: true,
};

export const exampleTabProps = { // eslint-disable-line import/prefer-default-export
  spacer: 2,
  secondary: true,
  angular: true,
  justify: true,
  basic: true,
  subtle: true,
  panes,
  menu,
};

storiesOf('Tab', module)
  .add('Default', () => (
    <Tab {...exampleTabProps} />
  ));
