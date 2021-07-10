import React from 'react';

import Section from './styles';
import Illustration from '../../../assets/img/studying.svg';

export default function Home() {
  return (
    <>
      <Section>
        <div className="item">
          <p className="item-1">Todas as</p>
          <p className="item-2">matérias</p>
          <p className="item-3">em um só lugar</p>
          <a href="#features">
            <button type="button">Saiba Mais</button>
          </a>
        </div>
        <img src={Illustration} alt="DrawKit" />
      </Section>
    </>
  );
}
