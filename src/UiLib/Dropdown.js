import React, { useRef } from 'react';

import styled, { css } from 'styled-components';

const Dropdown = ({ children, isOpen, onOpen, onClose, label, value }) => {
  const ref = useRef(null);
  const onClick = () => {
    isOpen ? onClose() : onOpen();
  };
  return (
    <Container isOpen={isOpen} ref={ref}>
      <Selector onClick={onClick}>
        <Label>{label}</Label>
        <Value>{value}</Value>
      </Selector>

      <DropdownItem isOpen={isOpen}>{children}</DropdownItem>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div(
  ({ theme, isOpen }) => css`
    color: hsl(200, 40%, 60%);
    background-color: ${isOpen ? theme.col.prim2 : theme.col.prim2};
    flex: 1;
    display: flex;
    flex-direction: column;

    justify-content: flex-start;
    align-items: stretch;
    &:hover {
      background-color: ${theme.col.prim3};
    }
    ${theme.fontSize.s}
    margin: 1px;
    padding: 10px 1px;
  `
);

const DropdownItem = styled.div(
  ({ theme, isOpen }) => css`
    display: ${isOpen ? 'block' : 'none'};
    background-color: ${theme.col.prim3};
    transition: all 300ms ease-in;

    @media screen and (max-width: 620px) {
      overflow-y: scroll;
      touch-action: pan-y;
      max-height: ${isOpen ? '300px' : '0px'};
    }
  `
);

const Selector = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  padding: 5px 10px;
  justify-content: space-between;
  align-items: stretch;
`;

const Label = styled.label`
  cursor: pointer;
`;
const Value = styled.label`
  color: white;
  cursor: pointer;
`;
