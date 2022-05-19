/* eslint-disable*/
import { Adicionar, StyledModal } from './style';
import { useState } from 'react';
import { FadingBackground } from './style';
import { ModalProvider } from 'styled-react-modal';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { DivInput, Form, Input } from '../UserForm/style';

export const ButtonAdicionar = ({ text }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);

  function toggleModal(e) {
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
    name: yup
      .string()
      .matches(
        /^[a-zA-Z]+$/,
        'Nome de usuário inválido. Somente letras, sem espaços.',
      ),
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
              placeholder="Raça"
              type="breed"
              label="Raça"
              name="breed"
              register={register}
            ></Input>
            <Input
              placeholder="Idade"
              type="age"
              label="Idade"
              name="age"
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
              placeholder="Url da Foto"
              type="img"
              label="Imagem"
              name="img"
              register={register}
            ></Input>
          </DivInput>
          <p>Enviar</p>
        </Form>
      </StyledModal>
    </ModalProvider>
  );
};
