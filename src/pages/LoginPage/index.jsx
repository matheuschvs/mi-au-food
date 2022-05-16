import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Container, Form, Box, Input, IMG } from './style';
import { Button } from '../../components/Button';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import loginBG from '../../assets/Rectangle 15.png';
import { Header } from '../../components/Header';

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
    <>
      <Header />
      <Container>
        <Form>
          <Box onSubmit={handleSubmit(submitLogin)}>
            <h1>Faça seu Login</h1>
            <Input
              label="email"
              name="email"
              register={register}
              error={errors.email?.message}
            ></Input>

            <Input
              type="password"
              label="senha"
              name="password"
              register={register}
              error={errors.password?.message}
            ></Input>
            <ToastContainer />
            <Button type="submit">Login</Button>

            <Link to="/registro">
              <h3>Não possui conta? Registre-se</h3>
            </Link>
          </Box>
        </Form>
        <IMG src={loginBG} />
      </Container>
    </>
  );
};
