import MovieList from 'Components/MovieList';
import React from 'react';
import styled, { css } from 'styled-components';

const RecommendedMovies = ({ movies, isModal }) => {
  return (
    <div>
      <Title> Recommended Movies </Title>
      <MovieList movies={movies} id={'recommended'} isModal={isModal} />
    </div>
  );
};

export default RecommendedMovies;

const Title = styled.div(
  ({ theme }) => css`
    padding: 10px;
    margin: 10px;
    text-align: center;
    ${theme.fontSize.xl}
    color: ${theme.col.gray9};
    letter-spacing: 1px;

    border-bottom: 1px solid ${theme.col.gray5};
  `
);
