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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { InfoUser } from '../../components/InfoUser';

export const UserProfile = () => {
  const userInfo = JSON.parse(localStorage.getItem('@mi-au-food:user'));

  const [isOpen, setIsOpen] = useState(false);
  const [opacity, setOpacity] = useState(0);
  const [userChangeInfo, setUserChangeInfo] = useState([]);

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
    email: yup.string(),
    tel: yup.number(),
    address: yup.string(),
    cpf: yup.string(),
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
    <>
      <InfoUser />
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
                    <Input
                      placeholder="Nome"
                      type="name"
                      label="Nome"
                      name="name"
                      register={register}
                    ></Input>
                    <Input
                      placeholder="Email"
                      type="email"
                      label="Email"
                      name="email"
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
                      placeholder="Telefone"
                      type="telefone"
                      label="Telefone"
                      name="tel"
                      register={register}
                    ></Input>
                    <Input
                      placeholder="Endereço"
                      type="address"
                      label="Endereço"
                      name="address"
                      register={register}
                    ></Input>
                    <Input
                      placeholder="CPF"
                      type="cpf"
                      label="CPF"
                      name="cpf"
                      register={register}
                    ></Input>
                  </DivInput>
                  <button type="submit">Editar</button>
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
