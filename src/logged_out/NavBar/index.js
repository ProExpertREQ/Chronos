import React, { useState } from 'react';

import Container from './styles';

import RegisterDialog from '../RegisterDialog';
import LoginDialog from '../LoginDialog';

export default function NavBar() {
  const [isRegisterDialogVisible, setIsRegisterDialogVisible] = useState(false);
  const [isLoginDialogVisible, setIsLoginDialogVisible] = useState(false);

  return (
    <Container>
      <h1>CHRONOS</h1>
      <div>
        <button
          type="button"
          onClick={() => setIsRegisterDialogVisible(true)}
          className="signup"
        >
          Começar
        </button>

        <button
          type="button"
          onClick={() => setIsLoginDialogVisible(true)}
          className="login"
        >
          Acessar
        </button>
      </div>
      {
        isRegisterDialogVisible
          ? <RegisterDialog onClose={() => setIsRegisterDialogVisible(false)} />
          : null
      }
      {
        isLoginDialogVisible
          ? <LoginDialog onClose={() => setIsLoginDialogVisible(false)} />
          : null
      }
    </Container>
  );
}
