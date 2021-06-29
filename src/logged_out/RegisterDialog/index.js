import React, { useState } from 'react';

import { Modal } from './styles';

const RegisterDialog = () => {
  return (
    <Modal>
      <div className="container">
        <div className="header">
          <h3>Registre-se</h3>
          <p>X</p>
        </div>
        <div id="form">
          <label htmlFor="name">Nome</label>
          <input type="text" name="name" id="name" placeholder="Nome"/>

          <label htmlFor="email">E-mail</label>
          <input type="text" name="email" id="email" />

          <label htmlFor="registration-number">Matrícula</label>
          <input type="text" name="registration-number" id="registration-number" />

          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
          
          <label htmlFor="password-confirm">Confirmar Senha</label>
          <input type="password" name="password-confirm" id="password-confirm" />
          
          <button id="register">Registrar-se</button>
        </div>
      </div>
    </Modal>
  );
}

export default RegisterDialog;
