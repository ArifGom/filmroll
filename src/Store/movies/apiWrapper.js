const API_KEY = 'c6059e269e851c57ac6a95241f0b5158';
const BASE_URL = 'https://api.themoviedb.org/3/';

const getApi = async path => {
  try {
    const response = (await fetch(
      `${BASE_URL}${path}&api_key=${API_KEY}`
    )).json();
    return response;
  } catch (error) {
    return error;
  }
};

export const getPopularMovies = (page = 1) => {
  const list = getApi(`movie/popular?language=en-US&page=${page}`);
  return list;
};
export const getTrendingMovies = (page = 1) => {
  const list = getApi(`trending/movie/week?language=en-US&page=${page}`);

  return list;
};

export const getTopRatedMovies = (page = 1) => {
  const list = getApi(`movie/top_rated?page=${page}`);

  return list;
};

export const getUpcomingMovies = (page = 1) => {
  const list = getApi(`movie/upcoming?language=en-US&page=${page}&region=US`);

  return list;
};

export const getMovie = async movieId => {
  const movie = getApi(
    `movie/${movieId}?language=en-US&append_to_response=similar,recommendations,images,videos,keywords,credits,external_ids`
  );
  return movie;
};

export const queryMovie = async query => {
  const list = getApi(`search/movie?query=${query}`);
  return list;
};

export const getMovieByImdbId = id => {
  return getApi(`find/${id}?external_source=imdb_id`);
};

export const heroUrlSmall = path => `https://image.tmdb.org/t/p/w300${path}`;
export const heroUrl = path => `https://image.tmdb.org/t/p/w1280${path}`;
export const posterURI = path => `https://image.tmdb.org/t/p/w185${path}`;

export const discoverMovies = ({
  page = 1,
  sortBy = 'popularity.desc',
  dateRange = { gt: 1900, lt: 2020 },
  voteRange = { gt: 0 },
  ratingRange = { gt: 0 },
  genres = undefined,
}) => {
  let path = 'discover/movie?';
  path = `${path}sort_by=${sortBy}`;

  path = `${path}&primary_release_date.gte=${dateRange.gt}-01-01`;

  path = `${path}&primary_release_date.lte=${dateRange.lt}-12-31`;
  if (voteRange.gt) path = `${path}&vote_count.gte=${voteRange.gt}`;
  if (voteRange.lt) path = `${path}&vote_count.lte=${dateRange.lt}`;
  if (ratingRange.gt) path = `${path}&vote_average.gte=${ratingRange.gt}`;
  if (ratingRange.lt) path = `${path}&vote_average.lte=${ratingRange.lt}`;
  if (genres) path = `${path}&with_genres=${genres}`;

  //if (cast) path = `${path}&with_cast=${cast}`;
  path = `${path}&include_adult=false&page=${page}`;
  const list = getApi(path);
  return list;
};
