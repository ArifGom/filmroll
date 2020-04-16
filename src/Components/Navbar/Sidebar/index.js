import {
  MenuToggle,
  SidebarNavList,
  SidebarStyled,
  SpacerSidebar,
} from 'Components/Navbar/Sidebar/Sidebar.styled';
import React, { useRef, useState } from 'react';

import { Hamburger } from 'UiLib/Icons/Hamburger';
import Item from 'Components/Navbar/Item';
import Logo from 'Components/Navbar/Logo/Logo';
import useOnClickOutside from 'Hooks/useOnClickOutside';

const Sidebar = ({ children }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const toggleClicked = () => {
    setOpen(!open);
  };
  useOnClickOutside(() => setOpen(false), containerRef.current, open, true);
  const closeSidebar = () => {
    setTimeout(() => setOpen(false), 200);
  };
  return (
    <SidebarStyled
      open={open}
      aria-hidden={!open}
      shadow={open}
      ref={containerRef}
    >
      <MenuToggle open={open} onClick={toggleClicked}>
        <Hamburger isMenu={!open} />
      </MenuToggle>
      <Logo size={64} />

      <SidebarNavList>
        <Item
          route={'/discover/trending'}
          label={'Trending'}
          closeSidebar={closeSidebar}
        />
        <Item
          route={'/discover/upcoming'}
          label={'Upcoming'}
          closeSidebar={closeSidebar}
        />
        <Item
          route={'/discover/explore'}
          label={'Explore'}
          closeSidebar={closeSidebar}
        />
        <Item
          route={'/my_movies/my_ratings'}
          label={'My Ratings'}
          closeSidebar={closeSidebar}
        />
        <Item
          route={'/my_movies/watchlist'}
          label={'Watchlist'}
          closeSidebar={closeSidebar}
        />
        <Item
          route={'/my_movies/recommended'}
          label={'Recommended'}
          closeSidebar={closeSidebar}
        />
      </SidebarNavList>
    </SidebarStyled>
  );
};

export default Sidebar;
