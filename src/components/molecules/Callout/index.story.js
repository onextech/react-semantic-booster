import React from 'react';
import { storiesOf } from '@storybook/react';
import Callout from '.';

export const text = <span>Based in Singapore. Available for event bookings <span role="img" aria-label="Victory Hand">✌🏻</span></span>;
export const cta = 'Make Booking';

storiesOf('Callout', module)
  .add('Default', () => (
    <div>
      <Callout text={text} cta={cta} />
      <Callout text={text} cta={cta} block={{ secondary: true }} />
      <Callout text={text} cta={cta} block={{ inverted: true }} />
    </div>
  ));
