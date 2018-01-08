import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';


const PaddedSegment = styled(Segment)`
  &.ui.segment {
    ${(props) => {
    const baseEmPadding = 5;
    return `padding: ${baseEmPadding * props.spacer}em 0`;
  }}
  }
  &.ui.segment.attached { border: 0; }
  `;

const Block = ({ ...props }) => (<PaddedSegment {...props} />);

Block.propTypes = {
  spacer: PropTypes.number,
};

Block.defaultProps = {
  spacer: 1,
};

export default Block;
