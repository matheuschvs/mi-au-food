/* eslint-disable*/
import {
  BoasVindas,
  InfoContainer,
  Main,
  OrderBox,
  PetContainer,
  UserContainer,
  Order,
  ButtonEditar,
  Input,
  DivInput,
  EditX,
} from './style';
import { useState } from 'react';
import { StyledModal } from './style';
import { FadingBackground } from './style';
import Modal, { ModalProvider } from 'styled-react-modal';

export const UserProfile = () => {
  const userInfo = JSON.parse(localStorage.getItem('@mi-au-food:user'));

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
    <>
      <ModalProvider backgroundComponent={FadingBackground}>
        <BoasVindas>Seja bem vind(a/o) {userInfo.name}</BoasVindas>
        <Main>
          <InfoContainer>
            <h3>Suas informações</h3>
            <UserContainer>
              <img src={`${userInfo.img}`} />

              <div>
                <p>Nome: {userInfo.name}</p>
                <p>Email: {userInfo.email}</p>
                <p>Telefone: {userInfo.tel}</p>
                <p>Cidade: {userInfo.address}</p>
                <p>CPF: {userInfo.cpf}</p>
                <ButtonEditar onClick={toggleModal}>Editar</ButtonEditar>

                <StyledModal
                  isOpen={isOpen}
                  afterOpen={afterOpen}
                  beforeClose={beforeClose}
                  onBackgroundClick={toggleModal}
                  onEscapeKeydown={toggleModal}
                  opacity={opacity}
                  backgroundProps={{ opacity }}
                >
                  <EditX>
                    <span>Editar informações</span>
                    <button onClick={toggleModal}>X</button>
                  </EditX>
                  <DivInput>
                    <Input placeholder="Nome"></Input>
                    <Input placeholder="Email"></Input>
                    <Input placeholder="Foto do perfil"></Input>
                    <Input placeholder="Telefone"></Input>
                    <Input placeholder="Endereço"></Input>
                    <Input placeholder="CPF"></Input>
                  </DivInput>
                  <button>Editar</button>
                </StyledModal>
              </div>
            </UserContainer>
            <h4>Seus Pets</h4>
            <PetContainer>
              <section>
                <img src={`${userInfo.pets[0].img}`} />
              </section>
              <div>
                <p>Nome: {userInfo.pets[0].name}</p>
                <p>Idade: {userInfo.pets[0].age}</p>
                <p>Raça: {userInfo.pets[0].raça}</p>
                <ButtonEditar>Editar</ButtonEditar>
              </div>
            </PetContainer>
          </InfoContainer>
          <OrderBox>
            <div>
              <Order>
                <p>Pedido: id</p>
                <p>Status: Enviado</p>
                <p>Valor: R$110,00</p>
                <p>Ok</p>
              </Order>
            </div>
          </OrderBox>
        </Main>
      </ModalProvider>
    </>
  );
};
