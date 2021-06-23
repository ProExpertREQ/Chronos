import React from 'react';

import Header from './Header';
import Home from './Home';
import ReadMore from './ReadMore'

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <ReadMore />
    </>
  );
};

export default App;
