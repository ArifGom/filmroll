import styled, { css } from 'styled-components';

const Poster = styled.img(
  ({ theme }) => css`
    width: 33vw;
    max-width: 185px;
    border: 1px solid ${theme.col.gray5};
    border-radius: 2px;

    @media screen and (max-width: 820px) {
      display: none;
    }
  `
);

export default Poster;
