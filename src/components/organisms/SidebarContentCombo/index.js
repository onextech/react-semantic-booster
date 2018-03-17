import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid } from 'semantic-ui-react';
import styled from 'styled-components';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';

const visibleClassName = 'visible';
const sidebarClassName = 'sidebar';

const Wrapper = styled(Grid)`
  &.ui.grid {
    > .${sidebarClassName} {
      position: absolute;
      visibility: hidden;
    }
    &.${visibleClassName} { 
      .${sidebarClassName} {
        position: initial;
        visibility: visible;
      }
    }
  }
`;

class MenuContentCombo extends React.Component {
  state = { visible: true }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible });
  }

  render() {
    const { visible } = this.state;
    const { sidebar, children, ...props } = this.props;

    // 1. Define custom props for this component
    const classProps = {
      visible: visibleClassName,
    };
    // 1.5. Define default props
    const defaultProps = {
      visible,
    };
    const customProps = {
      visible,
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
        <Grid.Row>
          <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        </Grid.Row>
        <Grid.Column width={4} className="sidebar">{sidebar}</Grid.Column>
        <Grid.Column width={visible ? 12 : 16} className="content">{children}</Grid.Column>
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
};


export default MenuContentCombo;
