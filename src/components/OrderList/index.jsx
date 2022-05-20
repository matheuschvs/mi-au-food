/* eslint-disable*/
import { useState, useEffect } from 'react';
import { Order, OrderBox } from './style';
import { useAuth } from '../../context/auth';
import { API } from '../../services/api';

export const OrderList = () => {
  const [dados, setDados] = useState([]);
  const { user, token } = useAuth();

  useEffect(() => {
    API.get(`request`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(response => {
        setDados(response.data);
      })
      .catch(err => {
      });
  }, []);

  return (
    <OrderBox>
      <h3>Seus Pedidos</h3>
      <Order>
        <ul>
          {dados.map(pedido => {
            if (pedido.user.id == user.id) {
              return (
                <li className={pedido.status} key={pedido.id}>
                  <p>Id: {pedido.id}</p>
                  <p>Status: {pedido.status}</p>
                  <p>Valor: R$ {pedido.totalCarrinho.toFixed(2)}</p>
                </li>
              );
            }
          })}
        </ul>
      </Order>
    </OrderBox>
  );
};
