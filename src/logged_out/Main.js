import React, { useContext } from 'react';

import { Context } from '../Context/AuthContext';

import Load from '../shared/Load';
import Home from './Home';

export default function Main() {
  const { loading } = useContext(Context);

  return (
    <>
      {loading ? <Load /> : null}
      <Home />
    </>
  );
}
