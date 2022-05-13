import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Input, DivTeste, Container, Form } from './style';

export const UserRegister = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .matches(
        /^[a-zA-Z]+$/,
        'Nome de usuário inválido. Somente letras, sem espaços.',
      ),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        'Pelo menos uma letra maiúscula, um número e caractere especial, 8 caracteres mínimos.',
      ),
    confirmPassword: yup
      .string()
      .required('Senha obrigatória.')
      .oneOf([yup.ref('password'), null], 'Senhas diferentes.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  console.log(register, errors);

  const onSubmitFunction = data => {
    toast(`Bem vindo(a), ${data.name}!`);
  };

  return (
    <Container>
      <DivTeste />
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <h1>Registrese e faça parte da família Mi-Au Food</h1>
          <Input placeholder="nome" />
          <Input placeholder="Email" />
          <Input placeholder="Senha" />
          <Input placeholder="Confirmar Senha" />
          <h3>Já possui conta? Faça LINK</h3>
        </div>
      </Form>
    </Container>
  );
};
