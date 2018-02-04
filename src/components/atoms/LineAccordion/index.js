import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Accordion, Icon } from 'semantic-ui-react';

const sizes = ['mini', 'tiny', 'small', 'medium', 'large', 'big', 'huge', 'massive'];

const StyledAccordion = styled(Accordion)`
  &.ui.accordion {
    .container {
      border-bottom: 1px solid rgba(0,0,0,0.2);
    }
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &:hover, &:focus, &:active {
        font-weight: bold;
      }
    }
    
    &.inverted {
      .container {
        border-bottom: 1px solid white;
      }
      .title {
        opacity: 0.7;
        &:hover, &:focus, &:active {
          opacity: 1;
          font-weight: normal;
        }
      }
    }
    
  ${(props) => {
    if (props.size) {
      const found = sizes.indexOf(props.size);
      return found && `
        .title {
          padding: ${(found + 0.5) * 0.5}em 0 ${(found + 0.3) * 0.5}em;
          font-size: ${(found + 0.5) * 0.5}em;
        }
        .content {
          padding-bottom: ${(found + 0.5) * 0.5}em !important;
        }   
      `;
    }
    return false;
  }}
}`;

class LineAccordion extends React.Component {
  state = { activeIndex: this.props.defaultindex }

  getAccordionClassName = () => {
    const className = [];
    const { size } = this.props;
    if (size) {
      className.push(size);
    }
    return className.join(' ');
  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { panels, ...accordionProps } = this.props;

    return (
      <StyledAccordion className={this.getAccordionClassName()} {...accordionProps}>
        {
          panels.map((panel, i) => (
            <div key={i} className="container">
              <Accordion.Title active={activeIndex === i} index={i} onClick={this.handleClick}>
                {panel.title.content}
                <Icon name="plus" />
              </Accordion.Title>
              <Accordion.Content active={activeIndex === i}>
                {panel.content.content}
              </Accordion.Content>
            </div>
          ))
        }
      </StyledAccordion>
    );
  }
}

LineAccordion.propTypes = {
  panels: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.shape({
      content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.array,
      ]),
    }),
    content: PropTypes.shape({
      content: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string,
        PropTypes.array,
      ]),
    }),
  })).isRequired,
  size: PropTypes.string, // enum: size constant above
  defaultindex: PropTypes.number, // zero-based index
};

LineAccordion.defaultProps = {
  size: undefined,
  defaultindex: undefined,
};

export default LineAccordion;
