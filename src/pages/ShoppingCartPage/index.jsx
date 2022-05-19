/* eslint-disable import/order */
/* eslint-disable react/button-has-type */
/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Card } from '../../components/Card';
import { useCart } from '../../context/cart';
import {
  Main,
  Botoes,
  Lixo,
  Carrinho,
  Total,
  Not,
  Todo,
  Esconder,
} from './styles';
import iconMais from '../../assets/Button Primary.svg';
import iconMenos from '../../assets/Button menor.svg';
import iconLixo from '../../assets/lixo.svg';
import { QuantityController } from '../../components/QuantityController';
import axios from 'axios';
import { InfoUser } from '../../components/InfoUser';

export const ShoppingCartPage = () => {
  const {
    cart,
    cartReducer,
    removeFromCart,
    reduceQuantity,
    cleanCart,
    setCart,
  } = useCart();
  // const { addToCart, removeFromCart, reduceQuantity } = useCart()
  const [final, setFinal] = useState([]);
  const [esconder, setEsconder] = useState(false);
  const [idPedido, setIdPedido] = useState();

  console.log();

  const token = localStorage.getItem('@mi-au-food:token');
  const idLocal = localStorage.getItem('@mi-au-food:user');

  const user = JSON.parse(idLocal);

  const authAxios = axios.create({
    baseURL: 'https://json-server-kenziegroup.herokuapp.com/request',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { name, email, tel, address, cpf, img, type, pets } = user;

  const finalizarComprar = () => {
    authAxios
      .post(
        `https://json-server-kenziegroup.herokuapp.com/request`,

        {
          product: { ...cart },
          info: {
            status: 'Aguardando',
            totalCarrinho: cartReducer,
          },

          user: { name, email, tel, address, cpf, img, type, pets },
        },

        <InfoUser final={final} />,
      )

      .catch(err => console.log(err));
  };

  return (
    <Todo>
      <Esconder>
        <InfoUser authAxios={authAxios} />
      </Esconder>

      <Carrinho>
        <h1>Carrinho</h1>
      </Carrinho>

      {cart.length === 0 ? (
        <Not>
          <h1>Não existe produto no carrinho</h1>
        </Not>
      ) : (
        <Main>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.img}></img>
                <h2>{item.name}</h2>
                <h3>Quantidade</h3>
                <h4>1</h4>
                <h3>Preço</h3>
                <h5>R$ {item.price}</h5>
                <Botoes>
                  <QuantityController product={item} />
                </Botoes>
                <Lixo>
                  <img
                    onClick={() => removeFromCart(item)}
                    src={iconLixo}
                  ></img>
                </Lixo>
              </li>
            ))}
          </ul>
          <Total>
            <h2>
              Total({cart.length} item) R$ {cartReducer}
            </h2>
            <button onClick={cleanCart} type="button">
              Limpar o carrinho
            </button>
          </Total>
        </Main>
      )}
      <button onClick={finalizarComprar}>Finalizar Comprar</button>
    </Todo>
  );
};
