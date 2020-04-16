import * as filterActions from 'Store/filters';

import React, { useCallback, useState } from 'react';

import FilterRow from 'Components/Filter/FilterRow';
import MovieList from 'Components/MovieList';
import { connect } from 'react-redux';
import { discoverMovies } from 'Store/movies/apiWrapper';

const Explore = ({ filters, updateFilters, resetFilters }) => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const loadMore = useCallback(() => {
    setIsLoading(true);
    discoverMovies({
      page,
      ...filters,
      sortBy: filters.sortBy.id,
      genres: filters.genres.id,
    }).then(res => {
      if (page === 1) setMovies([...res.results]);
      else setMovies(movies => [...movies, ...res.results]);
      setPage(page => page + 1);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    });
  }, [filters, page]);

  const onFilterChange = useCallback(
    filters => {
      updateFilters(filters, 'explore');
      setIsLoading(true);
      discoverMovies({
        page: 1,
        ...filters,
        sortBy: filters.sortBy.id,
        genres: filters.genres.id,
      }).then(res => {
        setMovies([...res.results]);
        setPage(2);
        setTimeout(() => {
          setIsLoading(false);
        }, 200);
      });
    },
    [updateFilters]
  );

  const onReset = () => {
    resetFilters('explore');
  };

  return (
    <React.Fragment>
      <FilterRow
        onChange={onFilterChange}
        filters={filters}
        onReset={onReset}
      />

      <MovieList
        movies={movies}
        loadMore={loadMore}
        id={'Explore'}
        isLoading={isLoading}
      />
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    filters: state.filters.explore,
  };
};

const mapDispatchToProps = {
  ...filterActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Explore);
