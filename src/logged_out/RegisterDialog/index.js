import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';

import Modal from '../Modal';
import TextInput from '../components/TextInput';
import Button from './styles';
import validationSchema from './validationSchema';

import { Context } from '../../Context/AuthContext';

const RegisterDialog = ({ onClose, onSubmit }) => {
  const { error } = useContext(Context);

  return (
    <Modal title="Registrar" id="modal" onClose={onClose}>
      <Formik
        initialValues={{
          name: '',
          email: '',
          registration_number: '',
          password: '',
          passwordConfirm: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          onSubmit(values);
        }}
      >
        <Form>
          <TextInput
            label="Nome*"
            type="text"
            name="name"
            id="name"
            placeholder="Enedina Marques"
            autoComplete="off"
          />
          <TextInput
            label="E-mail*"
            type="email"
            name="email"
            id="email"
            placeholder="exemplo@exemplo.com"
            autoComplete="off"
          />
          <TextInput
            label="Matrícula*"
            type="text"
            name="registration_number"
            id="registration_number"
            placeholder="21/0419620"
            autoComplete="off"
          />
          <TextInput
            label="Senha*"
            name="password"
            type="password"
            id="password"
            placeholder="Crie uma senha"
          />
          <TextInput
            label="Confirmar senha*"
            type="password"
            name="passwordConfirm"
            id="passwordConfirm"
            placeholder="Confirme a senha"
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
          <Button type="submit">Registrar-se</Button>
        </Form>
      </Formik>
    </Modal>
  );
};

RegisterDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default RegisterDialog;
