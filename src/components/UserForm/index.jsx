/* eslint-disable*/
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { DivInput, Form, Input } from './style';

export const FormUser = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Z]+$/,
        'Nome de usuário inválido. Somente letras, sem espaços.',
      ),
    email: yup.string(),
    tel: yup.number(),
    address: yup.string(),
    cpf: yup.string(),
    img: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <Form>
      <DivInput>
        <p>Editar informações</p>
        <Input
          placeholder="Nome"
          type="name"
          label="Nome"
          name="name"
          register={register}
        ></Input>
        <Input
          placeholder="Email"
          type="email"
          label="Email"
          name="email"
          register={register}
        ></Input>
        <Input
          placeholder="Foto do perfil"
          type="img"
          label="Url da imagem"
          name="img"
          register={register}
        ></Input>
        <Input
          placeholder="Telefone"
          type="telefone"
          label="Telefone"
          name="tel"
          register={register}
        ></Input>
        <Input
          placeholder="Endereço"
          type="address"
          label="Endereço"
          name="address"
          register={register}
        ></Input>
        <Input
          placeholder="CPF"
          type="cpf"
          label="CPF"
          name="cpf"
          register={register}
        ></Input>
      </DivInput>
      <p>Enviar</p>
    </Form>
  );
};
