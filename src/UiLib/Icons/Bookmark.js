import React from 'react';
import styled from 'styled-components';

const SvgContainer = styled.svg`
  height: 24px;
  width: 32px;
`;

const Bookmark = ({ color = 'hsl(200, 0%, 80%)' }) => {
  return (
    <SvgContainer viewBox={'0 0 24 32'}>
      <polygon points={'0 0, 0 32, 12 20, 24 32, 24 0'} fill={color} />
    </SvgContainer>
  );
};

export default Bookmark;
