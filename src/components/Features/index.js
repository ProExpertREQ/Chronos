import React from 'react';

import { Container } from './styles';
import features from './features';
import Feature from './Feature'; 

import WaveBorder from './wave';

export default function Features () {
  return (
    <Container>
      <h1>Features</h1>
      <div className="row">
        <Feature description={features[0].description}/>
        <Feature description={features[1].description}/>
        <Feature description={features[2].description}/>
      </div>
      <WaveBorder
        upperColor='#F2F9FA'
        lowerColor='#3FB1B5'
        animationNegativeDelay={2}
      />  
    </Container>
  );
};
