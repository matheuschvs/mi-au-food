/* eslint-disable no-plusplus */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Product } from '../../pages/Product';
import { API } from '../../services/api';
import { axios } from 'axios';

export const InfoUser = ({ authAxios }) => {
  const [dados, setDados] = useState([]);

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
    <div>
      <ul>
        {dados.map(item => (
          <li>
            <h3>Pedido: {item.id}</h3>
            <h3>Status: {item.cart.info.status} </h3>
            <h3>Valor: R$ {item.cart.info.totalCarrinho}</h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
