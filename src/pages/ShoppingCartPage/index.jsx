/* eslint-disable */

import { useState } from 'react';
import { Card } from '../../components/Card';
import { useCart } from '../../context/cart';
import { useNavigate } from 'react-router-dom';
import {
  Esconder,
  Button,
  DivTudo,
  Lista,
  Total,
  DeleteButton,
} from './styles';
import iconMais from '../../assets/Button Primary.svg';
import iconMenos from '../../assets/Button menor.svg';
import iconLixo from '../../assets/lixo.svg';
import { QuantityController } from '../../components/QuantityController';
import axios from 'axios';
import { InfoUser } from '../../components/InfoUser';
import { Trash2 } from 'react-feather';

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

      <h2>Carrinho</h2>

      {cart.length === 0 ? (
        <h2>Não existe produto no carrinho</h2>
      ) : (
        <>
          <Lista>
              {cart.map(item => (
                <li key={item.id}>
                  <div>
                    <img src={item.img}></img>
                  </div>
                  <div>
                    <h3>{item.name}</h3>
                    <section>
                      <div>
                        <h4>Quantidade</h4>
                        <section>
                        <QuantityController product={item} />
                        </section>
                      </div>
                      <div>
                        <h4>Preço</h4>
                        <h5>R$ {item.price}</h5>
                      </div>
                    </section>  
                  </div>
                  <DeleteButton onClick={() => removeFromCart(item)}>
                    <Trash2/>
                  </DeleteButton>
                </li>
              ))}

          </Lista>
          <h2>
            Total: R${' '}
            {cartReducer.toFixed(2).replace('.', ',')}
          </h2>
          <Total>
          <Button onClick={finalizarComprar}>Finalizar Comprar</Button>
          <Button onClick={cleanCart} type="button">
            Limpar o carrinho
          </Button>                    
          </Total>
        </>
      )}
    </DivTudo>
  );
};
