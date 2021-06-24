import React from 'react';

import { Container } from './styles';

export default function ReadMore () {
  return (
    <Container>
      <section className="feature-1">
        <p>
          O Chronos ajudará você a organizar o seu semestre disponibilizando todas as informações daquela matéria da sua grade
        </p>
      </section>
      <section className="feature-2">
        <p>
          Você encontrará onde o professor ministrará as aulas, onde disponibilizará os materiais, quais os canais de comunicação com a turma e muito mais
        </p>
      </section>
      <section className="feature-1">
        <p>
          Você também poderá marcar as suas faltas e iremos te avisar quando não puder faltar mais, sem  correr risco de perder todo o semestre
        </p>
      </section>
    </Container>
  );
};
