import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Esse e-mail não é válido =(')
    .required('Insira uma e-mail válido.'),
  password: Yup.string()
    .required('Essa senha não é válida.'),
});

export default validationSchema;
