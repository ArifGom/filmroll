import { Select, SelectItem, SelectSeparator } from './SelectFilter';

import Dropdown from 'UiLib/Dropdown';
import React from 'react';
import genrelist from './genrelist';

const GenreFilter = ({ onChange, isOpen, onOpen, onClose, activeGenre }) => {
  return (
    <Dropdown
      isOpen={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      label={'Genre'}
      value={activeGenre.name}
    >
      <Select>
        <SelectItem onClick={() => onChange({ id: null, name: 'All Genres' })}>
          All Genres
        </SelectItem>
        <SelectSeparator />
        {genrelist.map(genre => (
          <SelectItem key={genre.id} onClick={() => onChange(genre)}>
            {genre.name}
          </SelectItem>
        ))}
      </Select>
    </Dropdown>
  );
};

export default GenreFilter;
