import styled, { css } from 'styled-components';

const Plot = styled.div(
  ({ theme }) => css`
    ${theme.fontSize.s}
    font-weight: 400;
    color: ${theme.col.prim9};
    line-height: 1.8;
    letter-spacing: 1px;
    max-width: 600px;
  `
);

export default Plot;
