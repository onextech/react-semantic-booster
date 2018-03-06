import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment, Container } from 'semantic-ui-react';


const FloatingDiv = styled.div`
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    width: 100%;
    .ui.attached.menu:not(.tabular) { border: 0; }
    .ui.menu .menu.left .item:first-child > a { padding-left: 0; }
    .ui.menu .menu.right .item:last-child > a { padding-right: 0; }
    .ui.menu .menu.right .item:last-child { padding-right: 0; }  
`;

const FloatingMenu = ({ menu, container }) => (
  <FloatingDiv>
    <Segment vertical>
      {
        container ?
          <Container>
            {menu}
          </Container> :
          menu
      }
    </Segment>
  </FloatingDiv>
);

FloatingMenu.propTypes = {
  menu: PropTypes.element.isRequired,
  container: PropTypes.bool,
};

FloatingMenu.defaultProps = {
  container: false,
};

export default FloatingMenu;
