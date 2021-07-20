import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './Routes';
import history from './services/history';

import { AuthProvider } from './Context/AuthContext';
import { SidebarProvider } from './Context/SidebarContext';

function App() {
  return (
    <AuthProvider>
      <SidebarProvider>
        <Router history={history}>
          <GlobalStyle />
          <Routes />
        </Router>
      </SidebarProvider>
    </AuthProvider>
  );
}

export default App;
