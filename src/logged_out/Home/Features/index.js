import React from 'react';

import { Container } from './styles';
import features from './featuresArray';
import Feature from './Feature'; 

import WaveBorder from './Wave';

export default function Features () {
  return (
    <Container id="features">
      <h1>Features</h1>
      <div className="row">
        {features.map((feature) => (
          <Feature
            key={feature.id}
            description={feature.description}
          />
        ))}
      </div>
      <WaveBorder
        upperColor='#F2F9FA'
        lowerColor='#3FB1B5'
        animationNegativeDelay={2}
      />  
    </Container>
  );
};