import React from 'react';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';

const PaddedSegment = styled(Segment)`
  &.block.ui.segment {
    padding: 4rem 0rem;
    &.attached {
      border: 0;
    }
  }
`;

const Block = ({ ...props }) => (<PaddedSegment className="block" {...props} />);

export default Block;
