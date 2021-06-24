import React from 'react';

import { Container } from './styles';
import Ilustra from '../../../public/img/ilustra.svg';

export default function Home () {
  return (
    <Container>
      <div className="circle">
        <p className="slogan-1">Todas as</p>
        <p className="slogan-2">matérias</p>
        <p className="slogan-3">em um só lugar</p>
        <button>Saiba Mais</button>
      </div>
      <img src={Ilustra} alt="Ilustra" />
    </Container>
  );
};
