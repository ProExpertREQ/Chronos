import React, { useEffect, useState } from 'react';

import api from '../../../services/api';

import { Container } from './styles';
import avatar from '../../../assets/img/avatar.png';

export default function User() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    async function loadUser() {
      const response = await api.get('/users', config);

      const userData = response.data;

      setUser(userData);
    }

    loadUser();
  }, []);

  if (user) {
    return (
      <Container>
        <h1>Perfil</h1>
        <div className="user-info">
          <div className="avatar">
            <img src={avatar} alt="User" />
          </div>

          <div className="content">
            <div className="label">
              <h4>Nome</h4>
            </div>
            <div className="data">
              <p>{user.name}</p>
            </div>
          </div>

          <div className="content">
            <div className="label">
              <h4>E-mail</h4>
            </div>
            <div className="data">
              <p>{user.email}</p>
            </div>
          </div>

          <div className="content">
            <div className="label">
              <h4>Matrícula</h4>
            </div>
            <div className="data">
              <p>{user.registration_number}</p>
            </div>
          </div>

          <div className="content">
            <div className="label">
              <h4>Curso</h4>
            </div>
            <div className="data">
              <p>{user.course}</p>
            </div>
          </div>

          <div className="buttons">
            <button type="button">Atualizar</button>
            <button type="button" className="delete">Excluir</button>
          </div>
        </div>
      </Container>
    );
  }

  return <p>Não logado</p>;
}

/* <div className="content">
            <div className="label">
              <h4>Nome: </h4>
              <h4>E-mail: </h4>
              <h4>Curso: </h4>
              <h4>Matrícula: </h4>
            </div>
            <div className="data">
              <p>{user.name}</p>
              <p>{user.email}</p>
              <p>{user.course}</p>
              <p>{user.registration_number}</p>
            </div>
          </div> */
