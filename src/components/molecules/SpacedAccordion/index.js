import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Accordion, Icon } from 'semantic-ui-react';

const StyledDiv = styled.div`
  border: solid 1px;
  border-color: #ccc;
  border-radius: 0.5em;
  box-shadow: 1px 1px 1px 0 #ccc;
  margin: 1.5em 0;
  opacity: 0.95;
  background-color: white;
  
  &:first-child {
    margin-top: 0;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

class SpacedAccordion extends Component {
  state = { activeIndex: 0 }

  handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = this.state;
    const newIndex = activeIndex === index ? -1 : index;

    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;
    const { data } = this.props;
    return (
      <Accordion fluid>
        {
          data.map((dataInfo) => {
            const { header, content, key } = dataInfo;
            return (
              <StyledDiv key={key}>
                <Accordion.Title active={activeIndex === key} index={key} onClick={this.handleClick} style={{ fontSize: '1.2em', fontWeight: 'bold', padding: '1.5em 3em' }}>
                  <Icon name='dropdown' />
                  { header }
                </Accordion.Title>
                <Accordion.Content active={activeIndex === key} style={{ padding: '0 4em 2em' }}>
                  {
                    typeof content === 'string' ?
                      <p>{content}</p> :
                      content.map((contentItem, i) => <p key={i}>{contentItem}</p>)
                  }
                </Accordion.Content>
              </StyledDiv>
            );
          })
        }
      </Accordion>
    );
  }
}

SpacedAccordion.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.arrayOf(PropTypes.string),
    ]),
  })).isRequired,
};

export default SpacedAccordion;
