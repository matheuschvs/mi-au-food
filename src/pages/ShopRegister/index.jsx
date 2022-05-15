import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import {
  BackgroundIMG,
  Container,
  Form,
  IMG5,
  IMG6,
  ContainerIMG,
  Title,
  InputCity,
} from './style';
import image5 from '../../assets/image3.png';
import image6 from '../../assets/image4.png';
import { Input } from '../../components/Input';

/* eslint-disable */

export const ShopRegister = () => {
  /* eslint-disable */

  const { signUp } = useContext(AuthContext);

  const formSchema = yup.object().shape({
    name: yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup
      .string()
      .min(6, 'Mínimo 6 dígitos')
      .required('Senha obrigatória'),
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

  const onSubmitFunction = data => {
    signUp(data);
    toast.success(`Bem vindo(a), ${data.name}!`);
  };

  return (
    <Container>
      <Title>Mi-Au Food</Title>
      <ContainerIMG>
        <IMG6 src={image6} alt="imagem gato tela registro" />
        <IMG5 src={image5} alt="imagem mulher com cachorro" />
      </ContainerIMG>
      <BackgroundIMG />
      <Form onSubmit={handleSubmit(onSubmitFunction)}>
        <div>
          <h1>Seja uma empresa parceira da Mi-Au Food</h1>
          <Input
            label="CEP"
            name="CEP"
            register={register}
            error={errors.CEP?.message}
            disable
          />
          <section>
            <select {...register('exemplo1')} type="select" disable>
              <option>DF</option>
            </select>
            <InputCity
              type="text"
              label="cidade"
              placeholder="CIDADE"
              name="cidade"
              error={errors.cidade?.message}
            />
          </section>
          <Input
            type="password"
            label="senha"
            name="password"
            register={register}
            error={errors.password?.message}
          />
          <Input
            type="password"
            label="confirmar senha"
            name="passwordConfirm"
            register={register}
            error={errors.passwordConfirm?.message}
          />
          <Input
            label="nome da empresa"
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <button type="submit">Registrar</button>
          <h3>
            Já é nosso parceiro? Faça <Link to="/entrar">login</Link>
          </h3>
        </div>
      </Form>
    </Container>
  );
};
