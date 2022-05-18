/* eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ButtonEditar, InfoDiv, PetContainer, PetsMain } from './style';
import { FadingBackground } from './style';
import Modal, { ModalProvider } from 'styled-react-modal';
import { StyledModal } from './style';
import { DivInput, Form, Input } from '../UserForm/style';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

export const PetCard = () => {
  const userObject = JSON.parse(localStorage.getItem('@mi-au-food:user'));
  const token = localStorage.getItem('@mi-au-food:token');
  const [pets, setPets] = useState([]);
  const id = userObject.id;
  const baseUrl = `https://json-server-kenziegroup.herokuapp.com/users/${id}`;

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

  useEffect(() => {
    axios
      .get(baseUrl, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(response => {
        setPets(response.data.pets);
      });
  }, []);

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
      <PetsMain>
        <h3>Seus Pets</h3>
        {pets &&
          pets.map(info => {
            return (
              <PetContainer>
                <img src={info.img} />
                <InfoDiv>
                  <p>Name: {info.name}</p>
                  <p>Raça: {info.breed}</p>
                  <p>Idade: {info.age}</p>
                </InfoDiv>
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
                <ButtonEditar onClick={toggleModal}>Editar</ButtonEditar>
              </PetContainer>
            );
          })}
      </PetsMain>
    </ModalProvider>
  );
};
