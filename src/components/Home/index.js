import React from 'react';

import { Container } from './styles';
import Illustration from '../../../public/img/illustration.svg';

export default function Home () {
  return (
    <Container>
      <div className="item">
        <p className="item-1">Todas as</p>
        <p className="item-2">matérias</p>
        <p className="item-3">em um só lugar</p>
        <button>Saiba Mais</button>
      </div>
      <img src={Illustration} alt="DrawKit" />
    </Container>
  );
};
