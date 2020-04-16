import * as movieActions from 'Store/movies';

import Container, {
  MainArea,
  UserActionsArea,
} from 'Pages/MovieDetail/Container.styled';
import React, { useEffect, useState } from 'react';
import {
  getMovie,
  heroUrl,
  heroUrlSmall,
  posterURI,
} from 'Store/movies/apiWrapper';

import Cast from './Cast';
import Crew from './Crew';
import Details from './Details';
import Hero from 'Pages/MovieDetail/Hero';
import Modal from 'UiLib/Modal';
import Plot from 'Pages/MovieDetail/Plot';
import Poster from 'Pages/MovieDetail/Poster';
import RecommendedMovies from './RecommendedMovies';
import ResponsiveIframe from 'UiLib/ResponsiveIframe';
import TabbedArea from 'UiLib/TabbedArea';
import TrailerBtn from './TrailerBtn';
import UserRating from './UserRating';
import WatchlistBtn from './WatchlistBtn';
import { connect } from 'react-redux';

const MovieDetail = ({ match, rate, toggleWatchlist, movies, isModal }) => {
  const [movie, setMovie] = useState(0);
  const [trailerModalIsOpen, setTrailerModalIsOpen] = useState(false);
  const [userRating, setUserRating] = useState(null);
  useEffect(() => {
    getMovie(match.params.id).then(res => {
      setMovie(res);
    });

    return () => {};
  }, [match.params.id]);

  useEffect(() => {
    if (movie.id)
      setUserRating(
        movies.ratedMovies.includes(movie.id)
          ? movies.movies[movie.id].rating
          : null
      );
  }, [movie.id, movies.movies, movies.ratedMovies]);

  const changeRating = rating => {
    rate(movie, rating);
    setUserRating(rating);
  };

  const getTrailer = () => {
    const trailer = movie.videos.results.find(
      video => video.type === 'Trailer'
    );
    if (trailer) return trailer.key;
    if (movie.videos.results[0]) return movie.videos.results[0].key;
    return undefined;
  };

  const openTrailer = () => {
    setTrailerModalIsOpen(true);
  };

  const closeTrailer = () => {
    setTrailerModalIsOpen(false);
  };
  const onClickWatchlist = () => {
    toggleWatchlist(movie);
  };

  const getDirector = () => {
    if (movie.credits && movie.credits.crew) {
      const director = movie.credits.crew.find(crew => crew.job === 'Director');
      if (director)
        return movie.credits.crew.find(crew => crew.job === 'Director').name;
    }

    return '';
  };
  if (movie !== 0)
    return (
      <Container>
        <Modal
          open={trailerModalIsOpen}
          onClose={closeTrailer}
          ariaLabel={`${movie.name} - Trailer`}
        >
          <ResponsiveIframe>
            <iframe
              src={`https://www.youtube.com/embed/${getTrailer()}`}
              frameBorder="0"
              allowFullScreen={true}
              tabIndex="-1"
              title="Trailer"
            />
          </ResponsiveIframe>
        </Modal>
        <Hero
          heroUrl={heroUrl(movie.backdrop_path)}
          placeholderUrl={heroUrlSmall(movie.backdrop_path)}
          title={movie.title}
          rating={movie.vote_average}
          director={getDirector()}
          year={movie.release_date.slice(0, 4)}
          isModal={isModal}
        />

        <MainArea isModal={isModal}>
          <Poster src={posterURI(movie.poster_path)} />
          <TabbedArea>
            <Plot handle={'Plot'}>{movie.overview}</Plot>
            {movie.credits && (
              <Cast handle={'Cast'} cast={movie.credits.cast} />
            )}
            {movie.credits && (
              <Crew handle={'Crew'} crew={movie.credits.crew} />
            )}
            <Details
              handle={'Details'}
              genres={movie.genres}
              runtime={movie.runtime}
              companies={movie.production_companies}
              countries={movie.production_countries}
              budget={movie.budget}
              revenue={movie.revenue}
            />
          </TabbedArea>
          <UserActionsArea>
            <UserRating onChange={changeRating} rating={userRating} />
            <WatchlistBtn
              onChange={onClickWatchlist}
              added={movies.watchlist.includes(movie.id)}
            />
            <TrailerBtn onClick={openTrailer} available={getTrailer()} />
          </UserActionsArea>
        </MainArea>
        <RecommendedMovies
          movies={movie.recommendations.results.slice(0, 10)}
          isModal={isModal}
        />
      </Container>
    );
  else return <Container />;
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
  };
};

const mapDispatchToProps = {
  ...movieActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieDetail);
