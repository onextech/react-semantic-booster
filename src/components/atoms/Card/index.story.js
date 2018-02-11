import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from 'semantic-ui-react';
import Card from '.';

storiesOf('Card', module)
  .add('Basic', () => (
    <Grid container>
      <Grid.Row>
        <Grid.Column>
          <Card basic>
            <br /><br /><br /><br /><br />
            Hello World.
            <br /><br /><br /><br /><br />
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ))
  .add('Stretched', () => (
    <Grid container>
      <Grid.Row>
        <Grid.Column>
          <Card stretched>
            Hello World.
          </Card>
        </Grid.Column>
        <Grid.Column>
          <Card stretched>
            <br /><br /><br /><br /><br />
            Hello World.
            <br /><br /><br /><br /><br />
          </Card>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  ));
