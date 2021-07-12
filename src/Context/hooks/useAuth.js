import { useState, useEffect } from 'react';

import api from '../../services/api';
import history from '../../services/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  async function handleLogin(values) {
    const response = await api
      .post('/users/login', values)
      .catch((err) => err.response.data.error);

    if (response.data) {
      const { token } = response.data;

      localStorage.setItem('token', JSON.stringify(token));

      api.defaults.headers.Authorization = `Bearer ${token}`;

      setAuthenticated(true);

      history.push('/users');

      history.go(0);
    } else {
      setError(response);
    }
  }

  async function handleLogout() {
    setAuthenticated(false);

    localStorage.removeItem('token');

    api.defaults.headers.Authorization = undefined;

    history.push('/');

    history.go(0);
  }

  return {
    authenticated, loading, handleLogin, handleLogout, error,
  };
}
