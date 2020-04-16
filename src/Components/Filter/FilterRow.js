import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

import Button from 'UiLib/Button';
import Dropdown from 'UiLib/Dropdown';
import GenreFilter from './GenreFilter';
import RangeFilter from './RangeFilter';
import SortByFilter from './SortByFilter';
import useOnClickOutside from 'Hooks/useOnClickOutside';
import useRangeValue from './useRangeValue';
import useToggle from 'Hooks/useToggle';

const FilterRow = ({
  onChange,
  onApply,
  onReset,
  myRating = false,
  filters,
  predictedRating = false,
  resetToggle = false,
}) => {
  const [showFilter, toggleShowFilter] = useToggle(false);
  const ref = useRef();

  useOnClickOutside(
    () => {
      if (showFilter) toggleShowFilter();
    },
    ref.current,
    true,
    false,
    false
  );

  const [genre, setGenre] = useState(filters.genres);
  const [sort, setSort] = useState(filters.sortBy);
  const [minYear, maxYear, handleYearChange, setYearChange] = useRangeValue([
    filters.dateRange.gt,
    filters.dateRange.lt,
  ]);
  const [openFilter, setOpenFilter] = useState(null);
  const [
    minAvgRating,
    maxAvgRating,
    handleAvgRatingChange,
    setAvgRatingChange,
  ] = useRangeValue([filters.ratingRange.gt, filters.ratingRange.lt]);
  useEffect(() => {
    setGenre(filters.genres);
    setSort(filters.sortBy);
    setYearChange([filters.dateRange.gt, filters.dateRange.lt]);
    setAvgRatingChange([filters.ratingRange.gt, filters.ratingRange.lt]);
  }, [
    filters.dateRange.gt,
    filters.dateRange.lt,
    filters.genres,
    filters.ratingRange.gt,
    filters.ratingRange.lt,
    filters.sortBy,
    setAvgRatingChange,
    setYearChange,
  ]);

  useEffect(() => {
    onChange({
      dateRange: { gt: minYear, lt: maxYear },
      ratingRange: { gt: minAvgRating, lt: maxAvgRating },
      genres: genre,
      sortBy: sort,
    });
  }, [
    minYear,
    maxYear,
    minAvgRating,
    maxAvgRating,
    onChange,
    genre,
    sort.id,
    sort,
  ]);

  return (
    <Container ref={ref}>
      <FilterButton onClick={toggleShowFilter}>Filter</FilterButton>

      {showFilter && (
        <FilterContainer>
          <Dropdown
            isOpen={openFilter === 'Year'}
            onOpen={() => setOpenFilter('Year')}
            onClose={() => setOpenFilter(null)}
            label={'Release Year'}
            value={`${minYear} - ${maxYear}`}
          >
            <RangeFilter
              onChange={handleYearChange}
              minValue={1900}
              maxValue={2020}
              initialValueA={minYear}
              initialValueB={maxYear}
              stepWidth={1}
              handle={'Year'}
              resetToggle={resetToggle}
            />
          </Dropdown>
          <Dropdown
            isOpen={openFilter === 'Rating'}
            onOpen={() => setOpenFilter('Rating')}
            onClose={() => setOpenFilter(null)}
            label={'Avg. Rating'}
            value={`${minAvgRating.toFixed(1)} - ${maxAvgRating.toFixed(1)}`}
          >
            <RangeFilter
              onChange={handleAvgRatingChange}
              minValue={0}
              maxValue={10}
              initialValueA={minAvgRating}
              initialValueB={maxAvgRating}
              stepWidth={0.5}
              handle={'Avg. Rating'}
            />
          </Dropdown>

          <GenreFilter
            onChange={genre => {
              setGenre(genre);
              setOpenFilter(null);
            }}
            isOpen={openFilter === 'Genre'}
            onOpen={() => setOpenFilter('Genre')}
            onClose={() => setOpenFilter(null)}
            activeGenre={genre}
          />

          <SortByFilter
            onChange={sortBy => {
              setSort(sortBy);
              setOpenFilter(null);
            }}
            isOpen={openFilter === 'Sort'}
            onOpen={() => setOpenFilter('Sort')}
            onClose={() => setOpenFilter(null)}
            activeSortBy={sort}
            myRating={myRating}
            predictedRating={predictedRating}
          />
          <ActionButtonContainer>
            <ResetButton onClick={onReset}>Reset</ResetButton>
            <ApplyButton onClick={onApply}>Apply</ApplyButton>
          </ActionButtonContainer>
        </FilterContainer>
      )}
    </Container>
  );
};

export default FilterRow;

const FilterContainer = styled.div(
  ({ theme }) => css`
    align-items: stretch;
    background-color: ${theme.col.prim2};
    border: 1px solid ${theme.col.gray5};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 10px;
    position: absolute;
    right: 0px;
    top: 30px;
    width: 300px;
    z-index: 4;

    @media screen and (max-width: 620px) {
      align-items: stretch;
      flex-direction: column;
      left: 0px;
      position: fixed;
      right: 0;
      top: 0;
      width: auto;
      z-index: 10;
    }
  `
);

const Container = styled.div`
  align-self: flex-end;
  margin: 10px 10px;
  position: relative;

  @media screen and (max-width: 620px) {
    align-items: stretch;
    flex-direction: column;
  }
`;

const ResetButton = styled(Button)(
  ({ theme }) => css`
    background: none;
    color: ${theme.col.accent5}
    flex: 1;
  `
);
const ApplyButton = styled(Button)(
  ({ theme }) => css`
    background-color: ${theme.col.sec5};
    flex: 1;
  `
);

const ActionButtonContainer = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
  `
);
const FilterButton = styled(Button)(
  ({ theme }) => css`
    ${theme.fontSize.s};

    border-radius: 5px;

    @media screen and (max-width: 620px) {
      bottom: 0;
      margin: 20px;
      position: fixed;
      right: 0;
      z-index: 10;
    }
  `
);
