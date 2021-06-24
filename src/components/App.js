import React from 'react';

import Header from './Header';
import Home from './Home';
import ReadMore from './ReadMore'
import Footer from './Footer';

import GlobalStyle from './styles/global';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <ReadMore />
      <Footer />
    </>
  );
};

export default App;
