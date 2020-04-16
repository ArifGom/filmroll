import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: process.env.REACT_APP_API_KEY,
    language: 'en-US',
  },
});

export const moviesApi = {
  nowPlaying: () => api.get('movie/now_playing'),
  popular: () => api.get('movie/popular'),
  detail: id =>
    api.get(`movie/${id}`, {
      params: {
        append_to_response:
          'similar,recommendations,images,videos,keywords,credits,external_ids',
      },
    }),
  search: term =>
    api.get('search/movie', {
      params: {
        query: encodeURIComponent(term),
      },
    }),
};
