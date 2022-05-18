/* eslint-disable*/
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ButtonEditar, Container, InfoDiv, Main, StyledModal } from './style';
import { FadingBackground } from './style';
import Modal, { ModalProvider } from 'styled-react-modal';
import { FormUser } from '../../components/UserForm';

export const UserCard = () => {
  const userObject = JSON.parse(localStorage.getItem('@mi-au-food:user'));
  const token = localStorage.getItem('@mi-au-food:token');
  const [newInfo, SetNewInfo] = useState([]);
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
        SetNewInfo(response.data);
      });
  }, []);

  return (
    <ModalProvider backgroundComponent={FadingBackground}>
      <Container>
        <img src={`${newInfo.img}`} />
        <InfoDiv>
          <p>Nome: {newInfo.name}</p>
          <p>Email: {newInfo.email}</p>
          <p>Telefone: {newInfo.tel}</p>
          <p>Cidade: {newInfo.address}</p>
          <p>CPF: {newInfo.cpf}</p>
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
          <FormUser />
        </StyledModal>
        <ButtonEditar text="Editar" onClick={toggleModal}>
          Editar
        </ButtonEditar>
      </Container>
    </ModalProvider>
  );
};
