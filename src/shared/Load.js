import React from 'react';
import Lottie from 'react-lottie-player';

import Container from './styles';
import loadAnimation from '../assets/img/loading.json';

export default function Load() {
  return (
    <Container>
      <Lottie
        animationData={loadAnimation}
        play
        style={{ width: 100, height: 100 }}
      />
    </Container>
  );
}
