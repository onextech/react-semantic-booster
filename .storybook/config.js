import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import './style.css';


const req = require.context('../src/components', true, /\.story\.js$/)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
};

// Wrap with react-router for links to work
addDecorator(story => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
))

configure(loadStories, module);
