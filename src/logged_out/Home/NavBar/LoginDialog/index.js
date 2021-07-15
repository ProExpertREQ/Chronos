import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import TextInput from '../TextInput';
import Modal from '../Modal';
import Button from './styles';
import validationSchema from './validationSchema';

import { Context } from '../../../../Context/AuthContext';

const LoginDialog = ({ onClose, onSubmit }) => {
  const { error } = useContext(Context);

  return (
    <Modal title="Entrar" id="modal" onClose={onClose}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          onSubmit(values);
        }}
      >
        <Form>
          <TextInput
            label="E-mail"
            type="email"
            name="email"
            id="email"
            placeholder="Digite seu e-mail"
            autoComplete="off"
          />
          <TextInput
            label="Senha"
            type="password"
            name="password"
            id="password"
            placeholder="Sua senha"
          />
          {error
            ? (
              <div
                style={{ color: '#FE5244', fontWeight: 400, fontSize: '1rem' }}
              >
                {error}

              </div>
            )
            : null}
          <Button type="submit">Entrar</Button>
        </Form>
      </Formik>
    </Modal>
  );
};

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default LoginDialog;
