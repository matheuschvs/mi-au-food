/* eslint-disable no-undef */
/* eslint-disable no-restricted-globals */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-console */
/* eslint-disable import/order */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */

import { API } from '../../services/api';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Form, List, Botao, BotaoModal, ButtonClose } from './styled';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import lixo from '../../assets/lixo.svg';

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

  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    API.get('/product').then(response => {
      setProduct(response.data);
    });
  }, []);

  const token = localStorage.getItem('@mi-au-food:token');
  const user = localStorage.getItem('@mi-au-food:user');

  const idUser = JSON.parse(user);

  console.log(idUser.id);

  const authAxios = axios.create({
    baseURL: 'https://json-server-kenziegroup.herokuapp.com/product',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const submit = data => {
    authAxios
      .post(`https://json-server-kenziegroup.herokuapp.com/product`, data)

      .then(res => {
        toast.success('Produto cadastrado com sucesso');
        setProduct([...product, res.data]);
      })
      .catch(error => {
        toast.error('Produto não foi cadastrado, tente novamente por favor');
        console.log(error);
      });
  };

  const removeApi = id => {
    authAxios
      .delete(`https://json-server-kenziegroup.herokuapp.com/product/${id}`)
      .then(response => {
        location.reload(true);
      });
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <div>
      <BotaoModal>
        <button onClick={openModal}>Cadastrar Produto</button>
      </BotaoModal>

      <List>
        <ul>
          {product.map(item => (
            <li key={item.id}>
              <img src={item.img}></img>
              <h4>{item.name}</h4>
              <Botao>
                <img onClick={() => removeApi(item.id)} src={lixo}></img>
              </Botao>
            </li>
          ))}
        </ul>
      </List>
      {modal === true && (
        <Form>
          <ToastContainer />
          <ButtonClose>
            <button onClick={closeModal}>X</button>
          </ButtonClose>

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
            <input {...register('userId')} value={idUser.id} />

            <button>Adicionar</button>
          </form>
        </Form>
      )}
    </div>
  );
};
