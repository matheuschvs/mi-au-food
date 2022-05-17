/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import useContext from 'react';

import { Main, Header, Botoes, Lixo } from './Main';

import botaoMenor from '../../img/Button Primary (1).svg';

import botaoMaior from '../../img/Button Primary.svg';

import lixoIcone from '../../img/trash-2.svg';

export const ShoppingCartPage = () => {
  return (
    <div>
      <Header>
        <h3>Mi-Au-Food</h3>
      </Header>
      <Main>
        <h2>Carrinho</h2>
        <ul>
          {cart.map(item => (
            <li>
              <img src={item.img}></img>

              <h3>{item.name}</h3>
              <h5>Quantidade</h5>

              <h5>Preço</h5>
            </li>
          ))}
        </ul>
      </Main>
    </div>
  );
};
