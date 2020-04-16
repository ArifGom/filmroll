import React, { useEffect, useState } from 'react';

import DirectedBy from './DirectedBy';
import Title from 'Pages/MovieDetail/Title';
import styled, { css } from 'styled-components';

const Hero = ({
  heroUrl,
  placeholderUrl,
  title,
  year,
  rating,
  director,
  isModal,
}) => {
  const [url, setUrl] = useState(placeholderUrl);

  useEffect(() => {
    let image = new Image();
    image.src = heroUrl;
    image.onload = () => {
      setUrl(heroUrl);
    };
    return () => {
      image.onload = null;
      image = null;
    };
  }, [heroUrl]);

  return (
    <HeroContainer url={url} placeholderUrl={placeholderUrl} isModal={isModal}>
      <Title length={title.length}>{title}</Title>
      <BottomRowContainer>
        <div>{year}</div>
        <DirectedBy name={director} />
        <div>&#9733; {rating}</div>
      </BottomRowContainer>
    </HeroContainer>
  );
};

const HeroContainer = styled.div(
  ({ theme, url, placeholderUrl }) => css`
    background: linear-gradient(
        to top,
        ${theme.col.prim1} 0%,
        hsla(220, 30%, 7%, 0) 100%
      ),
      url(${props => props.url}), url(${props => props.placeholderUrl});
    background-blend-mode: normal;
    background-size: cover;
    background-position: 50% 0%;
    width: 100%;
    height: 0;
    padding: 42% 10px 0px 10px;

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;

    @media screen and (max-width: 620px) {
      padding-top: 66%;
    }
  `
);

const BottomRowContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    font-weight: 600;
    color: ${theme.col.gray7};
    justify-content: space-between;
    width: 100%;
    margin: 10px;
    max-width: 500px;
    align-items: flex-end;
  `
);

export default Hero;
