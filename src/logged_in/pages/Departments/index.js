import React from 'react';

import Card from '../../components/Card';

import { Container } from './styles';

export default function Departments() {
  return (
    <Container>
      <div className="title">
        <h1>Departamentos</h1>
      </div>
      <div className="content">
        <Card
          title="Faculdade do Gama"
          info="001"
          button="Ver cursos"
        />
      </div>
    </Container>

  );
}
