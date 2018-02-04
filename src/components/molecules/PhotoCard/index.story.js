import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Grid } from 'semantic-ui-react';
import PhotoCard from '.';


export const photoCardExamples = [
  {
    content: {
      header: 'hello world',
      subheader: 'foo',
    },
    key: 'hello-world',
    imgProps: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong,_Sichuan,_China.JPG',
    },
    to: '/link-1',
  },
  {
    content: {
      header: 'hello world',
      subheader: 'bar',
    },
    key: 'hello-world-2',
    imgProps: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong,_Sichuan,_China.JPG',
    },
    to: '/link-2',
  },
  {
    content: {
      header: 'hello world',
      subheader: 'baz',
    },
    key: 'hello-world-3',
    imgProps: {
      src: 'https://upload.wikimedia.org/wikipedia/commons/c/cd/Panda_Cub_from_Wolong,_Sichuan,_China.JPG',
    },
    to: '/link-3',
  },
];

export const firstPhotoCard = photoCardExamples[0];

storiesOf('PhotoCard', module)
  .add('Default', () => (
    <PhotoCard
      onClick={action('clicked')}
      animated="scale"
      content={firstPhotoCard.content}
      cardProps={{ card: firstPhotoCard.key }}
      headerProps={{ inverted: true, size: 'large' }}
      imgProps={firstPhotoCard.imgProps} />
  ))
  .add('Link', () => (
    <PhotoCard
      centered
      animated="scale"
      content={firstPhotoCard.content}
      cardProps={{ card: firstPhotoCard.key, to: firstPhotoCard.to }}
      headerProps={{ inverted: true, size: 'large' }}
      imgProps={firstPhotoCard.imgProps} />
  ))
  .add('Gridded', () => (
    <Grid container columns="equal">
      <Grid.Row>
        {photoCardExamples.map(photoCardExample => (
          <Grid.Column key={photoCardExample.key}>
            <PhotoCard
              animated="scale"
              content={photoCardExample.content}
              cardProps={{ card: photoCardExample.key, to: photoCardExample.to }}
              headerProps={{ inverted: true, size: 'large' }}
              imgProps={photoCardExample.imgProps} />
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  ));
