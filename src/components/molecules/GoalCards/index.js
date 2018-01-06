import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Card, Icon } from 'semantic-ui-react';
import { MediaCss } from '../../../utils/responsive';


const transitionOptions = '.3s ease-out';
const CardGrid = styled(Card.Group)`
  &.ui.cards {
    .ui.card {
      padding: 1.5em !important;
      .content .header {
        font-size: 2.2em;
        line-height: 1.2;
        text-align: left;
        font-weight: 400;
      }
    }
  }
  
  // hover effects
  &.ui.cards .ui.card {
    .list-links {
      list-style: none;
      text-align: left;
      padding: 0;
      
      .list-link {
        display: inline-block;
        font-size: 1.1em;
        padding: 0.5em 0;
        
        .list-link-icon {
          margin-left: 0.4em;
          transition: transform ${transitionOptions};
        }
        
        &:hover {
          text-decoration: underline;
          &.icon {
            text-decoration: none;
          }
          .list-link-icon {
            transform: translate3D(.7em,0,0);
            transition: transform ${transitionOptions};
          }
        }
      }
    }
    
    // effects
    ${MediaCss.min.sm`
      .content {
        min-height: 18em;
        position: relative;
        overflow: hidden;
        .list-links {
          position: absolute;
          transform: translate3D(0,20em,0);
          transition: transform ${transitionOptions};
          margin-top: 2em;
        }
        .header {
          transform: translate3D(0,3em,0);
          transition: transform ${transitionOptions};
        }
      }
      &:hover {
        .header {
          transform: translate3D(0,0,0);
          transition: transform ${transitionOptions};
        }
        .list-links {
          transform: translate3D(0,0,0);
          transition: transform ${transitionOptions};
        }
      }
    `}
    
  }
`;

const GoalCards = ({ cards }) => (
  <CardGrid itemsPerRow={3} doubling stackable>
    {
      cards.items.map(card => (
        <Card key={card.header}>
          <Card.Content>
            <Card.Header>{card.header}</Card.Header>
            {
              card.listlinks &&
              <ul className="list-links">
                {
                  card.listlinks.map(listlink => (
                    <li className="list-item" key={listlink.name}>
                      <Link className={`list-link ${cards.icon && 'icon'}`} to={listlink.to}>
                        {listlink.name}
                        {cards.icon && <Icon className="list-link-icon" name={cards.icon.name || 'long right arrow'} />}
                      </Link>
                    </li>
                  ))
                }
              </ul>
            }
          </Card.Content>
        </Card>
      ))
    }
  </CardGrid>
);

GoalCards.propTypes = {
  cards: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({
      header: PropTypes.string,
      listlinks: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        to: PropTypes.string,
      })),
    })),
    icon: PropTypes.bool,
  }).isRequired,
};

export default GoalCards;
