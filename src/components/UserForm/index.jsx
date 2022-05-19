/* eslint-disable*/
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { DivInput, Form } from './style';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/auth';

export const FormUser = ({ toggleModal }) => {
  const userObject = JSON.parse(localStorage.getItem('@mi-au-food:user'));
  const token = localStorage.getItem('@mi-au-food:token');
  const [newInfo, SetNewInfo] = useState([]);
  const id = userObject.id;
  const baseUrl = `https://json-server-kenziegroup.herokuapp.com/users/${id}`;

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

  // const patchAxios = (data, callBack = () => {}) => {
  //   axios.patch(baseUrl, data, {
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //   });
  // };

  // const attInfo = () => {
  //   axios
  //     .get(baseUrl, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then(response => {
  //       console.log(response.data);
  //       localStorage.setItem('@mi-au-food:user', JSON.stringify(response.data));
  //     });
  // };

  const submitChange = data => {
    // patchAxios(data);
    // attInfo();
    editProfile(data);
    toggleModal();
  };

  return (
    <Form>
      <DivInput onSubmit={handleSubmit(submitChange)}>
        <p>Editar informações</p>
        <input
          placeholder="Nome"
          type="text"
          label="Nome"
          name="name"
          {...register('name')}
        ></input>
        <input
          placeholder="Email"
          type="email"
          label="Email"
          name="email"
          {...register('email')}
        ></input>
        <input
          placeholder="senha"
          type="password"
          label="Senha"
          name="password"
          {...register('password')}
        ></input>
        <input
          placeholder="Foto do perfil"
          type="text"
          label="Url da imagem"
          name="img"
          {...register('img')}
        ></input>
        <input
          placeholder="Telefone"
          type="text"
          label="Telefone"
          name="tel"
          {...register('tel')}
        ></input>
        <input
          placeholder="Endereço"
          type="text"
          label="Endereço"
          name="address"
          {...register('address')}
        ></input>
        <input
          placeholder="CPF"
          type="text"
          label="CPF"
          name="cpf"
          {...register('cpf')}
        ></input>
        <button type="submit">
          Enviar
        </button>
      </DivInput>
    </Form>
  );
};
