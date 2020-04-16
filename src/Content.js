import React, { Suspense, lazy, useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import Discover from 'Pages/Discover/Discover';
import MovieDetail from 'Pages/MovieDetail';
import MovieDetailModal from 'Pages/MovieDetail/MovieDetailModal';
import { RedCircle } from 'Components/Navbar/Logo/Logo';
import styled from 'styled-components';

const SearchResults = lazy(() => import('Pages/SearchResults'));
const MyMovies = lazy(() => import('Pages/MyMovies/MyMovies'));

const Content = () => {
  const currentLocation = useLocation();
  const [previousLocation, setPreviousLocation] = useState(currentLocation);
  useEffect(() => {
    if (!currentLocation.isModal) {
      setPreviousLocation(currentLocation);
    }
    return () => {};
  }, [currentLocation]);

  return (
    <Container>
      <Suspense
        fallback={
          <div>
            <RedCircle />
          </div>
        }
      >
        <Switch location={previousLocation}>
          <Route exact path="/" component={Discover} />
          <Route exact path="/discover" component={Discover} />
          <Route
            exact
            path="/discover/trending"
            render={props => <Discover page={'Trending'} />}
          />

          <Route
            exact
            path="/discover/upcoming"
            render={props => <Discover {...props} page={'Upcoming'} />}
          />
          <Route
            exact
            path="/discover/explore"
            render={props => <Discover {...props} page={'Explore'} />}
          />
          <Route exact path="/my_movies" component={MyMovies} />
          <Route
            exact
            path="/my_movies/watchlist"
            render={props => <MyMovies {...props} page={'Watchlist'} />}
          />
          <Route
            exact
            path="/my_movies/recommended"
            render={props => <MyMovies {...props} page={'Recommended'} />}
          />
          <Route
            exact
            path="/my_movies/my_ratings"
            render={props => <MyMovies {...props} page={'My Ratings'} />}
          />

          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/search/:query" component={SearchResults} />
        </Switch>
        {currentLocation &&
          currentLocation.isModal &&
          previousLocation !== currentLocation && (
            <Route
              exact
              path="/movie/:id"
              render={props => (
                <MovieDetailModal
                  {...props}
                  previousLocation={previousLocation}
                />
              )}
            />
          )}
      </Suspense>
    </Container>
  );
};

export default Content;

const Container = styled.div`
  scroll-behavior: smooth;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  padding: 80px 0px;
  max-width: 1200px;
  width: 99vw;
  @media screen and (max-width: 620px) {
    padding: 50px 0px;
  }
`;
