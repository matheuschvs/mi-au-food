/* eslint-disable*/
import { UserCard } from '../../components/UserCard';
import { PetCard } from '../../components/PetCard';
import { UserContainer, Main } from './style';
import { OrderList } from '../../components/OrderList';
import { ButtonAdicionar } from '../../components/ButtonAdicionar';

export const UserProfile = () => {
  const userInfo = JSON.parse(localStorage.getItem('@mi-au-food:user'));

  return (
    <Main>
      <UserContainer>
        <h2>Seja bem vind(a/o) {userInfo.name}</h2>
        <h3>Suas informações</h3>
        <UserCard />
        <ButtonAdicionar text="Adicionar Pets" />
      </UserContainer>
      <PetCard />
      <OrderList />
    </Main>
  );
};
