import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
  width: 100%;
`;

export const UserActionsArea = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;
    padding: 1px;
    min-width: 160px;

    @media screen and (max-width: 620px) {
      flex-direction: row;
      align-items: stretch;
      width: 100%;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 2;
      height: 50px;
      max-height: 50px;
      background-color: ${theme.col.prim2};
      border: 1px solid ${theme.col.gray5};
    }
  `
);

export const MainArea = styled.main`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-around;
  padding: 10px;
  @media only screen and (max-width: 620px) {
    flex-direction: column;
  }
`;

export default Container;
