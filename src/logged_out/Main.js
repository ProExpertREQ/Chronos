import React, { useContext } from 'react';

import { Context } from '../Context/AuthContext';

import Load from '../shared/Load';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';

export default function Main() {
  const { loading } = useContext(Context);

  return (
    <>
      {loading ? <Load /> : null}
      <NavBar />
      <Home />
      <Footer />
    </>
  );
}
