import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import { action } from '@storybook/addon-actions';
import PhotoCard from '.';
import { firstPhotoCard } from './index.story';


describe('<PhotoCard>', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Router><PhotoCard
        onClick={action('clicked')}
        animated="scale"
        content={firstPhotoCard.content}
        cardProps={{ card: firstPhotoCard.key, fluid: true }}
        headerProps={{ inverted: true, size: 'large' }}
        imgProps={firstPhotoCard.imgProps} />
      </Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
