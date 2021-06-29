import React, { useState } from 'react';

import Modal from '../Modal';
import { Button } from './styles';

const LoginDialog = ({onClose = () => {}}) => {
  return (
    <Modal title="Entrar" onClose={onClose}>
      <label htmlFor="email">E-mail</label>
      <input type="text" name="email" id="email" placeholder="Digite seu e-mail" />

      <label htmlFor="password">Senha</label>
      <input type="password" name="password" id="password" placeholder="Digite sua senha" />

      <label id="button-label">Button</label>
      <Button id="login">Entrar</Button>
    </Modal>
  );
}

export default LoginDialog;
