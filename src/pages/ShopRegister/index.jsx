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
} from './style';
import image5 from '../../assets/image3.png';
import image6 from '../../assets/image4.png';
import { defaultAnimation, defaultTransition } from '../../utils/defaultMotion';
import { Input } from '../../components/Input';

/* eslint-disable */

export const ShopRegister = () => {
  /* eslint-disable */

  const { signUp } = useContext(AuthContext);

  const selects = [
    { id: 'AC', text: 'Acre' },
    { id: 'AL', text: 'Alagoas' },
    { id: 'AP', text: 'Amapá' },
    { id: 'AM', text: 'Amazonas' },
    { id: 'BA', text: 'Bahia' },
    { id: 'CE', text: 'Ceará' },
    { id: 'DF', text: 'Distrito Federal' },
    { id: 'ES', text: 'Espírito Santo' },
    { id: 'GO', text: 'Goiás' },
    { id: 'MA', text: 'Maranhão' },
    { id: 'MT', text: 'Mato Grosso' },
    { id: 'MS', text: 'Mato Grosso do Sul' },
    { id: 'MG', text: 'Minas Gerais' },
    { id: 'PA', text: 'Pará' },
    { id: 'PB', text: 'Paraíba' },
    { id: 'PR', text: 'Paraná' },
    { id: 'PE', text: 'Pernambuco' },
    { id: 'PI', text: 'Piauí' },
    { id: 'RJ', text: 'Rio de Janeiro' },
    { id: 'RN', text: 'Rio Grande do Norte' },
    { id: 'RS', text: 'Rio Grande do Sul' },
    { id: 'RO', text: 'Rondônia' },
    { id: 'RR', text: 'Roraima' },
    { id: 'SC', text: 'Santa Catarina' },
    { id: 'SP', text: 'São Paulo' },
    { id: 'SE', text: 'Sergipe' },
    { id: 'TO', text: 'Tocantins' },
  ];

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
    cidade: yup.string().required('Nome obrigatório'),
    estado: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = data => {
    signUp(data, toast.success(`Bem vindo(a), ${data.name}!`));
  };

  return (
    <Container animate={defaultAnimation} transition={defaultTransition}>
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
            <select name="estado" {...register('estado')}>
              {selects.map(item => (
                <option value={item.id}>{item.text}</option>
              ))}
            </select>
            <Input
              type="text"
              label="Cidade"
              name="cidade"
              register={register}
              error={errors.cidade?.message}
            />
          </section>
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
          <Input
            label="Nome da empresa"
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
