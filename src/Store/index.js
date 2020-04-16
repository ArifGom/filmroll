import { createStore } from 'redux';

import reducer from './reducer';

const getPersistedState = () => {
  const state = JSON.parse(localStorage.getItem('root'));
  if (state !== null) return [reducer, state];
  else return [reducer];
};

export const store = createStore(
  ...getPersistedState(),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  localStorage.setItem('root', JSON.stringify(store.getState()));
});
export default { store };
