import React from 'react';
import styled, { css } from 'styled-components';

const Icon = styled.svg(
  ({ theme, open }) => css`
    flex: none;
    transition: all 0.25s;
    width: 32px;
    height: 32px;
    cursor: pointer;
    .search-circle {
      fill: ${open ? theme.col.prim1 : theme.col.prim9};
    }
    .search-grip {
      stroke: ${open ? theme.col.prim1 : theme.col.prim9};
    }
    @media screen and (max-width: 820px) {
      width: 24px;
      height: 24px;
    }
    &:hover {
      transform: rotateZ(10deg);
    }
    &:hover .search-circle {
      fill: crimson;
      transition: all 0.25s;
    }
    &:hover .search-grip {
      stroke: crimson;
      transition: all 0.25s;
    }
  `
);

function SearchIcon({ className, fill, open }) {
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      open={open}
    >
      <path
        className="search-circle"
        fill="#BBC"
        d="M13.08 1A11.97 11.97 0 0 0 1.11 12.97a11.97 11.97 0 0 0 11.97 11.98 11.97 11.97 0 0 0 11.97-11.98A11.97 11.97 0 0 0 13.08 1zm.12 2.01a10.6 10.6 0 0 1 7.6 3.77c6.9 7.43-2.89 19.77-12.18 15.38-10.04-3.4-7.18-19 3.32-19.13.42-.03.84-.04 1.26-.02z"
      />
      <path
        className="search-grip"
        fill="none"
        stroke="#BBC"
        strokeWidth="1.8"
        d="M18.56 23.03l2.62 5.22c.6 1.21.83 1.64 1.75 1.16s2.54-1.86 3.22-2.65c.68-.8.41-1-.62-1.8l-4.63-3.52"
      />
    </Icon>
  );
}

export default SearchIcon;
