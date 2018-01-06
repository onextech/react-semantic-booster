import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import isMobile from 'ismobilejs';


const VideoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-attachment: scroll;
  overflow: hidden;
  z-index: -1;
  
  video {
    min-width: 100%;
    min-height: 100%;
    position: relative;
    z-index: 1;
  }
  
  .overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    background: black;
    opacity: 0.5;
  }
`;

const VideoBackground = ({ video }) => {
  const defaultVideoProps = {
    loop: true,
    muted: true,
  };
  const isDesktop = !isMobile.any;
  if (isDesktop) {
    /**
     * @note
     * To disable video autoplay, autoplay="false" will not work;
     * To remove autoplay the attribute needs to be removed altogether.
     * @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video
     * @type {boolean}
     */
    defaultVideoProps.autoPlay = true;
  }

  const { src, ...videoProps } = video;

  return (
    <VideoContainer>
      <div className="overlay" />
      <video {...defaultVideoProps} {...videoProps}>
        <source src={src} type="video/ogg" />
        <source src={src} type="video/webm" />
        <source src={src} type="video/mp4" />
      </video>
    </VideoContainer>
  );
};

VideoBackground.propTypes = {
  video: PropTypes.shape({
    src: PropTypes.string,
    poster: PropTypes.string,
  }).isRequired,
};

export default VideoBackground;
