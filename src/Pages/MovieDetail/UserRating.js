import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Rater from 'UiLib/Rater';
import SemanticRatingIndicator from './SemanticRatingIndicator';
import useOnClickOutside from 'Hooks/useOnClickOutside';
import useTouchMove from 'Hooks/useTouchMove';

const UserRating = ({ rating, onChange }) => {
  const [hoveredRating, setHoveredRating] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [node, ref] = useTouchMove(() => {});
  const getRating = () => {
    if (hoveredRating)
      return hoveredRating !== 10 ? hoveredRating.toFixed(1) : hoveredRating;
    if (rating) return rating !== 10 ? rating.toFixed(1) : rating;
    return 'rate';
  };

  useOnClickOutside(
    () => {
      setIsOpen(false);
    },
    node,
    isOpen,
    isOpen
  );

  const toggleRaterVisbility = e => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const onHoverLeave = () => {
    setHoveredRating(null);
  };

  return (
    <Container ref={ref} isOpen={isOpen}>
      <UserRatingIndicator onClick={toggleRaterVisbility}>
        <UserRatingStar>&#9733;</UserRatingStar>
        <UserRatingValue>{getRating()}</UserRatingValue>
      </UserRatingIndicator>

      <RatingRow isOpen={isOpen}>
        <Rater
          onChange={onChange}
          onHoverChange={setHoveredRating}
          onHoverLeave={onHoverLeave}
          rating={rating}
          rateSteps={10}
          mapping={1}
          vertical={true}
        />
        <SemanticRatingIndicator
          value={hoveredRating ? hoveredRating : rating}
        />
      </RatingRow>
    </Container>
  );
};

export default UserRating;

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;

    @media only screen and (max-width: 620px) {
      flex-direction: column-reverse;
      background-color: ${theme.col.prim2};
    }
  `
);

const RatingRow = styled.div(
  ({ theme, isOpen }) => css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
    padding: 15px 0px;

    @media only screen and (max-width: 620px) {
      display: ${isOpen ? 'flex' : 'none'};
      background-color: ${theme.col.prim2};
      border: 1px solid ${theme.col.gray5};
      border-bottom: 0;
      min-width: 100%;
    }
  `
);

const UserRatingValue = styled.div(
  ({ theme }) => css`
    ${theme.fontSize.xxxl}
    font-weight: 600;
    letter-spacing: 1px;

    @media only screen and (max-width: 620px) {
      margin: auto 2px;
    }
    text-align: center;
  `
);
const UserRatingStar = styled.div(
  ({ theme }) => css`
    ${theme.fontSize.xxxl}
    margin-right: 3px;
    letter-spacing: 1px;
    color: crimson;
    @media only screen and (max-width: 620px) {
      margin: auto 2px;
    }
  `
);

const UserRatingIndicator = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    cursor: pointer;
    color: ${theme.col.prim9};

    @media only screen and (max-width: 620px) {
      justify-content: center;
      min-width: 140px;
    }
  `
);
