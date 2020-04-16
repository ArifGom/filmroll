import React, { useEffect, useRef, useState } from 'react';

import clamp from 'Utils/clamp';
import scaleAndStep from 'Utils/scaleAndStep';
import styled, { css } from 'styled-components';
import throttle from 'Utils/throttle';
import useBoundingRect from 'Hooks/useBoundingRect';

const relativePosition = (a, min, max) => {
  return ((a - min) / (max - min)) * 100;
};
const Slider = ({
  minValue = 0,
  maxValue = 100,
  initialValueA = 0,
  initialValueB = 100,
  stepWidth = 1,
  markerWidth = 20,
  resetToggle = false,
  handleRangeChange = () => {},
}) => {
  const [valueA, setValueA] = useState(initialValueA);
  const [valueB, setValueB] = useState(initialValueB);

  const [isDraggingA, setIsDraggingA] = useState(false);
  const [isDraggingB, setIsDraggingB] = useState(false);

  const [leftPosA, setLeftPosA] = useState(
    relativePosition(initialValueA, minValue, maxValue)
  );
  const [leftPosB, setLeftPosB] = useState(
    relativePosition(initialValueB, minValue, maxValue)
  );

  const containerRef = useRef(null);
  const containerRect = useBoundingRect(containerRef);

  useEffect(() => {
    setValueA(initialValueA);
    setValueB(initialValueB);
    return () => {};
  }, [initialValueA, initialValueB, resetToggle]);
  const dragStart = (e, markerA) => {
    e.stopPropagation();
    if (markerA) setIsDraggingA(true);
    else setIsDraggingB(true);
  };

  useEffect(() => {
    const dragMove = throttle(e => {
      if (!isDraggingA && !isDraggingB) return;
      e.stopPropagation();
      console.log('dragMove');
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;

      const { width, left } = containerRect;

      const position = isDraggingA
        ? clamp(
            0,
            (relativePosition(valueB, minValue, maxValue) * width) / 100 - 1,
            clientX - left
          )
        : clamp(
            (relativePosition(valueA, minValue, maxValue) * width) / 100 + 1,
            width,
            clientX - left
          );

      const { step: newValue, newLeft } = scaleAndStep(
        position,
        width,
        maxValue,
        minValue,
        stepWidth
      );

      if (isDraggingA) {
        setValueA(newValue);
      } else {
        setValueB(newValue);
      }
      handleRangeChange(valueA, valueB);
    }, 200);
    const onDragEnd = e => {
      if (isDraggingA || isDraggingB) {
        e.preventDefault();
        e.stopPropagation();
        setIsDraggingA(false);
        setIsDraggingB(false);
      }
    };
    document.addEventListener('mousemove', dragMove, true);
    document.addEventListener('mouseup', onDragEnd, true);
    document.addEventListener('touchmove', dragMove, true);
    document.addEventListener('touchend', onDragEnd, true);

    return () => {
      document.removeEventListener('mousemove', dragMove, true);
      document.removeEventListener('touchmove', dragMove, true);
      document.removeEventListener('touchend', onDragEnd, true);
      document.removeEventListener('mouseup', onDragEnd, true);
    };
  }, [
    containerRect,
    handleRangeChange,
    isDraggingA,
    isDraggingB,
    leftPosA,
    leftPosB,
    maxValue,
    minValue,
    stepWidth,
    valueA,
    valueB,
  ]);

  const onKeyDown = (keyCode, setValue, value, isMovingA) => {
    switch (keyCode) {
      case 37:
        setValue(
          clamp(isMovingA ? minValue : valueA, maxValue, value - stepWidth)
        );
        break;
      case 39:
        setValue(
          clamp(valueA, isMovingA ? valueB : maxValue, value + stepWidth)
        );
        break;

      default:
        break;
    }

    if (isMovingA) {
      setLeftPosA(((valueA - minValue) / (maxValue - minValue)) * 100);
    } else {
      setLeftPosB(((valueB - minValue) / (maxValue - minValue)) * 100);
    }
    handleRangeChange(valueA, valueB);
  };
  const onKeyDownA = e => {
    onKeyDown(e.keyCode, setValueA, valueA, true);
  };
  const onKeyDownB = e => {
    onKeyDown(e.keyCode, setValueB, valueB, false);
  };

  return (
    <Container ref={containerRef} markerWidth={markerWidth}>
      <SelectedRange
        left={Math.min(
          relativePosition(valueA, minValue, maxValue),
          relativePosition(valueB, minValue, maxValue) + 5
        )}
        right={
          100 -
          Math.max(
            relativePosition(valueA, minValue, maxValue),
            relativePosition(valueB, minValue, maxValue)
          )
        }
      />
      <Marker
        left={relativePosition(valueA, minValue, maxValue)}
        onTouchStart={e => dragStart(e, true)}
        onMouseDown={e => dragStart(e, true)}
        dragging={isDraggingA}
        markerWidth={markerWidth}
        overlappingA={
          relativePosition(valueB, minValue, maxValue) -
            relativePosition(valueA, minValue, maxValue) <
          5
        }
        tabIndex={0}
        onKeyDown={onKeyDownA}
      />
      <Marker
        left={relativePosition(valueB, minValue, maxValue)}
        onTouchStart={e => dragStart(e, false)}
        onMouseDown={e => dragStart(e, false)}
        dragging={isDraggingB}
        overlappingB={
          relativePosition(valueB, minValue, maxValue) -
            relativePosition(valueA, minValue, maxValue) <
          5
        }
        markerWidth={markerWidth}
        tabIndex={0}
        onKeyDown={onKeyDownB}
      />
    </Container>
  );
};

export default Slider;

const Container = styled.div(
  ({ markerWidth, theme }) => css`
    position: relative;
    width: 100%;
    height: 6px;
    margin: ${markerWidth}px;
    background-color: ${theme.col.gray7};
  `
);

const Marker = styled.div(
  ({ theme, markerWidth, left, overlappingA, overlappingB, dragging }) => css`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    touch-action: none;
    left: calc(${left}% - ${markerWidth / 2}px);
    transition: transform 100ms linear;
    top: ${-markerWidth / 2 + 3}px;
    min-width: ${markerWidth}px;

    height: ${markerWidth}px;
    text-align: center;

    border: 2px solid crimson;
    ${dragging ? theme.col.accent5 : theme.col.prim5};
    border-radius: 200px;
    background-color: ${theme.col.prim9};
    user-select: none;
    cursor: pointer;
    transform: ${overlappingA && `translateY(${markerWidth / 2}px)`};
    transform: ${overlappingB && `translateY(-${markerWidth / 2}px)`};
  `
);

const SelectedRange = styled.div(
  ({ left, right }) => css`
    height: 100%;
    position: absolute;

    background-color: crimson;
    left: ${left}%;
    right: ${right}%;
  `
);
