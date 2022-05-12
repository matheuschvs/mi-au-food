/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useState } from 'react';

import { Form } from './styled';

export const ProductRegistration = () => {
  const { register, handleSubmit } = useForm({});
  const token = localStorage.getItem('@pet:token');

  const submit = data => {
    axios
      .post(`https://json-server-kenziegroup.herokuapp.com/product`, data)

      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div>
      <Form>
        <h1>Cadastro de produto</h1>

        <form onSubmit={handleSubmit(submit)}>
          <h3>Nome</h3>

          <input {...register('name')} />
          <h3>Descrição</h3>
          <input {...register('description')} />
          <h3>Preço</h3>
          <input {...register('price')} />
          <h3>Tipo</h3>
          <input {...register('type')} />
          <h3>Link da imagem</h3>
          <input {...register('img')} />
          <h3>Animal</h3>
          <input {...register('petType')} />
          <button>Adicionar</button>
        </form>
      </Form>
    </div>
  );
};
