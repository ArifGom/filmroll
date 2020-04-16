import * as movieActions from 'Store/movies';

import {
  BookmarkTop,
  BottomOverlay,
  CardBottomRow,
  CardTitle,
  Container,
  MyRating,
  TopOverlay,
} from 'Components/MovieCard/MovieCard.styled';
import React, { useEffect, useRef, useState } from 'react';
import { withRouter } from 'react-router-dom';

import Bookmark from 'UiLib/Icons/Bookmark';
import { connect } from 'react-redux';
import useOnScreen from 'Hooks/onScreen';

const getMyRating = (movies, id) => {
  if (movies[id] && movies[id].rating) return movies[id].rating;
  else return null;
};

const MovieCard = ({
  posterURI,
  title,
  releaseYear,
  rating,
  history,
  id,
  movie,
  movies,
  watchlist,
  toggleWatchlist,
}) => {
  const ref = useRef(null);
  const inView = useOnScreen(ref, '50px');
  const [myRating, setMyRating] = useState(null);

  useEffect(() => {
    if (inView) {
      ref.current.style.backgroundImage = `url(${posterURI})`;
      ref.current.style.visibility = 'visible';
    }
  }, [inView, posterURI]);

  useEffect(() => {
    setMyRating(getMyRating(movies, id));
    return () => {};
  }, [id, movies]);

  const onEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      history.push({ pathname: `/movie/${id}`, isModal: true });
    }
  };

  const onClick = e => {
    e.preventDefault();

    history.push({ pathname: `/movie/${id}`, isModal: true });
  };

  const onBookmarkClick = e => {
    e.stopPropagation();
    e.preventDefault();
    toggleWatchlist(movie);
  };

  return (
    <Container
      poster={posterURI}
      onClick={onClick}
      onKeyDown={onEnter}
      ref={ref}
      data-cy={'movie-card'}
      data-key={id}
      tabIndex={0}
      href={`/movie/${id}`}
    >
      <link rel="preload" href={posterURI} as="image" />

      <TopOverlay>
        <BookmarkTop onClick={onBookmarkClick}>
          <Bookmark
            color={
              watchlist.includes(id) ? 'crimson' : 'hsla(200,20%,95%, 0.7)'
            }
          />
        </BookmarkTop>
        {myRating && (
          <MyRating>
            <span style={{ color: 'crimson' }}>&#9733;</span>
            <span>{parseFloat(myRating).toFixed(1)}</span>
          </MyRating>
        )}
      </TopOverlay>
      <BottomOverlay data-cy={'movie-card-overlay'}>
        <CardTitle data-cy={'movie-card-title'}>{title}</CardTitle>
        <CardBottomRow>
          <span>{releaseYear}</span>
          <span>&#9733; {rating > 0 && parseFloat(rating).toFixed(1)}</span>
        </CardBottomRow>
      </BottomOverlay>
    </Container>
  );
};

//

const mapStateToProps = state => {
  return {
    watchlist: [...state.movies.watchlist],
    movies: state.movies.movies,
  };
};

const mapDispatchToProps = {
  ...movieActions,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(MovieCard));
