import React, { useEffect, useState } from 'react';

import MovieList from 'Components/MovieList';
import { queryMovie } from 'Store/movies/apiWrapper';
import styled, { css } from 'styled-components';

const SearchResults = ({ match }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    queryMovie(match.params.query).then(res => setMovies(res.results));
    return () => {};
  }, [match.params.query]);
  return (
    <React.Fragment>
      <SearchResultsLabel>Search Results for</SearchResultsLabel>
      <SearchResultsQuery>{match.params.query}</SearchResultsQuery>
      <MovieList
        movies={movies
          .sort((movieA, movieB) => movieA.popularity < movieB.popularity)
          .filter(movie => movie.poster_path)}
        loadMore={() => {}}
        id={'Rearch Results'}
      />
    </React.Fragment>
  );
};

export default SearchResults;

const SearchResultsLabel = styled.div(
  ({ theme }) => css`
    margin: auto;
    ${theme.fontSize.l}
    letter-spacing: 2px;
    color: ${theme.col.gray7};
  `
);
const SearchResultsQuery = styled.div(
  ({ theme }) => css`
    margin: auto;
    ${theme.fontSize.xxxl}
    letter-spacing: 2px;
    font-weight: 600;
    color: ${theme.col.prim9};
  `
);
