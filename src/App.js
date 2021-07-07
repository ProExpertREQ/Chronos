import React from 'react';
import { Router } from 'react-router-dom';

import GlobalStyle from './styles/global';

import Routes from './routes';
import history from './services/history';

import { AuthProvider } from './Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router history={history}>
        <GlobalStyle />
        <Routes />
      </Router>
    </AuthProvider>
  );
}

export default App;
