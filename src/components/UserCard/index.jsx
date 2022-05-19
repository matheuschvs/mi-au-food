/* eslint-disable*/
import axios from 'axios';
import { User } from 'react-feather';
import { useEffect, useState } from 'react';
import {
  ButtonEditar,
  Container,
  InfoDiv,
  EmptyUser,
  StyledModal,
} from './style';
import { FadingBackground } from './style';
import Modal, { ModalProvider } from 'styled-react-modal';
import { FormUser } from '../../components/UserForm';
import { useAuth } from '../../context/auth';

export const UserCard = () => {
  // const userObject = JSON.parse(localStorage.getItem('@mi-au-food:user'));
  // const token = localStorage.getItem('@mi-au-food:token');
  // const [newInfo, SetNewInfo] = useState([]);
  // const id = userObject.id;
  // const baseUrl = `https://json-server-kenziegroup.herokuapp.com/users/${id}`;
  const { user } = useAuth();

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

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <Container>
        <figure>
          {user.img ? (
            <img src={`${user.img}`} />
          ) : (
            <EmptyUser>
              <User size="100px" />
            </EmptyUser>
          )}
        </figure>
        <InfoDiv>
          <p>
            <strong>Nome:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Telefone:</strong> {user.tel}
          </p>
          <p>
            <strong>Cidade:</strong> {user.address}
          </p>
          <p>
            <strong>CPF:</strong> {user.cpf}
          </p>
          <ButtonEditar text="Editar" onClick={toggleModal}>
            Editar
          </ButtonEditar>
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
          <FormUser toggleModal={toggleModal} />
        </StyledModal>
      </Container>
    </ModalProvider>
  );
};
