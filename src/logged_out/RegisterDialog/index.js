import React from 'react';
import PropTypes from 'prop-types';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import Modal from '../Modal';
import TextInput from '../components/TextInput';
import Button from './styles';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Seu nome precisa ter três letras no mínimo.')
    .required('Qual é o seu nome?'),
  email: Yup.string()
    .email('Esse e-mail não é válido =(')
    .required('Você usará esse e-mail para se conectar.'),
  registrationNumber: Yup.string()
    .min(9, 'Sua matrícula deve ter nove dígitos.')
    .max(9, 'Sua matrícula deve ter nove dígitos.')
    .required('Insira sua matrícula.'),
  password: Yup.string()
    .min(5, 'Sua senha deve ter pelo menos cinco caracteres.')
    .max(50, 'Sua senha deve ter no máximo 50 caracteres.')
    .required('Insira uma combinação de pelo menos cinco letras, sinais de pontuação ou símbolos(como ! e &).'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.'),
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
