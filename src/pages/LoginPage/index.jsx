import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { Link, useNavigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../context/auth';
import loginBG from '../../assets/Rectangle 15.png';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { MiauFoodIcon } from '../../components/MiauFoodIcon';
import { Form, MainDiv, IMG, MainContainer } from './style';

export const LoginPage = () => {
  const { user, signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || null;

  const schema = yup.object().shape({
    email: yup.string().email('E-mail inválido').required('E-mail obrigatória'),
    password: yup.string().required('Senha obrigatória'),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });


  const redirectTo = () => {
    if (from) {
      return navigate(from, { replace: true });
    }

    if (user.type === 'user') {
      return navigate('/perfil/usuario', { replace: true });
    }

    if (user.type === 'shop') {
      return navigate('/perfil/loja', { replace: true });
    }
  };

  const onSubmitFunction = async data => {
    try {
      await signIn(data, redirectTo);
    } catch (err) {
      toast.error('E-mail ou senha inválidos, tente novamente.');
    }
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
            error={errors.email?.message}
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
