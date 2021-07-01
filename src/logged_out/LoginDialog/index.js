import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import Button from './styles';

const LoginDialog = ({ onClose = () => {} }) => (
  <Modal title="Entrar" id="modal" onClose={onClose}>
    <label htmlFor="email">E-mail</label>
    <input
      type="text"
      name="email"
      id="email"
      placeholder="Digite seu e-mail"
      autoComplete="off"
    />

    <label htmlFor="password">Senha</label>
    <input
      type="password"
      name="password"
      id="password"
      placeholder="Digite sua senha"
    />

    <label id="button-label">|</label>
    <Button id="login">Entrar</Button>
  </Modal>
);

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginDialog;
