import styled, { css } from 'styled-components';

export const SearchContainer = styled.div(
  ({ theme, show }) => css`
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    border-radius: 10px;
    flex-shrink: 5;
    max-width: 300px;
    transition: all 200ms;

    padding: 2px 10px;
    background-color: ${show ? theme.col.prim9 : 'none'};
  `
);

export const SearchInput = styled.input.attrs({
  type: 'text',
})(
  ({ theme, show }) => css`
    background: none;
    border: none;
    padding: 1px;
    outline: none;
    width: ${show ? '220px' : '0px'};
    height: 100%;
    transition: all 200ms linear;

    color: ${show ? theme.col.prim1 : theme.col.prim9};
    ${theme.fontSize.m}
    font-weight: 600;
  `
);
