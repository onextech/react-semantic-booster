import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Header } from 'semantic-ui-react';
import Block from '../../atoms/Block';


const BannerContainer = styled(Container)`
  &.ui.container {
    font-size: ${100 * 2}%; // double the em sizes in the container
  }
`;

const BannerContainerInner = styled.div`
  ${props => props.width && `width: ${props.width}`}
`;

const Subheader = styled(Header.Subheader)`
  &.sub.header {
    font-size: ${100 / 2}%; // double the em sizes in the container
  }
`;

const Banner = ({
  block,
  header,
  subheader,
  container,
}) => {
  // split container width
  const handleContainerProps = () => {
    let semanticContainerProps = {};
    const innerContainerProps = {};
    if (container) {
      const { width: innerWidth, ...rest } = container;
      innerContainerProps.width = innerWidth;
      semanticContainerProps = rest;
    }
    return { semanticContainerProps, innerContainerProps };
  };
  const { semanticContainerProps, innerContainerProps } = handleContainerProps();

  return (
    <Block {...block}>
      <BannerContainer {...semanticContainerProps}>
        <BannerContainerInner {...innerContainerProps}>
          {subheader && <Subheader {...subheader} />}
          {header && <Header {...header} />}
        </BannerContainerInner>
      </BannerContainer>
    </Block>
  );
};

Banner.propTypes = {
  block: PropTypes.object, // block props
  header: PropTypes.object, // sui header props
  subheader: PropTypes.object, // sui subheader props
  container: PropTypes.object, // sui container props
};

export default Banner;
