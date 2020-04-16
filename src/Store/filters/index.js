const initialState = {
  explore: {
    dateRange: { gt: 1950, lt: 2019 },
    ratingRange: { gt: 0, lt: 10 },
    genres: { id: null, name: 'All Genres' },
    sortBy: { id: 'popularity.desc', name: 'Most Popular' },
  },
  myRatings: {
    dateRange: { gt: 1900, lt: 2019 },
    ratingRange: { gt: 0, lt: 10 },
    genres: { id: null, name: 'All Genres' },
    sortBy: { id: 'myRating.desc', name: 'My Highest Rated' },
  },
  recommended: {
    dateRange: { gt: 1900, lt: 2019 },
    ratingRange: { gt: 1, lt: 10 },
    genres: { id: null, name: 'All Genres' },
    sortBy: { id: 'predictedRating.desc', name: 'Pre. Rating Desc' },
  },
  watchlist: {
    dateRange: { gt: 1900, lt: 2019 },
    ratingRange: { gt: 0, lt: 10 },
    genres: { id: null, name: 'All Genres' },
    sortBy: { id: 'popularity.desc', name: 'Most Popular' },
  },
};

const UPDATE_FILTER = 'UPDATE_FILTER';
const RESET_FILTER = 'RESET_FILTER';

export const updateFilters = (filter, id) => {
  return { type: UPDATE_FILTER, payload: { filter, id } };
};

export const resetFilters = id => {
  return { type: RESET_FILTER, payload: { filter: initialState[id], id } };
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE_FILTER:
      return { ...state, [action.payload.id]: action.payload.filter };
    case RESET_FILTER:
      return { ...state, [action.payload.id]: action.payload.filter };

    default:
      return state;
  }
}
