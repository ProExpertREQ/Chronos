import React from 'react';

import { Container } from './styles';
import Illustration from '../../../../public/img/studying.svg';

export default function Home () {
  return (
    <>
      <Container>
        <div className="item">
          <p className="item-1">Todas as</p>
          <p className="item-2">matérias</p>
          <p className="item-3">em um só lugar</p>
          <a href="#features">
            <button>Saiba Mais</button>
          </a>
        </div>
        <img src={Illustration} alt="DrawKit" />
      </Container>
    </>
  );
};
