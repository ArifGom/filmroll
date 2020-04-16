// include styles

import React from 'react';

import Button from './Button';
import ResponsiveModal from 'react-responsive-modal';
import styled from 'styled-components';
import { Hamburger } from './Icons/Hamburger';

const Modal = ({ children, ariaLabel, open, onClose }) => {
  return (
    <ResponsiveModal
      onClose={onClose}
      open={open}
      ariaLabelledby={ariaLabel}
      showCloseIcon={false}
      blockScroll={true}
      animationDuration={100}
      styles={{
        overlay: {
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          right: 0,
          zIndex: 40,
          backgroundColor: 'hsla(0, 0%, 0%, 30%)',
          padding: '0',
          overflowX: 'hidden',
          overflowY: 'scroll',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        modal: {
          maxWidth: '95vw',
          background: 'none',
          padding: '0px',
          margin: '10px',
        },
      }}
    >
      <ModalCloseButton>
        <Hamburger onClick={onClose} isMenu={false} ariaLabel={'close modal'} />
      </ModalCloseButton>
      {children}
    </ResponsiveModal>
  );
};

export default Modal;

const ModalCloseButton = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  margin: 30px;

  z-index: 100;

  cursor: pointer;
  transition: all 200ms ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
