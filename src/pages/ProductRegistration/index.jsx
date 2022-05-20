/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import { useAuth } from '../../context/auth';
import { API } from '../../services/api';

import lixo from '../../assets/lixo.svg';

import {
  Container,
  Form,
  List,
  Botao,
  BotaoModal,
  ButtonClose,
} from './styled';

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

  const { user, token } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [product, setProduct] = useState([]);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    API.get('/product').then(response => {
      setProduct(response.data);
    });
  };

  const authAxios = axios.create({
    baseURL: 'https://json-server-kenziegroup.herokuapp.com/product',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const submit = data => {
    authAxios
      .post('/', data)
      .then(res => {
        toast.success('Produto cadastrado com sucesso');
        setProduct([...product, res.data]);
      })
      .catch(() => {
        toast.error('Produto não foi cadastrado, tente novamente por favor');
      });
  };

  const removeApi = id => {
    authAxios.delete(`/${id}`).then(() => {
      fetchProducts();
    });
  };

  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <Container>
      <BotaoModal>
        <button type="button" onClick={openModal}>
          Cadastrar Produto
        </button>
      </BotaoModal>
      {modal === true && (
        <Form>
          <ButtonClose>
            <button type="button" onClick={closeModal}>
              X
            </button>
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
            <input type="hidden" {...register('userId')} value={user.id} />

            <button type="submit">Adicionar</button>
          </form>
        </Form>
      )}
      <List>
        <ul>
          {product.map(item => (
            <li key={item.id}>
              <img src={item.img} alt={item.name}></img>
              <h4>{item.name}</h4>
              <Botao>
                <img
                  onClick={() => removeApi(item.id)}
                  alt="lixo"
                  src={lixo}
                ></img>
              </Botao>
            </li>
          ))}
        </ul>
      </List>
    </Container>
  );
};
