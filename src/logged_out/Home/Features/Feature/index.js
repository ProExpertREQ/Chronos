import React from 'react';
import PropTypes from 'prop-types';

import Article from './styles';

export default function Feature({ description }) {
  return (
    <Article>
      <p>{description}</p>
    </Article>
  );
}

Feature.propTypes = {
  description: PropTypes.string.isRequired,
};
