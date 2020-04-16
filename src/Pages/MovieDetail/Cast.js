import { Container, Label, Row, Value } from './GenericDetails';
import React, { useState } from 'react';

import styled, { css } from 'styled-components';
import Button from 'UiLib/Button';

const Cast = ({ cast }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <Container>
      {cast.slice(0, showMore ? 20 : 8).map((actor, index) => (
        <Row key={actor.id} first={index !== 0}>
          <Label>{actor.character}</Label>
          <Value>{actor.name}</Value>
        </Row>
      ))}
      <ShowMoreButton onClick={toggleShowMore}>
        {showMore ? 'Show less' : 'Show more'}
      </ShowMoreButton>
    </Container>
  );
};

export default Cast;

const ShowMoreButton = styled(Button)(
  ({ theme }) => css`
    text-align: center;
    border-radius: 2px;
    ${theme.fontSize.m}
    margin-top: 10px;
    align-self: flex-start;
  `
);
