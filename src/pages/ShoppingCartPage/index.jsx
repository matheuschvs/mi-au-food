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
import { Main, Botoes, Lixo, Carrinho, Total, Not, Todo } from './styles';
import iconMais from '../../assets/Button Primary.svg';
import iconMenos from '../../assets/Button menor.svg';
import iconLixo from '../../assets/lixo.svg';
import { QuantityController } from '../../components/QuantityController';

export const ShoppingCartPage = () => {
  const { cart, cartReducer, removeFromCart, reduceQuantity } = useCart();
  // const { addToCart, removeFromCart, reduceQuantity } = useCart()
  const [currentSale, setCurrentSale] = useState(cart);
  console.log(reduceQuantity);
  console.log(cart);
  const CleanCar = () => {
    setCurrentSale([]);
  };

  return (
    <Todo>
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
            <button onClick={CleanCar} type="button">
              Limpar o carrinho
            </button>
          </Total>
        </Main>
      )}
    </Todo>
  );
};
