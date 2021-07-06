import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import useAuth from './hooks/useAuth';

const Context = createContext();

function AuthProvider({ children }) {
  const {
    authenticated, loading, handleLogin, handleLogout,
  } = useAuth();

  return (
    <Context.Provider
      value={{
        authenticated, loading, handleLogin, handleLogout,
      }}
    >
      {children}
    </Context.Provider>
  );
}

AuthProvider.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  children: PropTypes.any.isRequired,
};

export { Context, AuthProvider };
