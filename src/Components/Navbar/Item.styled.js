import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const ItemStyled = styled(NavLink)(
  ({ theme }) => css`
    text-decoration: none;

    letter-spacing: 1px;
    ${theme.fontSize.l}
    font-weight: 400;
    color: ${theme.col.prim9};
    margin: 20px;
    text-transform: uppercase;
    transition: all ease-in-out 200ms;
    &.active {
      text-shadow: 0px 0px 1px ${theme.col.prim9};
      border-bottom: 1px solid ${theme.col.accent5};
    }
    &:hover {
      color: crimson;
      text-shadow: none;
      transform: scale(1.1);
    }
    @media screen and (max-width: 620px) {
      ${theme.fontSize.m}
    }
  `
);

export default ItemStyled;
