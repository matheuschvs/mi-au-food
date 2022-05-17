/* eslint-disable*/
import {
  BoasVindas,
  InfoContainer,
  Main,
  OrderBox,
  PetContainer,
  UserContainer,
  Order,
} from './style';
export const UserProfile = () => {
  const userInfo = JSON.parse(localStorage.getItem('@mi-au-food:user'));

  return (
    <>
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
              <button>Editar</button>
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
            </div>
            <button>Editar</button>
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
    </>
  );
};
