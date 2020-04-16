import styled, { css, keyframes } from 'styled-components';

import React from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`;

const BlueCircle = styled.div`
  background-color: hsl(220, 100%, 40%);
  width: 50px;
  height: 50px;
  border-radius: 50px;

  transform: translateX(30px);
`;

const rotation = keyframes`
  from{
      
      transform: rotate(0deg);
  }
  to{
   
      transform: rotate(359deg);
  }`;

export const RedCircle = styled.div`
  background-color: crimson;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  box-shadow: 0 0 0 3px crimson;

  mix-blend-mode: screen;
  border: 8px dotted black;
  animation: ${rotation} 100s infinite linear;
  &:hover {
    animation: ${rotation} 10s infinite linear;
  }
`;

const Title = styled.span(
  ({ theme }) => css`
    color: white;
    ${theme.fontSize.xxxl}
    font-weight: 800;
    text-shadow: 0px 0px 2px white;
  `
);

const Logo = () => {
  return (
    <Container>
      <Title>film Roll</Title>
      <BlueCircle />
      <RedCircle />
    </Container>
  );
};

export default Logo;
