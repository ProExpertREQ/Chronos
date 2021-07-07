import { useState, useEffect } from 'react';

import api from '../../services/api';
import history from '../../services/history';

export default function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
      setAuthenticated(true);
    }

    setTimeout(() => {
      setLoading(false);
    }, 1893);
  }, []);

  async function handleLogin(values) {
    const { data: { token } } = await api
      .post('/users/login', {
        email: values.email,
        password: values.password,
      });

    localStorage.setItem('token', JSON.stringify(token));

    api.defaults.headers.Authorization = `Bearer ${token}`;

    setAuthenticated(true);

    history.push('/users');
  }

  async function handleLogout() {
    setAuthenticated(false);

    localStorage.removeItem('token');

    api.defaults.headers.Authorization = undefined;

    history.push('/');
  }

  return {
    authenticated, loading, handleLogin, handleLogout,
  };
}
