import React from 'react';
import styled, { css } from 'styled-components';

const Wrapper = styled.button`
  cursor: pointer;
  height: 50px;
  border: none;
  background: transparent;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Line = styled.span(
  ({ isMenu, theme, position }) => css`
    width: 30px;
    height: ${isMenu ? 2 : 4}px;
    background-color: ${isMenu ? theme.col.prim9 : theme.col.accent5};

    margin: 4px 0px;

    transition: all 0.4s ease-in-out;
    ${!isMenu &&
      position === 'top' &&
      css`
        transform: translateY(12px) rotate(45deg);
      `};
    ${!isMenu &&
      position === 'middle' &&
      css`
        opacity: 0;
      `};
    ${!isMenu &&
      position === 'bottom' &&
      css`
        transform: translateY(-12px) rotate(-45deg);
      `};
  `
);

export const Hamburger = ({
  isMenu = true,
  onClick,
  ariaLabel = 'menu button',
}) => {
  return (
    <Wrapper onClick={onClick} aria-label={ariaLabel}>
      <Line isMenu={isMenu} position={'top'} />
      <Line isMenu={isMenu} position={'middle'} />
      <Line isMenu={isMenu} position={'bottom'} />
    </Wrapper>
  );
};
