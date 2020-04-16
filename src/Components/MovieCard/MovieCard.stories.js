import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
import MovieCard from './index';
const data = {
  title: 'John Wick',
  releaseYear: '2019',
  rating: 7.8,
  id: 1,
};

storiesOf('MovieCard', module).add('with text', () => (
  <MovieCard
    rating={'7.8'}
    title={'John Wick'}
    releaseYear={'2019'}
    posterURI={
      'https://image.tmdb.org/t/p/w185/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
    }
  />
));
