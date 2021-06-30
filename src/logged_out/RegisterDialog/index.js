import React, { useState } from 'react';

import Modal from '../Modal';
import { Button } from './styles';

const RegisterDialog = ({onClose = () => {}}) => {
  return (
    <Modal title="Registrar" onClose={onClose}>
      <label htmlFor="name">Nome</label>
      <input 
        type="text" 
        name="name" 
        id="name" 
        placeholder="Nise da Silveira" 
        autoComplete="off" 
      />

      <label htmlFor="email">E-mail</label>
      <input 
        type="text" 
        name="email" 
        id="email" 
        placeholder="exemplo@exemplo.com" 
        autoComplete="off" 
      />

      <label htmlFor="registration-number">Matrícula</label>
      <input 
        type="text" 
        name="registration-number" 
        id="registration-number" 
        placeholder="21/0419620" 
        autoComplete="off" 
      />

      <label htmlFor="password">Senha</label>
      <input 
        type="password" 
        name="password" 
        id="password" 
        placeholder="Crie uma senha" 
      />

      <label htmlFor="password-confirm">Confirmar Senha</label>
      <input 
        type="password" 
        name="password-confirm" 
        id="password-confirm" 
        placeholder="Confirme a senha"
      />

      <label id="button-label">|</label>
      <Button id="register">Registrar-se</Button>
    </Modal>
  );
}

export default RegisterDialog;
