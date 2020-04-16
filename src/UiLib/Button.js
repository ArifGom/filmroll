import styled, { css } from 'styled-components';

const Button = styled.button(
  ({ theme }) => css`
    text-align: center;
    text-decoration: none;
    margin: 1px;
    background-color: ${theme.col.prim5};
    color: ${theme.col.prim9};
    padding: 0.5em 1.2em;
    cursor: pointer;
    ${theme.fontSize.s}
    &:hover {
      filter: contrast(130%);
    }
    &:disabled {
      cursor: default;
      background-color: ${theme.col.gray5};
      color: ${theme.col.gray5};
      &:hover {
        filter: none;
      }
    }
  `
);

export default Button;
