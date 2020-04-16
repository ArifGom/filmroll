const initialState = {
  movies: {},
  watchlist: [],
  blacklist: [],
  ratedMovies: [],
  recommended: [],
};

const RATE = 'RATE_MOVIE';
const TOGGLE_WATCHLIST = 'TOGGLE_WATCHLIST';
const TOGGLE_BLACKLIST = 'TOGGLE_BLACKLIST';

export const rate = (movie, rating) => {
  return { type: RATE, payload: { movie, rating } };
};

export const toggleWatchlist = movie => {
  return { type: TOGGLE_WATCHLIST, payload: { movie } };
};

export const toggleBlacklist = movie => {
  return { type: TOGGLE_BLACKLIST, payload: { movie } };
};

const toggleList = (state, movie, key) => {
  if (!state.movies[movie.id]) {
    return {
      ...state,
      movies: { ...state.movies, [movie.id]: { ...movie, [key]: true } },
      [key]: [...state[key], movie.id],
    };
  } else {
    const movies = {
      ...state.movies,
      [movie.id]: {
        ...state.movies[movie.id],
        [key]: !state.movies[movie.id][key],
      },
    };
    if (state[key].includes(movie.id))
      return {
        ...state,
        movies,
        [key]: state[key].filter(item => item !== movie.id),
      };
    else
      return {
        ...state,
        movies,
        [key]: [...state[key], movie.id],
      };
  }
};

const rateMovie = (state, movie, rating) => {
  let newState = { ...state };
  if (!newState.movies[movie.id]) {
    newState = {
      ...newState,
      movies: {
        ...newState.movies,
        [movie.id]: { ...movie, rating },
      },
      ratedMovies: [...newState.ratedMovies, movie.id],
    };
  } else {
    if (newState.ratedMovies.includes(movie.id))
      newState = {
        ...newState,
        movies: {
          ...newState.movies,
          [movie.id]: { ...newState.movies[movie.id], rating },
        },
      };
    else
      newState = {
        ...newState,
        movies: {
          ...newState.movies,
          [movie.id]: { ...newState.movies[movie.id], rating },
        },
        ratedMovies: [...newState.ratedMovies, movie.id],
      };
  }
  if (rating >= 7)
    return updateRecommendations2(
      newState,
      movie.recommendations.results.slice(0, 20),
      rating - movie.vote_average
    );
  else return newState;
};

const updateRecommendations2 = (state, recommendations, relRating) => {
  let movies = { ...state.movies };
  let recommended = [...state.recommended];
  recommendations.forEach(movie => {
    if (!movies[movie.id]) {
      movies = {
        ...movies,
        [movie.id]: {
          ...movie,
          relRecRatings: [relRating],
          predictedRating: movie.vote_average + relRating,
        },
      };
    } else {
      let relRecRatings = [];
      if (movies[movie.id].relRecRatings)
        relRecRatings = [...movies[movie.id].relRecRatings, relRating];
      else relRecRatings = [relRating];
      movies = {
        ...movies,
        [movie.id]: {
          ...movies[movie.id],
          relRecRatings,
          predictedRating:
            movie.vote_average +
            relRecRatings.reduce((a, b) => a + b, 0) / relRecRatings.length,
        },
      };
    }
    if (!recommended.includes(movie.id))
      recommended = [...recommended, movie.id];
  });
  return { ...state, movies, recommended };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case TOGGLE_WATCHLIST:
      return toggleList(state, action.payload.movie, 'watchlist');
    case TOGGLE_BLACKLIST:
      return toggleList(state, action.payload.movie, 'blacklist');
    case RATE:
      return rateMovie(state, action.payload.movie, action.payload.rating);
    default:
      return state;
  }
}
