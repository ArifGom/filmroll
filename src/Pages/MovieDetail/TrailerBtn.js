import React from 'react';
import styled, { css } from 'styled-components';
import Button from 'UiLib/Button';

const TrailerBtn = ({ onClick, available }) => {
  return (
    <TrailerButton
      available={available}
      onClick={onClick}
      disabled={!available}
    >
      &#9658; Trailer
    </TrailerButton>
  );
};

export default TrailerBtn;

const TrailerButton = styled(Button)(
  ({ theme, available }) => css`
    background-color: ${available ? theme.col.prim5 : theme.col.gray5};
    margin: 1px;

    color: ${available ? theme.col.prim9 : theme.col.gray7};
  `
);
