/* eslint-disable import/order */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form } from './styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export const ProductRegistration = () => {
  const schema = yup.object().shape({
    name: yup
      .string('Erro: Necessário preencher o campo nome')
      .required('Erro: Necessário preencher o campo nome'),
    description: yup
      .string('Erro: Necessário preencher o campo descrição')

      .required('Erro: Necessário preencher o campo descrição'),
    price: yup
      .number('Erro: Coloque o valor correto')
      .required('Erro: Necessário preencher o campo preço'),
    type: yup
      .string('Erro: Necessário preencher o campo tipo')
      .required('Erro: Necessário preencher o campo tipo'),
    img: yup
      .string('Erro: Coloque o link da imagem por favor')
      .required('Erro: Coloque o link da imagem por favor'),
    petType: yup
      .string('Erro: Necessário preencher o campo animal')
      .required('Erro: Necessário preencher o campo animal'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const token = localStorage.getItem('@pet:token');
  const idUser = localStorage.getItem('@pet:id');

  const authAxios = axios.create({
    baseURL: 'https://json-server-kenziegroup.herokuapp.com/product',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const submit = data => {
    console.log(data);
    authAxios
      .post(`https://json-server-kenziegroup.herokuapp.com/product`, data)

      .then(res => {
        toast.success('Produto cadastrado com sucesso');
      })
      .catch(error => {
        toast.error('Produto não foi cadastrado, tente novamente por favor');
        console.log(error);
      });
  };

  return (
    <div>
      <Form>
        <ToastContainer />
        <h1>Cadastro de produto</h1>

        <form onSubmit={handleSubmit(submit)}>
          <h3>Nome</h3>

          <input {...register('name')} />
          {errors.name && <h6> {errors.name.message}</h6>}
          <h3>Descrição</h3>
          <input {...register('description')} />
          {errors.description && <h6> {errors.description.message}</h6>}
          <h3>Preço</h3>
          <input {...register('price')} />
          {errors.price && <h6> {errors.price.message}</h6>}
          <h3>Tipo</h3>
          <input {...register('type')} />
          {errors.type && <h6> {errors.type.message}</h6>}
          <h3>Link da imagem</h3>
          <input {...register('img')} />
          {errors.img && <h6> {errors.img.message}</h6>}
          <h3>Animal</h3>
          <input {...register('petType')} />
          {errors.petType && <h6> {errors.petType.message}</h6>}
          <h3>Id do usuario</h3>
          <input {...register('userId')} value={idUser} />

          <button>Adicionar</button>
        </form>
      </Form>
    </div>
  );
};
