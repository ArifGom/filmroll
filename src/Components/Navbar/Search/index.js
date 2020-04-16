import React, { useRef, useState } from 'react';
import {
  SearchContainer,
  SearchInput,
} from 'Components/Navbar/Search/Search.styled';

import SearchIcon from 'Components/Navbar/Search/SearchIcon';
import { debounce } from 'Utils/debounce';
import useOnClickOutside from 'Hooks/useOnClickOutside';
import { withRouter } from 'react-router-dom';

const Search = ({ history, setSearchBarOpen }) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const inputRef = useRef(null);
  const containerRef = useRef(null);
  useOnClickOutside(
    () => {
      setSearchBarOpen(false);
      setShowSearchInput(false);
    },
    containerRef.current,
    showSearchInput
  );
  const handleSubmit = () => {
    setShowSearchInput(false);
    setSearchBarOpen(false);
    inputRef.current.value = '';
    inputRef.current.blur();
  };

  const getResults = async query => {
    if (query === '') {
      return;
    }

    history.push(`/search/${query}`);
  };

  const debounceQuery = debounce(query => getResults(query), 400);

  const handleQuery = e => {
    debounceQuery(e.target.value);
  };

  const handleIconClick = () => {
    if (!showSearchInput) {
      inputRef.current.focus();
    } else {
      handleSubmit();
    }
  };

  const onFocus = () => {
    setSearchBarOpen(true);
    setShowSearchInput(true);
  };

  return (
    <SearchContainer show={showSearchInput} ref={containerRef}>
      <SearchInput
        aria-label={'Search Movie Input'}
        autocomplete={'off'}
        onChange={handleQuery}
        onKeyPress={e => {
          e.key === 'Enter' && handleSubmit();
        }}
        onFocus={onFocus}
        placeholder={'Search Movie'}
        ref={inputRef}
        show={showSearchInput}
        size={30}
      />

      <div onClick={handleIconClick}>
        <SearchIcon open={showSearchInput} />
      </div>
    </SearchContainer>
  );
};

export default withRouter(Search);
