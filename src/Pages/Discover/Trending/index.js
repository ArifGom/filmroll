import React, { useCallback, useState } from 'react';

import MovieList from 'Components/MovieList';
import { getPopularMovies } from 'Store/movies/apiWrapper';

const Trending = React.memo(
  props => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const loadMore = useCallback(() => {
      setIsLoading(true);

      getPopularMovies(page).then(res => {
        setMovies(movies => [...movies, ...res.results]);
        setPage(page => page + 1);
        setTimeout(() => setIsLoading(false), 200);
      });
    }, [page]);

    return (
      <MovieList
        movies={movies}
        loadMore={loadMore}
        id={'Trending'}
        isLoading={isLoading}
      />
    );
  },
  (prev, next) => {
    return prev.label === next.label;
  }
);

export default Trending;
