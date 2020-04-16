import * as filterActions from 'Store/filters';
import * as movieActions from 'Store/movies';

import React, { useCallback, useEffect, useState } from 'react';

import FilterRow from 'Components/Filter/FilterRow';
import MovieList from 'Components/MovieList';
import { connect } from 'react-redux';
import filterMovieArray from 'Components/Filter/filterMovieArray';

const MyRatings = ({ movies, filters, updateFilters, resetFilters }) => {
  const [numberToLoad, setNumberToLoad] = useState(40);
  const [activeFilters, setActiveFilters] = useState(filters);
  const [filteredMovies, setFilteredMovies] = useState(
    filterMovieArray(filters, movies)
  );
  const loadMore = () => {
    setNumberToLoad(Math.min(numberToLoad + 40, movies.length));
  };
  useEffect(() => {
    setFilteredMovies(filterMovieArray(activeFilters, movies));
  }, [activeFilters, movies]);

  const onFilterChange = useCallback(
    filters => updateFilters(filters, 'myRatings'),
    [updateFilters]
  );

  const onApply = () => {
    setActiveFilters(filters);
  };

  const onReset = () => resetFilters('myRatings');
  return (
    <React.Fragment>
      <FilterRow
        onChange={onFilterChange}
        onApply={onApply}
        myRating={true}
        filters={filters}
        onReset={onReset}
      />

      <MovieList
        movies={filteredMovies.slice(0, numberToLoad)}
        loadMore={loadMore}
        id={'MyRatings'}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    movies: [
      ...state.movies.ratedMovies.map(id => {
        return state.movies.movies[id];
      }),
    ],
    filters: state.filters.myRatings,
  };
};

const mapDispatchToProps = {
  ...movieActions,
  ...filterActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyRatings);
