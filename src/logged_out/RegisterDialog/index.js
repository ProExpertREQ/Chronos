import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Modal from '../Modal';
import TextInput from '../components/TextInput';
import Button from './styles';

const schema = Yup.object().shape({
  name: Yup.string().required('Qual é o seu nome?'),
  email: Yup.string().required('Você usará esse email quando se conectar e se precisar redefinir a senha.'),
  registrationNumber: Yup.string().required('Insira a matrícula vinculada à Universidade de Brasília'),
  password: Yup.string().required('Insira uma combinação de pelo menos seis letras, sinais de pontuação e símbolos(como ! e &).'),
  passwordConfirm: Yup.string(),
});

const RegisterDialog = ({ onClose = () => {} }) => (
  <Modal title="Registrar" id="modal" onClose={onClose}>
    <Formik
      initialValues={{
        name: '',
        email: '',
        registrationNumber: '',
        password: '',
        passwordConfirm: '',
        acceptedTerms: false, // added for our checkbox
        jobType: '', // added for our select
      }}
      validationSchema={schema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(false);
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
          name="registrationNumber"
          id="registrationNumber"
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
        <Button type="submit">Registrar-se</Button>
      </Form>
    </Formik>
  </Modal>
);

RegisterDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default RegisterDialog;
