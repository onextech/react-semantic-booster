import React from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import Card from '../Card';


const StyledCard = styled(Card)`
  &.ui.card {
    font-size: 200%;
  }
  
  &.ui.card > .content,
  &.ui.cards > .card > .content {
    padding: 3em 1em;
  }
  
  &.ui.card>.content>.header,
  &.ui.cards>.card>.content>.header {
    ${({ gradient }) => gradient && `
      background: -webkit-linear-gradient(left,${gradient.from},${gradient.to});
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    `}
  }
`;

const StatNumber = styled(Header)`
  &.ui.header {
    margin-bottom: 0;
    font-weight: normal;
  }
`;

const StatHeader = styled(Header)`
  &.ui.header {
    margin-top: 0;
    font-weight: normal;
  }
`;

const StatDesc = styled(Card.Description)`
  font-size: 70%;
  line-height: 1.3;
`;

const StatCard = ({ card, content, headers }) => (
  <StyledCard fluid gradient={headers && headers.gradient} {...card}>
    <Card.Content textAlign="center">
      <StatNumber as="h5" size="huge" {...headers}>{content.number}</StatNumber>
      <StatHeader as="h5" size="medium" {...headers}>{content.header}</StatHeader>
      <StatDesc>{content.description}</StatDesc>
    </Card.Content>
  </StyledCard>
);

StatCard.propTypes = {
  card: PropTypes.object, // semantic-ui card props
  content: PropTypes.object,
  headers: PropTypes.object,
};

export default StatCard;
