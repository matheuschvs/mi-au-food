/* eslint-disable import/named */
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
import { Link, useNavigate } from 'react-router-dom';
import {
  Botoes,
  Lixo,
  Carrinho,
  Esconder,
  Button,
  DivTudo,
  Titulo,
  BotaoeTotal,
  Lista,
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

  const [final, setFinal] = useState([]);
  const [esconder, setEsconder] = useState(false);
  const [idPedido, setIdPedido] = useState();
  const navigate = useNavigate();

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
          product: cart,

          status: 'Aguardando',
          totalCarrinho: cartReducer,

          user: { name, email, tel, address, cpf, type },
        },
      )
      .then(() => navigate('/perfil/usuario', { replace: true }))

      .catch(err => console.log(err));
  };

  return (
    <DivTudo>
      <Esconder>
        <InfoUser authAxios={authAxios} />
      </Esconder>

      <Carrinho>Carrinho</Carrinho>

      {cart.length === 0 ? (
        <Link to="/">
          <Titulo>Não existe produto no carrinho</Titulo>
        </Link>
      ) : (
        <div>
          <Lista>
            <ul>
              {cart.map(item => (
                <li key={item.id}>
                  <img src={item.img}></img>
                  <h2>{item.name}</h2>
                  <h3>Quantidade</h3>
                  <Botoes>
                    <QuantityController product={item} />
                  </Botoes>
                  <h3>Preço</h3>

                  <h5>R$ {item.price}</h5>

                  <Lixo>
                    <img
                      onClick={() => removeFromCart(item)}
                      src={iconLixo}
                    ></img>
                  </Lixo>
                </li>
              ))}
            </ul>
          </Lista>

          <BotaoeTotal>
            <Button onClick={finalizarComprar}>Finalizar Comprar</Button>

            <Button onClick={cleanCart} type="button">
              Limpar o carrinho
            </Button>

            <h2>
              Total({cart.length} item) R${' '}
              {cartReducer.toFixed(2).replace('.', ',')}
            </h2>
          </BotaoeTotal>
        </div>
      )}
    </DivTudo>
  );
};
