import React, { useState, useEffect, useContext } from 'react';

import api from '../services/api';
import { Context } from '../Context/AuthContext';

import Load from '../shared/Load';
import SideMenu from './components/SideMenu';

export default function Main() {
  const [users, setUsers] = useState([]);
  const { loading, handleLogout, authenticated } = useContext(Context);

  useEffect(() => {
    (async () => {
      if (authenticated) {
        const { data } = await api.get('users/get-all');
        setUsers(data);
      }
    })();
  }, [authenticated]);

  return (
    <>
      {loading ? <Load /> : null}
      <SideMenu />
      <h1>Estou logado</h1>
      <ul>
        {users.map((user) => (
          <li key={user.registration_number}>
            {user.name}
            |
            {user.registration_number}
            |
            {user.department}
            |
            {user.course}
            |
            {user.email}
          </li>
        ))}
        <button type="button" onClick={handleLogout}>SAIR</button>
      </ul>
    </>
  );
}
