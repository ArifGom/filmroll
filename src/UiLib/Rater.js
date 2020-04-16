import React, { useEffect, useState } from 'react';

import styled, { css } from 'styled-components';
import useTouchMove from 'Hooks/useTouchMove';

const Rater = ({
  onChange,
  onHoverChange,
  onHoverLeave,
  rateSteps,
  rating,
  mapping,
  vertical = false,
}) => {
  const [activeRating, setActiveRating] = useState(rating);

  const onTouchMove = e => {
    const nearestBar = document.elementFromPoint(
      e.changedTouches[0].clientX,
      e.changedTouches[0].clientY
    );

    try {
      const index = parseInt(nearestBar.attributes['data-index'].value);
      setActiveRating((index + 1) * mapping);
      onHoverChange((index + 1) * mapping);
    } catch (error) {
      return;
    }
  };

  const [node, ref] = useTouchMove(onTouchMove);

  useEffect(() => {
    setActiveRating(rating);
  }, [rating]);

  const onMouseLeave = () => {
    setActiveRating(rating);
    onHoverLeave();
  };

  const onTouchEnd = () => {
    onChange(activeRating);
    onHoverLeave();
  };

  return (
    <RateContainer
      onMouseLeave={onMouseLeave}
      onTouchEnd={onTouchEnd}
      vertical={vertical}
      ref={ref}
    >
      {[...Array(rateSteps)].map((step, index) => (
        <RateBar
          active={activeRating > index * mapping}
          rating={activeRating / 10}
          key={index}
          data-index={index}
          onClick={() => onChange((index + 1) * mapping)}
          onMouseEnter={() => {
            setActiveRating((index + 1) * mapping);
            onHoverChange((index + 1) * mapping);
          }}
        />
      ))}
    </RateContainer>
  );
};

export default Rater;

const RateBar = styled.div(
  ({ theme, active, rating }) => css`
    background-color: ${active
      ? `hsl( ${rating * 120}, 100%, 50%)`
      : theme.col.gray5};
    flex: 1;
    margin-bottom: 1px;
    cursor: pointer;
    transition: all 100ms ease-in-out;
    &:hover {
      transform: scaleX(1.1);
    }
  `
);

const RateContainer = styled.div(
  ({ vertical }) => css`
    display: flex;
    flex-direction: ${vertical ? 'column-reverse' : 'row'};
    align-items: stretch;
    touch-action: none;
    height: ${vertical ? '200px' : '40px'};
    width: ${vertical ? '40px' : '200px'};
  `
);
