import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import TextInput from '../components/TextInput';
import Modal from '../Modal';
import Button from './styles';

const LoginDialog = ({ onClose }) => (
  <Modal title="Entrar" id="modal" onClose={onClose}>
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
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
        <Button type="submit">Entrar</Button>
      </Form>
    </Formik>
  </Modal>
);

LoginDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default LoginDialog;
