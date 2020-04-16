import * as movieActions from 'Store/movies';

import React, { useState } from 'react';

import MovieList from 'Components/MovieList';
import { connect } from 'react-redux';

const Watchlist = ({ movies }) => {
  const [numberToLoad, setNumberToLoad] = useState(40);

  const loadMore = () => {
    setNumberToLoad(Math.min(numberToLoad + 40, movies.length));
  };
  return (
    <MovieList
      movies={movies.slice(0, numberToLoad)}
      loadMore={loadMore}
      id={'Watchlist'}
    />
  );
};

const mapStateToProps = state => {
  return {
    movies: [
      ...state.movies.watchlist.map(id => {
        return state.movies.movies[id];
      }),
    ],
  };
};

const mapDispatchToProps = {
  ...movieActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Watchlist);
