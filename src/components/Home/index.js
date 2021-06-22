import React from 'react';

import { Container } from './styles';
import Ilustra from '../../../public/img/ilustra.svg';

export default function Home () {
  return (
    <Container>
      <div className="circle">
        <p>Todas as</p>
        <p>matérias</p>
        <p>em um só lugar</p>
        <button>Saiba Mais</button>
      </div>
      <img src={Ilustra} alt="Ilustra" />
    </Container>
  );
};
