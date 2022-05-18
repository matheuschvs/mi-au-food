/* eslint-disable*/
import { useState, useEffect } from 'react';
import { Order, OrderBox } from './style';
import axios from 'axios';

export const OrderList = () => {
  // const [orders, setOrders] = useState([]);
  // const token = localStorage.getItem('@mi-au-food:token');
  // const baseUrl = `https://json-server-kenziegroup.herokuapp.com/users/${id}`;
  // useEffect(() => {
  //   axios
  //     .get(baseUrl, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     })
  //     .then(response => {
  //       setOrders(response.data);
  //     });
  // }, []);

  return (
    <OrderBox>
      <h3>Seus Pedidos</h3>
      <Order>
        <p>Pedido: id</p>
        <p>Status: Enviado</p>
        <p>Valor: R$110,00</p>
        <p>Ok</p>
      </Order>
      <Order>
        <p>Pedido: id</p>
        <p>Status: Enviado</p>
        <p>Valor: R$110,00</p>
        <p>Ok</p>
      </Order>
      <Order>
        <p>Pedido: id</p>
        <p>Status: Enviado</p>
        <p>Valor: R$110,00</p>
        <p>Ok</p>
      </Order>
    </OrderBox>
  );
};
