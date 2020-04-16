import NavbarStyled, {
  Spacer,
  Title,
  TopMenu,
  TopMenuSmall,
} from 'Components/Navbar/Navbar.styled';
import React, { useState } from 'react';

import Item from 'Components/Navbar/Item';
import Logo from 'Components/Navbar/Logo/Logo';
import Search from 'Components/Navbar/Search/index';
import Sidebar from 'Components/Navbar/Sidebar';
import { withRouter } from 'react-router-dom';

const Navbar = ({ location }) => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  const getLabel = path => {
    switch (path) {
      case '/':
        return 'Discover';
      case '/discover':
        return 'Discover';
      case '/discover/upcoming':
        return 'Upcoming';
      case '/discover/explore':
        return 'Explore';
      case '/discover/trending':
        return 'Trending';

      case '/my_movies/recommended':
        return 'Recommended';
      case '/my_movies/my_ratings':
        return 'My Ratings';
      case '/my_movies/watchlist':
        return 'Watchlist';

      default:
        break;
    }
  };
  return (
    <NavbarStyled>
      <Sidebar />
      <TopMenuSmall>
        {!searchBarOpen && <Title>{getLabel(location.pathname)}</Title>}
        <Spacer />
        <Search
          setSearchBarOpen={setSearchBarOpen}
          searchBarOpen={searchBarOpen}
        />
      </TopMenuSmall>
      <TopMenu>
        <Logo />
        <Item route={'/discover'} label={'Discover'} />

        <Item route={'/my_movies'} label={'My Movies'} />

        <Spacer />
        <Search setSearchBarOpen={setSearchBarOpen} />
      </TopMenu>
    </NavbarStyled>
  );
};

export default withRouter(Navbar);
