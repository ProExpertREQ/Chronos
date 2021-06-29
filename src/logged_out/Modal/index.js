import React, { useState } from 'react';

import ModalStyled from './styles';

const Modal = ({ title="", id="modal", onClose = () => {}, children }) => {
  const handleOutsideClick = (e) => {
    if(e.target.id === id) onClose();
  }

  return (
    <ModalStyled id={id} onClick={handleOutsideClick}>
      <div className="container">
        <div className="header">
          <h3>{title}</h3>
          <button className="close" onClick={onClose}>x
          </ button>
        </div>
        <div id="form">{children}</div>
      </div>
    </ModalStyled>
  );
}

export default Modal;
