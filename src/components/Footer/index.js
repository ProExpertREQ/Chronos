import React from 'react';

import { Container } from './styles';

import GithubIcon from '../../../public/img/github.svg';

export default function Footer () {
  return(
    <Container>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#3FB1B5" fill-opacity="1" d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,197.3C672,203,768,245,864,256C960,267,1056,245,1152,229.3C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
      <h2>Quem Somos</h2>
      <p>
        Somos o resultado do esforço espontâneo de alunos dedicados da Engenharia de Software da Universidade de Brasília.
      </p>
      <button>
        <img src={GithubIcon} alt="Github" />
        Nosso Repositório
      </button>
      <p>© 2021 Chronos</p>
    </Container>

  );
};
