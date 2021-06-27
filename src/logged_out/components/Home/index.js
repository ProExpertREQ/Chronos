import React from 'react';

import { Container } from './styles';
import Illustration from '../../../../public/img/studying.svg';

import Header from './Header';
import Features from './Features';
import Footer from './Footer';

export default function Home () {
  return (
    <>
      <Header />
      <Container>
        <div className="item">
          <p className="item-1">Todas as</p>
          <p className="item-2">matérias</p>
          <p className="item-3">em um só lugar</p>
          <button>Saiba Mais</button>
        </div>
        <img src={Illustration} alt="DrawKit" />
      </Container>
      <Features />
      <Footer />
    </>
  );
};
