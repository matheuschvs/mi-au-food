/* eslint-disable*/
import { useEffect, useState } from 'react';
import { OrderCard } from '../../components/OrderCard';
import { ProfileCard } from '../../components/ProfileCard';
import { useAuth } from '../../context/auth';
import { API } from '../../services/api';
import { ProductButton } from '../Product/style';
import { Main, Li, Order } from './style';

export const ShopProfile = () => {
  const {user} = useAuth();
  const [orders, setOrders] = useState([]);
  const [displayOrder, setDisplayOrder] = useState({});

  const token = localStorage.getItem('@mi-au-food:token');

  useEffect(() => {
    API.get(`request`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      setOrders(response.data);
    });
  }, []);

  return (
    <Main>
      <ProfileCard />
      <h2>Serviços em aberto</h2>
      <li>
        <p><span>Informações do Pedido</span></p>
      </li>
      <ul>
        {orders.map((order)=>{
        if(order.status === 'Aguardando'){
          return <OrderCard setOrders={setOrders} setDisplayOrder={setDisplayOrder} key={order.id} order={order}/>
        }
        })}
      </ul>
      <h2>Serviços em andamento</h2>
      <li>
        <p><span>Informações do Pedido</span></p>
      </li>
      <ul>
      {orders.map((order)=>{
        if(order.shopId == user.id && order.status === 'Andamento'){
          return <OrderCard setOrders={setOrders} setDisplayOrder={setDisplayOrder} key={order.id} order={order}/>
        }
        })}
      </ul>
{!!displayOrder.id?(      
  <Order>
        <h3>Detalhes do Pedido</h3>
        <p><span>Id do Pedido:</span> {displayOrder.id} </p>
        <p> <span>Status do Pedido:</span> {displayOrder.status} </p>
        <h3>Comprador</h3>
          <p><span>Nome:</span>{displayOrder.user.name}</p>
          <p><span>Endereço:</span>{displayOrder.user.address}</p>
          <p><span>Telefone:</span>{displayOrder.user.tel}</p>
          <h3>Produtos</h3>
          <ul>
          {displayOrder.product.map(ord=> <li key={ord.id}>
          <p>{ord.name} </p>
          <p>{ord.quantity}   R$ {ord.price} </p>
        </li>)}
          </ul>

        <p><span>Valor Total:</span> R${displayOrder.totalCarrinho}</p>
        <ProductButton onClick={() =>setDisplayOrder({})}>Fechar</ProductButton>
      </Order>):(<></>)}
    </Main>
  );
};