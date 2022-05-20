/* eslint-disable */

import { useCart } from '../../context/cart';
import { useNavigate } from 'react-router-dom';
import {
  Main,
  Botoes,
  Lixo,
  Carrinho,
  Total,
  Not,
  Todo,
  Esconder,
  Final,
} from './styles';
import iconLixo from '../../assets/lixo.svg';
import { QuantityController } from '../../components/QuantityController';
import axios from 'axios';
import { OrderList } from '../../components/OrderList';
import { InfoUser } from '../../components/InfoUser';
import { API } from '../../services/api';
import { useAuth } from '../../context/auth';

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
    <Todo>
      <Esconder>
        <OrderList authAxios={authAxios} />
      </Esconder>

      <Carrinho>
        <h1>Carrinho</h1>
      </Carrinho>

      {cart.length === 0 ? (
        <Not>
          <h2>Não existe produto no carrinho</h2>
        </Not>
      ) : (
        <Main>
          <ul>
            {cart.map(item => (
              <li key={item.id}>
                <img src={item.img}></img>
                <h2>{item.name}</h2>
                <h3>Quantidade</h3>
                <QuantityController product={item} />

                <h3>Preço</h3>
                <h5>R$ {item.price}</h5>
                {/* <Botoes>
                  
                </Botoes> */}
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
              Total({cart.length} item) R${' '}
              {cartReducer.toFixed(2).replace('.', ',')}
            </h2>
            <Final>
              {' '}
              <button onClick={finalizarComprar}>Finalizar Comprar</button>
            </Final>
              <button onClick={cleanCart} type="button">
                Limpar o carrinho
              </button>
          </Total>
        </Main>
      )}
    </Todo>
  );
};
