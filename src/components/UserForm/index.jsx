/* eslint-disable*/
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { DivInput, Form, Input } from './style';
import { useAuth } from '../../context/auth';

export const FormUser = ({ toggleModal }) => {
  const { editProfile } = useAuth();

  const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().required('Digite sua senha para continuar'),
    password: yup.string().required('Digite sua senha para continuar'),
    tel: yup.string().required(),
    address: yup.string().required(),
    cpf: yup.string().required(),
    img: yup.string().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitChange = data => {
    editProfile(data);
    toggleModal();
  };

  return (
    <Form>
      <DivInput onSubmit={handleSubmit(submitChange)}>
        <p>Editar informações</p>
        <Input
          placeholder="Nome"
          type="text"
          label="Nome"
          name="name"
          {...register('name')}
        ></Input>
        <Input
          placeholder="Email"
          type="email"
          label="Email"
          name="email"
          {...register('email')}
        ></Input>
        <Input
          placeholder="senha"
          type="password"
          label="Senha"
          name="password"
          {...register('password')}
        ></Input>
        <Input
          placeholder="Foto do perfil"
          type="text"
          label="Url da imagem"
          name="img"
          {...register('img')}
        ></Input>
        <Input
          placeholder="Telefone"
          type="text"
          label="Telefone"
          name="tel"
          {...register('tel')}
        ></Input>
        <Input
          placeholder="Endereço"
          type="text"
          label="Endereço"
          name="address"
          {...register('address')}
        ></Input>
        <Input
          placeholder="CPF"
          type="text"
          label="CPF"
          name="cpf"
          {...register('cpf')}
        ></Input>
        <button type="submit">Enviar</button>
      </DivInput>
    </Form>
  );
};
