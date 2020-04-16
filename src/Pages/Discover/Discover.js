import Explore from './Explore';
import MoviesPage from 'Components/MoviesPage/MoviesPage';
import React from 'react';
import Trending from 'Pages/Discover/Trending';
import Upcoming from 'Pages/Discover/Upcoming';
import { useHistory } from 'react-router-dom';

function pageEqual(prevPage, nextPage) {
  return prevPage === nextPage;
}
const Discover = React.memo(({ page = 'Trending' }) => {
  const history = useHistory();
  const urlFromSelected = selected => {
    switch (selected) {
      case 'Trending':
        return '/discover/trending';

      case 'Upcoming':
        return '/discover/upcoming';

      case 'Explore':
        return '/discover/explore';

      default:
        break;
    }
  };
  const onSelect = selected => {
    history.push(urlFromSelected(selected));
  };
  return (
    <MoviesPage onSelect={onSelect} page={page}>
      <Trending label={'Trending'} />
      <Upcoming label={'Upcoming'} />
      <Explore label={'Explore'} />
    </MoviesPage>
  );
}, pageEqual);

export default Discover;
