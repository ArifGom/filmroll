import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import Slider from 'UiLib/Slider';

const RangeFilter = ({
  onChange,
  minValue = 1900,
  maxValue = 2019,
  stepWidth = 1,
  initialValueA = 1900,
  initialValueB = 2019,
  resetToggle = false,
}) => {
  const handleRangeChange = (valueA, valueB) => {
    onChange(valueA, valueB);
  };

  return (
    <Container>
      <ValueIndicator> {initialValueA} </ValueIndicator>
      <Slider
        minValue={minValue}
        maxValue={maxValue}
        initialValueA={initialValueA}
        initialValueB={initialValueB}
        stepWidth={stepWidth}
        handleRangeChange={handleRangeChange}
        resetToggle={resetToggle}
      />
      <ValueIndicator> {initialValueB} </ValueIndicator>
    </Container>
  );
};

export default RangeFilter;

const Container = styled.div`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 100%;
  padding: 10px;
  width: 400px;
`;

const ValueIndicator = styled.div(
  ({ theme }) => css`
	${theme.fontSize.m}

	color: ${theme.col.prim9};
	font-weight: 600;
	width: 50px;
`
);
