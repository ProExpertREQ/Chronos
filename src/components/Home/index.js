import React from 'react';

import { Container } from './styles';
import Ilustra from '../../../public/img/ilustra.svg';

export default function Home () {
  return (
    <Container>
      <div className="circle">
        <p className="small-1">Todas as</p>
        <p className="large">matérias</p>
        <p className="small-2">em um só lugar</p>
        <button>Saiba Mais</button>
      </div>
      <img src={Ilustra} alt="Ilustra" />
    </Container>
  );
};
