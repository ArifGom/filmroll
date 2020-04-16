import styled, { css } from 'styled-components';

import Modal from 'UiLib/Modal';
import MovieDetail from '.';
import React from 'react';
import { useHistory } from 'react-router-dom';

const MovieDetailModal = ({ match, previousLocation }) => {
  const history = useHistory();

  const onClose = () => {
    history.push(previousLocation.pathname);
  };
  return (
    <Modal open={true} onClose={onClose}>
      <MovieDetailModalContainer>
        <MovieDetail match={match} isModal={true} />
      </MovieDetailModalContainer>
    </Modal>
  );
};

export default MovieDetailModal;

const MovieDetailModalContainer = styled.div(
  ({ theme }) => css`
    margin: auto;
    background-color: ${theme.col.prim1};
    width: 1200px;
    max-width: 95vw;
    border-radius: 10px;
    margin-bottom: 60px;
    border: 1px solid ${theme.col.gray5};
    overflow: hidden;
  `
);
