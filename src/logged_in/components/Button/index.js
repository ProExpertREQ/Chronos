import React from 'react';

import PropTypes from 'prop-types';

import Container from './styles';

export default function Button({ title }) {
  return (
    <Container onClick={() => {}}>
      {title}
    </Container>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
};
