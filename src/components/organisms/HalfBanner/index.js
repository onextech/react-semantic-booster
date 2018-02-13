import React from 'react';
import PropTypes from 'prop-types';
import Grid from '../../atoms/Grid';
import Copy from '../../molecules/Copy/index';


const HalfBanner = ({
  rightCol,
  leftCol,
  grid,
}) => (
  <Grid attached stackable inverted {...grid}>
    <Grid.Row columns="equal">
      {
        [leftCol, rightCol].map((col, i) => (
          <Grid.Column {...col} key={['left', 'right'][i]}>
            <Copy {...col.copy} />
          </Grid.Column>
        ))
      }
    </Grid.Row>
  </Grid>
);

HalfBanner.propTypes = {
  rightCol: PropTypes.object.isRequired,
  leftCol: PropTypes.object.isRequired,
  grid: PropTypes.object, // grid props
};

export default HalfBanner;
