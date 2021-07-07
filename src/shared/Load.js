import React, { useContext } from 'react';
import Lottie from 'react-lottie';

import Container from './styles';
import loadAnimation from '../../public/img/loading.json';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: loadAnimation,
};

export default function Load() {
  return (
    <Container>
      <Lottie
        options={defaultOptions}
        height={100}
        width={100}
      />
    </Container>
  );
}
