import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
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

/* eslint-disable */

export const UserRegister = () => {
  /* eslint-disable */

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

  const onSubmitFunction = data => {
    toast(`Bem vindo(a), ${data.name}!`);
  };

  return (
    <Container>
      <Title>Mi-Au Food</Title>
      <ContainerIMG>
        <IMG5 src={image5} alt="imagem mulher com cachorro" />
        <IMG7 src={image7} alt="imagem homem com cachorro" />
        <IMG8 src={image8} alt="imagem mulher com gatinho" />
        <IMG6 src={image6} alt="imagem gato tela registro" />
      </ContainerIMG>
      <BackgroundIMG />
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <h1>Registre-se e faça parte da família Mi-Au Food</h1>
          <Input
            label="nome"
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <Input
            label="email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            type="password"
            label="senha"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            type="password"
            label="confimar senha"
            name="passwordConfirm"
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <button type="submit">Registrar</button>
          <h3>Já possui conta? Faça login</h3>
        </div>
      </Form>
    </Container>
  );
};
