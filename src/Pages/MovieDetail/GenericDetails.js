import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
    letter-spacing: 1px;
    ${theme.fontSize.s}
    width: 100%;
  `
);

export const Row = styled.div(
  ({ theme, first }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;

    margin-top: ${first ? '10px' : 'none'};
    margin-bottom: 5px;
  `
);

export const Label = styled.span(
  ({ theme }) => css`
    flex: 1;
    max-width: 250px;
    color: ${theme.col.gray7};
  `
);

export const Value = styled.span(
  ({ theme }) => css`
    color: ${theme.col.gray9};
  `
);
