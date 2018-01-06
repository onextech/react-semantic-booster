import React from 'react';
import { storiesOf } from '@storybook/react';
import { Segment, Container } from 'semantic-ui-react';
import VideoBackground from '.';


storiesOf('VideoBackground')
  .add('Default', () => (
    <Segment
      inverted
      vertical
      style={{
        minHeight: 700,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'transparent',
      }}>
      <Container>
        <h1>Hello World</h1>
      </Container>
      <VideoBackground
        video={{
          src: 'https://s3-ap-southeast-1.amazonaws.com/storage.onextech.com/web/site/home/24251288.mp4',
          poster: 'https://s3-ap-southeast-1.amazonaws.com/storage.onextech.com/web/site/home/bluenet.jpg',
        }} />
    </Segment>
  ));
