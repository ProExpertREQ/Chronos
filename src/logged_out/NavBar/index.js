import React, { useState, useContext } from 'react';

import Container from './styles';

import RegisterDialog from '../RegisterDialog';
import LoginDialog from '../LoginDialog';

import { Context } from '../../Context/AuthContext';

export default function NavBar() {
  const [isRegisterDialogVisible, setIsRegisterDialogVisible] = useState(false);
  const [isLoginDialogVisible, setIsLoginDialogVisible] = useState(false);
  const { handleLogin } = useContext(Context);

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
          ? (
            <LoginDialog
              onClose={() => setIsLoginDialogVisible(false)}
              onSubmit={handleLogin}
            />
          )
          : null
      }
    </Container>
  );
}
