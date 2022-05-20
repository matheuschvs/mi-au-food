/* eslint-disable */

<<<<<<< HEAD
import { useState } from 'react';
import { Card } from '../../components/Card';
=======
>>>>>>> 2ba22b1bf429ff5267ffe162c75e79bd84607b4c
import { useCart } from '../../context/cart';
import { Link, useNavigate } from 'react-router-dom';
import {
  Esconder,
  Button,
  DivTudo,
  Lista,
  Total,
  DeleteButton,
} from './styles';
import iconLixo from '../../assets/lixo.svg';
import { QuantityController } from '../../components/QuantityController';
import axios from 'axios';
import { OrderList } from '../../components/OrderList';
import { InfoUser } from '../../components/InfoUser';
<<<<<<< HEAD
import { Trash2 } from 'react-feather';
=======
import { API } from '../../services/api';
import { useAuth } from '../../context/auth';
>>>>>>> 2ba22b1bf429ff5267ffe162c75e79bd84607b4c

export const ShoppingCartPage = () => {
  const {
    cart,
    cartReducer,
    removeFromCart,
    reduceQuantity,
    cleanCart,
    setCart,
  } = useCart();

  const navigate = useNavigate();


  const {user, token} = useAuth();

  const authAxios = axios.create({
    baseURL: 'https://json-server-kenziegroup.herokuapp.com/request',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


  const finalizarComprar = () => {
    API.post(`request`,{
        product: cart, 
        user: user, 
        status:"Aguardando", 
        totalCarrinho: cartReducer 
        },{
          headers: {
            Authorization: `Bearer ${token}`,
          }
        }     
      )
      .then(() => {
        navigate('/perfil/usuario', { replace: true })
        cleanCart()
      })
      .catch(err => console.log(err));
  };

  return (
    <DivTudo>
      <Esconder>
        <OrderList authAxios={authAxios} />
      </Esconder>

      <h2>Carrinho</h2>

      {cart.length === 0 ? (

        <Link to="/">
          <Titulo>Não existe produto no carrinho</Titulo>
        </Link>
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
