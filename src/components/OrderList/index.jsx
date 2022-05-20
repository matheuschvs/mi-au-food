/* eslint-disable*/
import { useState, useEffect } from 'react';
import { MarginOrder, Order, OrderBox } from './style';
import axios from 'axios';

export const OrderList = () => {
  const [dados, setDados] = useState([]);

  const token = localStorage.getItem('@mi-au-food:token');

  const authAxios = axios.create({
    baseURL: 'https://json-server-kenziegroup.herokuapp.com/request',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  authAxios.get(`https://json-server-kenziegroup.herokuapp.com/request`).then;

  useEffect(() => {
    authAxios
      .get(`https://json-server-kenziegroup.herokuapp.com/request`)
      .then(response => {
        setDados(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <MarginOrder>
      <OrderBox>
        <h3>Seus Pedidos</h3>

        {dados.map(item => (
          <Order>
            <p>Pedido: id {item.id}</p>
            <p>Status: {item.status}</p>
            <p>Valor: R$ {item.totalCarrinho.toFixed(2)}</p>
            <p>Ok</p>
          </Order>
        ))}
      </OrderBox>
    </MarginOrder>
  );
};
