import styled, { css } from 'styled-components';

import React from 'react';

const SemanticRatingIndicator = ({ value }) => {
  return (
    <Container>
      <SemanticValue active={value > 9}>Brilliant</SemanticValue>
      <SemanticValue active={value > 7 && value <= 9}>Great</SemanticValue>
      <SemanticValue active={value >= 6 && value <= 7}>Good</SemanticValue>
      <SemanticValue active={value > 4 && value <= 5}>Meh</SemanticValue>
      <SemanticValue active={value > 2 && value <= 4}>Bad</SemanticValue>
      <SemanticValue active={value > 0 && value <= 2}>Awful</SemanticValue>
    </Container>
  );
};
export default SemanticRatingIndicator;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  min-height: 100%;
  margin: 0px 10px;
`;

const SemanticValue = styled.span(
  ({ active, theme }) => css`
    ${theme.fontSize.m}
    letter-spacing: 1px;
    flex: 1;
    transition: all 200ms ease-in-out;
    ${active
      ? css`
          color: ${theme.col.prim9};
          font-weight: 700;
        `
      : css`
          color: ${theme.col.gray5};
          font-weight: 400;
        `};
  `
);
