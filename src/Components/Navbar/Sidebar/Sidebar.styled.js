import styled, { css } from 'styled-components';

export const SidebarStyled = styled.div(
  ({ theme, open, shadow }) => css`
    z-index: 2;
    position: fixed;
    display: none;
    @media screen and (max-width: 820px) {
      display: flex;
    }
    top: 0;
    left: 0;
    bottom: 0;
    will-change: transform;
    transition: transform 0.3s ease-out;
    padding: 50px 20px;
    overflow: ${open ? 'auto' : 'visible'};
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    max-width: 90vw;
    transform: translateX(${open ? '0' : '-100'}%);
    color: hsl(200, 20%, 95%);

    font-weight: 200;
    background-color: ${theme.col.prim3};
    box-shadow: ${shadow ? '2px 0px 10px rgba(0, 0, 0, 0.9)' : 0};
  `
);

export const MenuToggle = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-self: flex-end;
  transition: transform 0.3s ease-out;

  transform: translateX(${props => (props.open ? '-10' : '130')}%);
`;

export const SpacerSidebar = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
`;

export const SidebarNavList = styled.ul`
  margin: auto;
  & > li {
    margin: 30px auto;
  }
`;
