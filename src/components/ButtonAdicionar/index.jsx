/* eslint-disable */

import { useState } from 'react';
import { ModalProvider } from 'styled-react-modal';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { DivInput, Form, Input } from '../UserForm/style';
import { useAuth } from '../../context/auth';
import { API } from '../../services/api';
import { Button } from '../UserForm/style';

import { Adicionar, StyledModal, FadingBackground } from './style';

export const ButtonAdicionar = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  const { user, setUser, token } = useAuth();

  const [pets, setPets] = useState(user.pets || []);

  function toggleModal() {
    setOpacity(0);
    setIsOpen(!isOpen);
  }

  function afterOpen() {
    setTimeout(() => {
      setOpacity(1);
    }, 100);
  }

  function beforeClose() {
    return new Promise(resolve => {
      setOpacity(0);
      setTimeout(resolve, 300);
    });
  }

  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string().required('Digite sua senha para continuar'),
    password: yup.string().required('Digite sua senha para continuar'),
    breed: yup.string(),
    age: yup.number(),
    img: yup.string(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const addPet = data => {
    API.put(`/users/${user.id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      setUser(response.data);
      return localStorage.setItem(
        '@mi-au-food:user',
        JSON.stringify(response.data),
      );
    });
  };

  //cath error e toast ^^^^

  const submitChange = data => {
    const dataPet = {
      ...user,
      password: data.password,
      pets: [
        ...pets,
        { name: data.name, breed: data.breed, age: data.age, img: data.img },
      ],
    };
    addPet(dataPet);
    toggleModal();
  };

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <Adicionar onClick={toggleModal}>{text}</Adicionar>
      <StyledModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
      >
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
              placeholder="Foto"
              type="text"
              label="Url da imagem"
              name="img"
              {...register('img')}
            ></Input>
            <Input
              placeholder="Raça"
              type="text"
              label="Raça"
              name="breed"
              {...register('breed')}
            ></Input>
            <Input
              placeholder="Idade"
              type="number"
              label="Idade"
              name="age"
              {...register('age')}
            ></Input>
            <span>É preciso email e senha para cadastrar pets</span>
            <Input
              placeholder="Email"
              type="email"
              label="Email"
              name="email"
              {...register('email')}
            ></Input>{' '}
            <Input
              placeholder="Senha"
              type="password"
              label="senha"
              name="password"
              {...register('password')}
            ></Input>
            <button type="submit">Enviar</button>
          </DivInput>
        </Form>
      </StyledModal>
    </ModalProvider>
  );
};
