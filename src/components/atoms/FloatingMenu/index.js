import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment, Container } from 'semantic-ui-react';


const FloatingDiv = styled.div`
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    width: 100%;
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
