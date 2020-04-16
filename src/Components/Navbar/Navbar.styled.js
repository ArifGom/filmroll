import styled, { css } from 'styled-components';

export const Spacer = styled.div`
  flex-grow: 10;
  flex-shrink: 10;
`;
const NavbarStyled = styled.nav(
  ({ theme }) => css`
    z-index: 10;
    background-color: ${theme.col.prim1};

    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    height: 80px;
    @media screen and (max-width: 820px) {
      height: 50px;
    }
  `
);
export const TopMenu = styled.ul`
  display: none;
  @media screen and (min-width: 821px) {
    display: flex;
    max-width: 1200px;
    padding: 10px;
    margin: auto;
    flex-direction: row;
    align-items: baseline;
    justify-content: space-around;
  }
  & > li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const Title = styled.div(
  ({ theme }) => css`
    color: ${theme.col.gray9};
    ${theme.fontSize.xxl}
    font-weight: 800;
    letter-spacing: 1px;
    text-align: center;
    flex-grow: 1000;
  `
);

export const TopMenuSmall = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: baseline;
  height: 100%;
  list-style-type: none;
  margin-left: 80px;
  padding: 10px;
  @media screen and (min-width: 821px) {
    display: none;
  }
`;

export default NavbarStyled;
