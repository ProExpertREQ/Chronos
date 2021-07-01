import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import ModalStyled from './styles';

const Modal = ({
  title = '',
  id = '',
  onClose = () => {}, children,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // eslint-disable-next-line no-return-assign
    return () => document.body.style.overflow = 'unset';
  }, []);

  return (
    <ModalStyled id={id} onClick={handleOutsideClick}>
      <div className="container">
        <div className="header">
          <h3>{title}</h3>
          <button type="button" className="close" onClick={onClose}>
            x
          </button>
        </div>
        <div id="form">{children}</div>
      </div>
    </ModalStyled>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export default Modal;
