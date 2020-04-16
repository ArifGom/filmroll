import React from 'react';

import styled, { css } from 'styled-components';
import Button from 'UiLib/Button';

const WatchlistButton = styled(Button)(
  ({ added, theme }) => css`
    background: ${added ? theme.col.accent5 : 'none'};
    border: 1px solid ${theme.col.accent5};
    flex: 1;
    color: ${added ? theme.col.accent9 : theme.col.accent5};
  `
);

const WatchlistBtn = ({ onChange, added = false }) => {
  return (
    <WatchlistButton added={added} onClick={onChange}>
      {added ? 'In Watchlist' : 'Add to Watchlist'}
    </WatchlistButton>
  );
};

export default WatchlistBtn;
