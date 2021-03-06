import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../../context/auth';
import {
  BackgroundIMG,
  Container,
  Form,
  IMG5,
  IMG6,
  IMG7,
  IMG8,
  ContainerIMG,
  Title,
} from './style';
import image5 from '../../assets/image5.png';
import image6 from '../../assets/image6.png';
import image7 from '../../assets/image7.png';
import image8 from '../../assets/image8.png';
import { Input } from '../../components/Input';

export const UserRegister = () => {
  const { signUp } = useContext(AuthContext);

  const navigate = useNavigate();

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .required('Senha obrigatória')
      .min(8, 'Mínimo 8 dígitos'),
    passwordConfirm: yup
      .string()
      .oneOf([yup.ref('password')], 'Senhas diferentes')
      .required('Campo obrigatório'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = async ({ name, email, password }) => {
    try {
      const newData = {
        name,
        email,
        password,
        type: 'user',
      };

      await signUp(
        newData,
        navigate('/entrar', { replace: true }),
        toast.success(`Bem vindo/a ${name}`),
      );
    } catch (err) {
      toast.error('Algo deu errado, confira todos os campos');
    }
  };
  return (
    <Container>
      <Title>Mi-Au Food</Title>
      <ContainerIMG>
        <IMG5
          src={image5}
          alt="imagem mulher com cachorro"
          animate={{
            scale: [0, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ delay: 1.4, duration: 0.2 }}
        />
        <IMG7
          src={image7}
          alt="imagem homem com cachorro"
          animate={{
            scale: [0, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ delay: 0.8, duration: 0.2 }}
        />
        <IMG8
          src={image8}
          alt="imagem mulher com gato filhote"
          animate={{
            scale: [0, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ delay: 1.2, duration: 0.2 }}
        />
        <IMG6
          src={image6}
          alt="imagem gato plano de fundo"
          animate={{
            scale: [0, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{ delay: 1, duration: 0.2 }}
        />
      </ContainerIMG>
      <BackgroundIMG />
      <Form
        onSubmit={handleSubmit(onSubmitFunction)}
        animate={{
          x: [3000, 0],
        }}
      >
        <div>
          <h1>Registre-se e faça parte da família Mi-Au Food</h1>
          <Input
            label="Nome"
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            type="password"
            label="Senha"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            type="password"
            label="Confirmar senha"
            name="passwordConfirm"
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <button type="submit">Registrar</button>
          <h3>
            Já possui conta? Faça <Link to="/entrar">login</Link>
          </h3>
        </div>
      </Form>
    </Container>
  );
};
