/* eslint-disable*/
import { useEffect, useState } from 'react';
import { OrderCard } from '../../components/OrderCard';
import { ProfileCard } from '../../components/ProfileCard';
import { useAuth } from '../../context/auth';
import { API } from '../../services/api';
import { Main, Li } from './style';

export const ShopProfile = () => {
  const {user} = useAuth();
  const [ordersAvailable, setOrdersAvailable] = useState([]);
  
  const token = localStorage.getItem('@mi-au-food:token');

  useEffect(() => {
    API.get(`request`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      setOrdersAvailable(response.data);
    });
  }, [token]);
  
  return (
    <Main>
      <ProfileCard />
      <ul>
        <h2>Serviços em aberto</h2>
        <Li>
          <p><span>Nome do Cliente</span></p>
          <p><span>Status do Pedido</span></p>
          <p><span>Valor do Pedido</span></p>
        </Li>
        {ordersAvailable.map((order)=>{
        if(order.status === 'Aguardando'){
          return <OrderCard key={order.id} order={order}/>
        }
        })}
      </ul>
      <ul>
        <h2>Serviços em andamento</h2>
        <Li>
          <p><span>Nome do Cliente</span></p>
          <p><span>Status do Pedido</span></p>
          <p><span>Valor do Pedido</span></p>
        </Li>
      {ordersAvailable.map((order)=>{
        if(order.shopId == user.id){
          return <OrderCard key={order.id} order={order}/>
        }
        })}
      </ul>
    </Main>
  );
};
