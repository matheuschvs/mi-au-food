/*eslint-disable*/
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/auth';
import { useContext } from 'react';
import loginBG from '../../assets/Rectangle 15.png';
import { Form, MainDiv, IMG, MainContainer } from './style';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { MiauFoodIcon } from '../../components/MiauFoodIcon';

export const LoginPage = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    email: yup.string().required('É preciso um email para acessar o site'),
    password: yup.string().required('É preciso uma senha para acessar o site'),
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

  const onSubmitFunction = data => {
    signIn(data, redirectTo);
  };

  return (
    <MainContainer>
      <header>
        <MiauFoodIcon />
      </header>
      <MainDiv>
        <IMG src={loginBG} />
        <Form onSubmit={handleSubmit(onSubmitFunction)}>
          <h1>Faça seu Login</h1>
          <Input
            label="Email"
            name="email"
            register={register}
            error={errors.name?.message}
          ></Input>

          <Input
            type="password"
            label="Senha"
            name="password"
            register={register}
            error={errors.password?.message}
          ></Input>
          <Button text="Entrar" type="submit"></Button>

          <Link to="/registro/usuario">
            <p>Não possui conta? Registre-se</p>
          </Link>
        </Form>
      </MainDiv>
    </MainContainer>
  );
};
