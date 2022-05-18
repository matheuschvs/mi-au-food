import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Container, Form, Box, Input, IMG } from './style';
import { Button } from '../../components/Button';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';
import loginBG from '../../assets/Rectangle 15.png';

export const LoginPage = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

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

  const redirectTo = () => {
    navigate('/perfil/usuario', { replace: true });
  };

  return (
    <>
      <Container>
        <Form>
          <Box>
            <h1>Faça seu Login</h1>
            <Input
              type="email"
              label="Email"
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
            <Button
              type="button"
              onClick={() =>
                signIn(
                  { email: 'marcos@gmail.com', password: '123456' },
                  redirectTo(),
                )
              }
            >
              Login
            </Button>

            <Link to="/registro">
              <h3>Não possui conta? Registre-se</h3>
            </Link>
          </Box>
        </Form>
      </Container>
    </>
  );
};
