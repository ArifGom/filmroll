import React, { useCallback, useState } from 'react';

import MovieList from 'Components/MovieList';
import { getUpcomingMovies } from 'Store/movies/apiWrapper';

const Upcoming = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    getUpcomingMovies(page).then(res => {
      if (page === 1) setMovies([...res.results]);
      else setMovies(movies => [...movies, ...res.results]);
      setPage(page => page + 1);
      setTimeout(() => {
        setIsLoading(false);
      }, 200);
    });
  }, [page]);

  return (
    <MovieList
      movies={movies}
      loadMore={loadMore}
      id={'Upcoming'}
      isLoading={isLoading}
    />
  );
};

export default Upcoming;
