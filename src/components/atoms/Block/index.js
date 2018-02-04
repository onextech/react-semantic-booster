import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Segment } from 'semantic-ui-react';


const StyledBlock = styled(Segment)`
  // spacer
  &.ui.segment {
    &.attached { border: 0; }
    ${(props) => {
      const baseEmPadding = 5;
      return `padding: ${baseEmPadding * props.spacer}em 0`;
    }}
  }
  
  // background
  ${(props) => {
  if (props.background) {
    const bg = props.background;
    const { src, repeat, position, fromColor, toColor, opacity } = bg;
    return `
      &.ui.segment {
        background: linear-gradient(${fromColor || `rgba(0,0,0,${opacity || '0.8'})`}, ${toColor || `rgba(0,0,0,${opacity || '0.8'})`}), url('${src}');
        background-position: ${position || 'center'};
        background-repeat: ${repeat || 'no-repeat'};
      }`;
    }
  }}
`;

const Block = ({ ...props }) => (<StyledBlock {...props} />);

Block.propTypes = {
  spacer: PropTypes.number,
  background: PropTypes.shape({
    src: PropTypes.string.isRequired,
    repeat: PropTypes.string,
    position: PropTypes.string,
    opacity: PropTypes.number,
    fromColor: PropTypes.string, // 'rgba(0,0,0,0.5)'
    toColor: PropTypes.string, // 'rgba(0,0,0,0.8)'
  }),
};

Block.defaultProps = {
  spacer: 1,
  background: undefined,
};

export default Block;
