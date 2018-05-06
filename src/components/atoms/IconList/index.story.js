import React from 'react';
import { storiesOf } from '@storybook/react';
import { Grid } from 'semantic-ui-react';
import Block from '../Block';
import IconList from '.';


const exampleProps = {
  header: 'Hello World',
  content: 'The property will be presented to over 120 agents during the Rodeo Realty office meeting',
};

// eslint-disable-next-line import/prefer-default-export
export const items = [exampleProps, exampleProps, exampleProps];

storiesOf('IconList', module)
  .add('Default', () => (
    <div>
      <Block>
        <Grid container stackable>
          <Grid.Row columns="equal">
            <Grid.Column>
              <IconList.Item {...exampleProps} vertical />
            </Grid.Column>
            <Grid.Column>
              <IconList.Item {...exampleProps} vertical />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Block>
      <Block>
        <IconList center items={items} />
      </Block>
      <Block inverted>
        <IconList
          icon={{ name: 'star' }}
          headerProps={{ inverted: true }}
          center
          items={items}
        />
      </Block>
    </div>
  ));
