import React, { useEffect, useRef } from 'react';

import MovieCard from 'Components/MovieCard';
import { posterURI } from 'Store/movies/apiWrapper';
import styled from 'styled-components';
import useOnScreen from 'Hooks/onScreen';

const MovieList = React.memo(
  ({ movies = [], loadMore = () => {}, id, isLoading }) => {
    const intersectionRef = useRef(null);
    const onScreen = useOnScreen(intersectionRef, '1800px');

    useEffect(() => {
      if (onScreen && !isLoading) {
        loadMore();
      }
    }, [isLoading, loadMore, onScreen]);
    useEffect(() => {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'auto',
      });
    }, [id]);
    return (
      <>
        <Container data-cy={'movie-grid'}>
          {movies.map((movie, index) => {
            return (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.original_title}
                releaseYear={
                  movie.release_date ? movie.release_date.slice(0, 4) : ''
                }
                movie={movie}
                rating={movie.vote_average}
                posterURI={posterURI(movie.poster_path)}
              />
            );
          })}
          <div
            style={{
              width: '100%',
              height: '1px',
              backgroundColor: 'none',
              visibility: 'visible',
            }}
            ref={intersectionRef}
          />
        </Container>
      </>
    );
  }
);

MovieList.whyDidYouRender = true;
export default MovieList;

const Container = styled.div`
  align-content: flex-start;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  overflow-x: hidden;
  width: 100%;

  @media screen and (min-width: 420px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 620px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: 820px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1020px) {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }
`;
