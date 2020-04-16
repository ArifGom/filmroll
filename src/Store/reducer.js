import { combineReducers } from 'redux';
import filters from 'Store/filters';
import movies from './movies/index';
export default combineReducers({ movies, filters });
