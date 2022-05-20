/* eslint-disable no-plusplus */
/* eslint-disable import/order */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Product } from '../../pages/Product';
import { API } from '../../services/api';
import { axios } from 'axios';
import { Lista } from './styles';

export const InfoUser = ({ authAxios }) => {
  const [dados, setDados] = useState([]);

  useEffect(() => {
    authAxios
      .get(`https://json-server-kenziegroup.herokuapp.com/request`)
      .then(response => {
        setDados(response.data);
        response.data.forEach(() => {});
      })
      .catch(err => {});
  }, []);

  return (
    <div>
      <Lista>
        <ul>
          {dados.map(item => (
            <li>
              <h3>Pedido: {item.id}</h3>
              <h3>Status: {item.status} </h3>
              <h3>Valor: R$ {item.totalCarrinho}</h3>
            </li>
          ))}
        </ul>
      </Lista>
    </div>
  );
};
