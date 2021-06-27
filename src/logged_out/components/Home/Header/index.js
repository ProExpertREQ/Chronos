import React from 'react';

import { Container } from './styles';

export default function Header () {
  return (
    <Container>
      <h1>CHRONOS</h1>
      <div>
        <button className="signup">Começar</button>
        <button className="login">Acessar</button>
      </div>
    </Container>
  );
};
