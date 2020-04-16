import styled, { css } from 'styled-components';

const Title = styled.div(
  ({ theme }) => css`
    ${theme.fontSize.responsive(420, 1200, 22, 36)};
    font-weight: 600;
    letter-spacing: 2px;
    max-width: 90vw;
    color: ${theme.col.prim9};
    padding: 2px;
    text-align: center;
    width: 100%;
    text-shadow: 0px 0px 1px white;
  `
);

export default Title;
