import React from 'react';
import { PropTypes } from 'prop-types';

import { useField } from 'formik';

import Container from './styles';

const TextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <Container>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </Container>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default TextInput;
