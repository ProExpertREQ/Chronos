import React from 'react';

import { Navbar } from './styles';

export default function Header () {
  return (
    <Navbar>
      <h1>CHRONOS</h1>
      <div>
        <button className="signup">Começar</button>
        <button className="login">Acessar</button>
      </div>
    </Navbar>
  );
};
