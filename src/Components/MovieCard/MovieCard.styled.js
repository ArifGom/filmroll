import styled, { css } from 'styled-components';

export const Container = styled.a(
  ({ theme }) => css`
    background-size: cover;
    border-radius: 2px;
    box-shadow: 0 0 0px 1px rgb(51, 68, 77);
    color: ${theme.col.prim9};
    cursor: pointer;
    height: 0;
    margin: 15px 5px;
    outline: none !important;
    overflow: hidden;
    padding-bottom: calc(100% / (0.67));
    position: relative;
    text-decoration: none;
    transition: all 200ms;
    visibility: hidden;

    &:focus {
      box-shadow: 0 0 3px 3px ${theme.col.accent5};
    }

    &:hover {
      box-shadow: 0 0 2px 2px ${theme.col.accent5};
    }
  `
);

export const BottomOverlay = styled.div(
  ({ theme }) => css`
    ${theme.fontSize.s}

    align-items: stretch;
    background: linear-gradient(
      to top,
      hsla(220, 23.53%, 20%, 0.9) 0%,
      hsla(220, 23.53%, 20%, 0) 100%
    );

    bottom: 0;
    display: flex;
    flex-direction: column;
    font-weight: 600;
    height: 50%;

    justify-content: flex-end;
    left: 0;
    overflow: hidden;
    position: absolute;
    right: 0;
    user-select: none;
  `
);

export const TopOverlay = styled.div`
  align-items: flex-start;
  background: linear-gradient(
    to bottom,
    hsla(220, 23.53%, 20%, 0.9) 0%,
    hsla(220, 23.53%, 20%, 0) 100%
  );
  display: flex;
  flex-direction: row;

  justify-content: space-between;
  opacity: 0.8;
  overflow: hidden;
  padding: 7px;

  user-select: none;
`;

export const CardTitle = styled.span(
  ({ theme }) => css`
    ${theme.fontSize.s}

    display: block;
    letter-spacing: 1px;
    text-align: center;
    user-select: none;
  `
);

export const CardBottomRow = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  opacity: 0.7;
  padding: 10px;
`;

export const BookmarkTop = styled.span`
  cursor: pointer;
  margin-top: -7px;
  transform: scale(1.2);
  transition: transform 100ms ease-in;

  &:hover {
    transform: scaleY(1.5) scaleX(1.2);
  }
`;

export const MyRating = styled.span`
  font-weight: 600;
`;
