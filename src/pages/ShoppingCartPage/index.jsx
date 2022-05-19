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
import { InfoUser } from '../../components/InfoUser';
import { API } from '../../services/api';

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


  const token = localStorage.getItem('@mi-au-food:token');

  const user = JSON.parse(localStorage.getItem('@mi-au-food:user'));

  const authAxios = axios.create({
    baseURL: 'https://json-server-kenziegroup.herokuapp.com/request',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const { name, email, tel, address, cpf, img, type, pets } = user;

  const finalizarComprar = () => {
    API.post(`request`,{
          product: cart,
          status: 'Aguardando',
          totalCarrinho: cartReducer,
          user: { name, email, tel, address, cpf, type },
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
        <InfoUser authAxios={authAxios} />
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
