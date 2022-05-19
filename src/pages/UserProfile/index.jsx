import { UserCard } from '../../components/UserCard';
import { PetCard } from '../../components/PetCard';
import { OrderList } from '../../components/OrderList';
import { ButtonAdicionar } from '../../components/ButtonAdicionar';

import { UserContainer, Main } from './style';

export const UserProfile = () => {
  const userInfo = JSON.parse(localStorage.getItem('@mi-au-food:user'));

  return (
    <Main>
      <UserContainer>
        <h2>Olá {userInfo.name}</h2>
        <h3>Suas informações</h3>
        <UserCard />
        <ButtonAdicionar text="Adicionar Pets" />
      </UserContainer>
      <PetCard />
      <OrderList />
    </Main>
  );
};
