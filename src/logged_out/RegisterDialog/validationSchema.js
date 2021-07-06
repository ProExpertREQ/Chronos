import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Seu nome precisa ter três letras no mínimo.')
    .required('Qual é o seu nome?'),
  email: Yup.string()
    .email('Esse e-mail não é válido =(')
    .required('Você usará esse e-mail para se conectar.'),
  registration_number: Yup.string()
    .min(9, 'Sua matrícula deve ter nove dígitos.')
    .max(9, 'Sua matrícula deve ter nove dígitos.')
    .required('Insira sua matrícula.'),
  password: Yup.string()
    .min(5, 'Sua senha deve ter pelo menos cinco caracteres.')
    .max(50, 'Sua senha deve ter no máximo 50 caracteres.')
    .required('Insira uma combinação de pelo menos cinco letras, sinais de pontuação ou símbolos(como ! e &).'),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais.')
    .required('Você precisa confirmar sua senha.'),
});

export default validationSchema;
