import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Grid, Image } from 'semantic-ui-react';
import Block from '../../atoms/Block';
import { MediaCss } from '../../../utils/responsive';


const SecondImage = styled(Image)`
  ${MediaCss.min.sm`margin-top: 8em;`};
`;
const ThirdImage = styled(Image)`
  ${MediaCss.min.sm`margin-top: -6em;`};
`;

const TriPhotoBlock = ({ photos, block, grid }) => (
  <Block inverted vertical spacer={2} {...block}>
    <Grid container columns="equal" relaxed stackable {...grid}>
      <Grid.Row>
        <Grid.Column>
          <Image {...photos[0]} />
        </Grid.Column>
        <Grid.Column>
          <SecondImage {...photos[1]} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column mobile={16} tablet={8} computer={8}>
          <ThirdImage size="large" floated="right" {...photos[2]} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Block>
);

TriPhotoBlock.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object).isRequired, // semantic-ui image props
  block: PropTypes.object, // semantic-ui block props
  grid: PropTypes.object, // semantic-ui grid props
};

TriPhotoBlock.defaultProps = {
  block: undefined,
  grid: undefined,
};

export default TriPhotoBlock;
