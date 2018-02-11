import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Card as suiCard } from 'semantic-ui-react';
import { getCustomClassName, subtractObject } from '../../../utils/helpers';


const basicClassName = 'basic';
const stretchedClassName = 'stretched';

const StyledCard = styled(suiCard)`
  &.ui.card {
    &.${basicClassName} { box-shadow: none; }
    &.${stretchedClassName} { height: 100%; }
  }
`;

const Card = (card) => {
  // 1. Define custom props for this component
  const customCardProps = {
    basic: basicClassName,
    stretched: stretchedClassName,
  };
  // 1.5. Define default props
  const defaultCardProps = {
    basic: false,
    stretched: false,
  };
  const allCardProps = { ...defaultCardProps, ...card };
  // 2. Render the custom class names
  const cardClassName = card &&
    getCustomClassName(customCardProps, allCardProps);
  // 3. Clean up custom props from main prop set to avoid prop clashing
  const semanticCardProps = card &&
    subtractObject({ ...defaultCardProps, ...customCardProps }, allCardProps);

  return (
    <StyledCard {...semanticCardProps} className={cardClassName} />
  );
};

Card.Content = suiCard.Content;
Card.Description = suiCard.Description;

Card.propTypes = {
  card: PropTypes.object, // semantic-ui card props
  basic: PropTypes.bool,
  stretched: PropTypes.bool,
};

export default Card;
