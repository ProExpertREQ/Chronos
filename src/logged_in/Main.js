import React, { useState, useEffect, useContext } from 'react';

import Load from '../shared/Load';
import api from '../services/api';
import { Context } from '../Context/AuthContext';

export default function Main() {
  const [users, setUsers] = useState([]);
  const { loading, handleLogout, authenticated } = useContext(Context);

  useEffect(() => {
    (async () => {
      const { data } = await api.get('users/get-all');

      setUsers(data);
    })();
  }, [authenticated]);

  return (
    <>
      {loading ? <Load /> : null}
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
