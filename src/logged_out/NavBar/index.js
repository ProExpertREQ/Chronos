import React, { useState } from 'react';

import { Container } from './styles';

import RegisterDialog from '../RegisterDialog';

export default function NavBar () {
  const [isRegisterDialogVisible, setIsRegisterDialogVisible] = useState(false);

  return (
    <Container>
      <h1>CHRONOS</h1>
      <div>
        <button onClick={() => setIsRegisterDialogVisible(true)} className="signup">Começar</button>
        <button className="login">Acessar</button>
      </div>
      {isRegisterDialogVisible ? <RegisterDialog /> : null}
    </Container>
  );
};
