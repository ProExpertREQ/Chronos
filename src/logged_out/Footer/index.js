import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Container from './styles';

export default function Footer() {
  return (
    <Container>
      <div className="about">
        <h2>Quem Somos</h2>

        <p className="about-text">
          Somos o resultado do esforço espontâneo de alunos
          <br />
          {' '}
          dedicados da Engenharia de Software da Universidade de Brasília.
        </p>

        <button type="button">
          <FontAwesomeIcon icon={faGithub} />
          <p>Nosso Repositório</p>
        </button>
      </div>
      <p>© 2021 Chronos</p>
    </Container>
  );
}
