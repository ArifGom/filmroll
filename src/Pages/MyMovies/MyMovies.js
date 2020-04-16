import MoviesPage from 'Components/MoviesPage/MoviesPage';
import MyRatings from 'Pages/MyMovies/MyRatings';
import React from 'react';
import Recommendations from 'Pages/MyMovies/Recommendations';
import Watchlist from 'Pages/MyMovies/Watchlist';
import { withRouter } from 'react-router-dom';

const MyMovies = ({ page = 'My Ratings', history }) => {
  const urlFromSelected = selected => {
    switch (selected) {
      case 'My Ratings':
        return '/my_movies/my_ratings';

      case 'Watchlist':
        return '/my_movies/watchlist';

      case 'Recommended':
        return '/my_movies/recommended';

      default:
        break;
    }
  };
  const onSelect = selected => {
    history.push(urlFromSelected(selected));
  };
  return (
    <MoviesPage page={page} onSelect={onSelect}>
      <Recommendations label={'Recommended'} />
      <Watchlist label={'Watchlist'} />
      <MyRatings label={'My Ratings'} />
    </MoviesPage>
  );
};

export default withRouter(MyMovies);
