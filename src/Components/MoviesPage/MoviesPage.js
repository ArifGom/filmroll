import React, { useState } from 'react';

import styled, { css } from 'styled-components';

const MoviesPage = ({ onSelect, page = 'Trending', children }) => {
  const [hover, setHover] = useState('');

  return (
    <React.Fragment>
      <TopNav>
        {children.map(child => {
          return (
            <TabLink
              selected={page === child.props.label}
              hovering={hover === child.props.label}
              onClick={() => onSelect(child.props.label)}
              key={child.props.label}
              onPointerEnter={() => setHover(child.props.label)}
              onPointerLeave={() => setHover('')}
            >
              {child.props.label}
            </TabLink>
          );
        })}
      </TopNav>
      {children.map(child => page === child.props.label && child)}
    </React.Fragment>
  );
};

export default MoviesPage;

const TopNav = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 20px;
    margin: 10px;
    border-bottom: 1px solid ${theme.col.gray5};
    @media screen and (max-width: 620px) {
      display: none;
    }
  `
);

const TabLink = styled.div(
  ({ theme, selected, hovering }) => css`
    ${theme.fontSize.xs}
    text-decoration: none;
    letter-spacing: 1px;
    font-weight: 600;
    cursor: pointer;
    margin: 0px 10px;
    padding: 8px 14px;
    text-transform: uppercase;
    color: ${selected ? theme.col.gray9 : theme.col.gray7};
    border-radius: 10px;
    background-color: ${selected ? theme.col.sec5 : 'none'};
    box-shadow: ${'none'};
    transition: all ease-in 100ms;
    ${hovering &&
      !selected &&
      css`
        color: ${theme.col.gray9};
        background-color: ${theme.col.accent5};
        transform: translateY(-2px);
      `}
  `
);
