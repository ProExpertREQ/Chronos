import React from 'react';

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

        <a href="https://github.com/ProExpertREQ">
          <i className="bi bi-github" />
          <p>Nosso Repositório</p>
        </a>
      </div>
      <p>© 2021 Chronos</p>
    </Container>
  );
}
