import styled, { css } from 'styled-components';

export default styled.div(
  ({ theme }) => css`
    position: relative;
    padding-bottom: 56.25%;
    height: 0;
    overflow: hidden;
    margin-top: 5vh;
    width: 80vw;
    @media screen and (max-width: 620px) {
      width: 99vw;
    }
    & > iframe,
    & > embed,
    & > object {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `
);
