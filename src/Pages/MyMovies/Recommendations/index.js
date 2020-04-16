import * as filterActions from 'Store/filters';
import * as movieActions from 'Store/movies';

import React, { useCallback, useEffect, useState } from 'react';

import FilterRow from 'Components/Filter/FilterRow';
import MovieList from 'Components/MovieList';
import { connect } from 'react-redux';
import filterMovieArray from 'Components/Filter/filterMovieArray';

const Recommendations = ({ movies, filters, updateFilters, resetFilters }) => {
  const [activeFilters, setActiveFilters] = useState(filters);
  const [filteredMovies, setFilteredMovies] = useState(
    filterMovieArray(filters, movies)
  );
  const [numberToLoad, setNumberToLoad] = useState(40);

  const loadMore = () => {
    setNumberToLoad(number => Math.min(number + 40, movies.length));
  };

  useEffect(() => {
    setFilteredMovies(filterMovieArray(activeFilters, movies));
  }, [activeFilters, movies]);
  const onFilterChange = useCallback(
    filters => {
      updateFilters(filters, 'recommended');
    },
    [updateFilters]
  );
  const onReset = () => {
    resetFilters('recommended');
  };
  const onApply = () => {
    setActiveFilters(filters);
  };

  return (
    <React.Fragment>
      <FilterRow
        onChange={onFilterChange}
        onApply={onApply}
        onReset={onReset}
        predictedRating={true}
        filters={filters}
      />

      <MovieList
        movies={filteredMovies.slice(0, numberToLoad)}
        loadMore={loadMore}
        id={'recommended'}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    movies: [
      ...state.movies.recommended.reduce((result, id) => {
        if (state.movies.movies[id].rating) return result;
        else return [...result, state.movies.movies[id]];
      }, []),
    ],
    filters: state.filters.recommended,
  };
};

const mapDispatchToProps = {
  ...movieActions,
  ...filterActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Recommendations);
