import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Grid, Button } from 'semantic-ui-react';
import { MediaCss } from '../../../utils/responsive';
import Block from '../../atoms/Block';


const CalloutText = styled.p`
  font-size: 1.4em;
  font-weight: 300;
  line-height: 1.25;
  margin: 1.5em auto;
  opacity: 0.8;
`;

const ResponsiveRightTextColumn = styled(Grid.Column)`
  text-align: center;
  ${MediaCss.min.sm`text-align: right;`}
`;

const ResponsiveLeftTextColumn = styled(Grid.Column)`
  text-align: center;
  ${MediaCss.min.sm`text-align: left;`}
`;

const Callout = ({
  text, cta, block, button,
}) => (
  <Block vertical spacer={0.5} {...block}>
    <Grid container stackable>
      <Grid.Row verticalAlign="middle">
        <ResponsiveLeftTextColumn width={12}>
          <CalloutText>{text}</CalloutText>
        </ResponsiveLeftTextColumn>
        <ResponsiveRightTextColumn width={4}>
          <Button primary circular size="large" {...button}>{cta}</Button>
        </ResponsiveRightTextColumn>
      </Grid.Row>
    </Grid>
  </Block>
);

Callout.propTypes = {
  text: PropTypes.string.isRequired,
  cta: PropTypes.string.isRequired,
  button: PropTypes.object, // semantic-ui button props
  block: PropTypes.object, // Block component props
};

Callout.defaultProps = {
  button: undefined,
  block: undefined,
};

export default Callout;
