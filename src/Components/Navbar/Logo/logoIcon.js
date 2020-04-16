import React, { useRef, useState } from 'react';

import styled from 'styled-components';
import useRequestFrame from 'Hooks/useRequestFrame';

const Icon = styled.svg`
  flex: none;

  margin: auto;
`;

const SearchIcon = ({ size = 32 }) => {
  const [hovering, setHovering] = useState(false);
  const [rotateZ, setRotateZ] = useState(0);
  const iconRef = useRef(null);

  const rotateForward = cancel => {
    if (iconRef.current) {
      iconRef.current.style.transform = `rotateZ(${rotateZ + 10}deg)`;
      setRotateZ(rotateZ + 10);
    } else cancel();
  };

  useRequestFrame(rotateForward, hovering);

  const mouseEnter = () => {
    setHovering(true);
  };

  const mouseLeave = () => {
    setHovering(false);
  };

  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      ref={iconRef}
      onMouseEnter={mouseEnter}
      onMouseLeave={mouseLeave}
    >
      <path
        fill="none"
        stroke="crimson"
        strokeWidth="6.129"
        d="M29.5 34.89c-3.574 1.076-5.866-3.869-3.624-6.842 2.747-3.415 7.57-2.918 10.474-.066 4.262 4.186 3.316 11.188-.877 15.04-5.588 5.136-14.433 3.821-19.217-1.723-6.02-6.976-4.33-17.686 2.57-23.393 8.359-6.912 20.945-4.843 27.57 3.417 7.809 9.736 5.359 24.205-4.264 31.747-11.11 8.706-27.468 5.874-35.923-5.112-9.607-12.484-6.392-30.732 5.96-40.099C26.023-2.65 46.164.949 56.442 14.665c11.411 15.227 7.43 37.262-7.653 48.451"
        transform="matrix(.9039 0 0 .92372 3.457 2.795)"
      />
    </Icon>
  );
};

export default SearchIcon;
