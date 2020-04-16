import { Select, SelectItem, SelectSeparator } from './SelectFilter';

import Dropdown from 'UiLib/Dropdown';
import React from 'react';

const SortByFilter = ({
  onChange,
  isOpen,
  onOpen,
  onClose,
  activeSortBy,
  predictedRating,
  myRating,
}) => {
  return (
    <Dropdown
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      label={'Sort By'}
      value={activeSortBy.name}
    >
      <Select>
        <SelectItem
          onClick={() =>
            onChange({ id: 'popularity.desc', name: 'Most Popular' })
          }
        >
          Most Popular
        </SelectItem>
        <SelectItem
          onClick={() =>
            onChange({ id: 'popularity.asc', name: 'Least Popular' })
          }
        >
          Least Popular
        </SelectItem>
        <SelectSeparator />
        <SelectItem
          onClick={() =>
            onChange({ id: 'vote_average.desc', name: 'Best Avg Rating' })
          }
        >
          Best Avg. Rating
        </SelectItem>
        <SelectItem
          onClick={() =>
            onChange({ id: 'vote_average.asc', name: 'Worst Avg Rating' })
          }
        >
          Worst Avg Rating
        </SelectItem>
        <SelectSeparator />
        <SelectItem
          onClick={() =>
            onChange({ id: 'primary_release_date.desc', name: 'Newest' })
          }
        >
          Newest Release Date
        </SelectItem>
        <SelectItem
          onClick={() =>
            onChange({ id: 'primary_release_date.asc', name: 'Oldest' })
          }
        >
          Oldest Release Date
        </SelectItem>
        <SelectSeparator />
        {predictedRating && (
          <SelectItem
            onClick={() =>
              onChange({
                id: 'predictedRating.desc',
                name: 'Highest Pre. Rating',
              })
            }
          >
            Highest Pre. Rating
          </SelectItem>
        )}
        {predictedRating && (
          <SelectItem
            onClick={() =>
              onChange({
                id: 'predictedRating.asc',
                name: 'Lowest Pre. Rating',
              })
            }
          >
            Lowest Pre. Rating
          </SelectItem>
        )}
        {myRating && (
          <SelectItem
            onClick={() =>
              onChange({
                id: 'myRating.desc',
                name: 'My Highest Rating',
              })
            }
          >
            My Highest Rating
          </SelectItem>
        )}
        {myRating && (
          <SelectItem
            onClick={() =>
              onChange({
                id: 'myRating.asc',
                name: 'My Lowest Rating',
              })
            }
          >
            My Lowest Rating
          </SelectItem>
        )}
      </Select>
    </Dropdown>
  );
};

export default SortByFilter;
