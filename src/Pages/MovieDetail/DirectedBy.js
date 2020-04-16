import React from 'react';
import styled, { css } from 'styled-components';

const DirectedByIntro = styled.div(
  ({ theme }) => css`
    ${theme.fontSize.s}
    font-weight: 600;
    letter-spacing: 1px;

    text-align: center;
  `
);
const DirectedByName = styled.div(
  ({ theme }) => css`
    ${theme.fontSize.m}
    font-weight: 600;
    letter-spacing: 1px;

    text-align: center;
  `
);

const DirectedBy = ({ name }) => {
  return (
    <div>
      <DirectedByIntro>Directed by</DirectedByIntro>
      <DirectedByName>{name}</DirectedByName>
    </div>
  );
};

export default DirectedBy;
