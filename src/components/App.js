import React from 'react';

import Header from './Header';
import Home from './Home';
import Features from './Features'
import Footer from './Footer';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Features />
      <Footer /> 
    </>
  );
};

export default App;
