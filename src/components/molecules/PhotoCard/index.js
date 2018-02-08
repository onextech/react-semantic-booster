import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Header, Button, Image } from 'semantic-ui-react';


const getCardLinkButtonCss = () => `
    &.ui.button, & {
      width: 100%;
      height: 260px;
      display: flex;
      position: relative;
      padding: 30px 4.65116%;
      flex-direction: column;
      overflow: hidden;
      text-align: center;
      text-decoration: none;
      color: rgb(255, 255, 255);
      background-color: rgb(31, 31, 31);
      
      &:hover,
      &:active, 
      &:focus {
        img.animated {
          opacity: 0.7;
          &.scale {
            transform: scale(1.05);
          }
        }
      }
      
      align-items: flex-start;
      justify-content: flex-end;
      text-align: left;
      
      &.centered {
        align-items: center;
        justify-content: center;
        text-align: center;
      }
    }
  `;
const CardLink = styled(Link)`${getCardLinkButtonCss()}`;
const CardButton = styled(Button)`${getCardLinkButtonCss()}`;

const CardContent = styled.div`
    position: relative;
    max-width: 520px;
    z-index: 2;
  `;

const CardImage = styled(Image)`
    &.ui.image {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      z-index: 1;
      left: 0;
      top: 0;
      opacity: 0.4;
      object-fit: cover;
      transition: opacity 800ms ease-in-out, transform 800ms ease-in-out;
    }
  `;

const PhotoCard = ({
  content,
  cardProps,
  imgProps,
  headerProps,
  centered,
  animated,
  onClick,
}) => {
  const getCardContainerClass = () => {
    const cardContainerClass = [];
    if (centered) {
      cardContainerClass.push('centered');
    }
    return cardContainerClass.join(' ');
  };

  const getCardImageClass = () => {
    const cardImageClass = [];
    if (animated) {
      cardImageClass.push('animated');
      cardImageClass.push(animated);
    }
    return cardImageClass.join(' ');
  };

  const handleClick = (e, data) => onClick(e, data);

  const CardContainer = onClick ? CardButton : CardLink;

  return (
    <div style={{ backgroundColor: 'black' }}>
      <CardContainer
        className={getCardContainerClass()}
        onClick={handleClick}
        to="#"
        {...cardProps}>
        {
          content &&
          <CardContent>
            <Header as="h4" {...headerProps}>
              {
                content.subheader &&
                <Header.Subheader style={{ opacity: '0.8' }}>
                  {content.subheader}
                </Header.Subheader>
              }
              {content.header}
            </Header>
          </CardContent>
        }
        <CardImage className={getCardImageClass()} {...imgProps} />
      </CardContainer>
    </div>
  );
};

PhotoCard.propTypes = {
  content: PropTypes.shape({
    header: PropTypes.string,
    subheader: PropTypes.string,
  }),
  cardProps: PropTypes.object, // props to lay on the card
  imgProps: PropTypes.object, // <img> props
  headerProps: PropTypes.object, // semantic-ui header props
  centered: PropTypes.bool,
  animated: PropTypes.string, // enums for css animations: 'scale'
  onClick: PropTypes.func,
};

PhotoCard.defaultProps = {
  content: undefined,
  centered: undefined,
  animated: undefined,
  onClick: undefined,
  cardProps: undefined,
  imgProps: undefined,
  headerProps: undefined,
};

export default PhotoCard;
