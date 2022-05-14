import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Container, Form, Box, Input, IMG } from './style';
import { Button } from '../../components/Header/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import loginBG from '../../assets/Rectangle 15.png';

export const LoginPage = () => {
  const { signIn } = useContext(AuthContext);

  const schema = yup.object().shape({
    name: yup
      .string()
      .required('Nome obrigatório')
      .matches(
        /^[a-zA-Z]+$/,
        'Nome de usuário inválido. Somente letras, sem espaços.',
      ),
    password: yup
      .string()
      .required('Senha obrigatória')
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        'Pelo menos uma letra maiúscula, um número e caractere especial, 8 caracteres mínimos.',
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitLogin = data => {
    signIn(data);
    toast.success(`Bem vindo(a), ${data.name}!`);
  };

  return (
    <Container>
      <IMG src={loginBG} />
      <Form>
        <Box onSubmit={handleSubmit(submitLogin)}>
          <h1>Faça seu Login</h1>
          <Input
            placeholder="Email"
            type="name"
            label="nome"
            {...register('name')}
            error={errors.name?.message}
          ></Input>

          <Input
            placeholder="Senha"
            type="password"
            label="senha"
            {...register('password')}
            error={errors.password?.message}
          ></Input>
          <ToastContainer />
          <Button type="submit">Login</Button>

          <Link to="/registro">
            <h3>Não possui conta? Registre-se</h3>
          </Link>
        </Box>
      </Form>
    </Container>
  );
};
