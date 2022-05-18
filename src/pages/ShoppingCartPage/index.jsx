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

export const ShoppingCartPage = () => {
  // const { cart, cartReducer } = useCart();
  const [currentSale, setCurrentSale] = useState([
    {
      name: 'Ração Seca Nutrilus Prime Frango para Cães Adultos de Raças Médias',
      description:
        'Contém em sua composição extrato de yucca, que atua na redução de odor das fezes;',
      price: 198.65,
      type: 'Comida',
      img: 'https://www.petlove.com.br/images/products/250928/large/2697118_Nutrilus-Prime-Ra%C3%A7as-M%C3%A9dias.jpg?1636403533',
      petType: 'Gato',
      userId: 4,
      id: 3,
    },
    {
      name: 'Bowl Future Pet para Cães e Gatos',
      description: 'Feito de aço inox',
      price: 99.38,
      type: 'Acessório',
      img: 'https://www.petlove.com.br/images/products/251757/product/Bowl_Future_Pet_para_C%C3%A3es_e_Gatos_-_800_mL_2765001_%281%29.jpg?1642454399',
      petType: 'Todos',
      userId: 4,
      id: 4,
    },
    {
      name: 'Biscoito Suprema para Cães Adultos Raças Pequenas',
      description:
        'Sem corantes artificiais;Feito com carnes selecionadas;Macio e saboroso.',
      price: 16.19,
      type: 'Comida',
      img: 'https://www.petlove.com.br/images/products/249351/product/Biscoito_Suprema_para_C%C3%A3es_Adultos_Ra%C3%A7as_Pequenas_2724993_%282%29.jpg?1634831655',
      petType: 'Cachorro',
      userId: 4,
      id: 5,
    },
  ]);

  const CleanCar = () => {
    setCurrentSale([]);
  };

  return (
    <Todo>
      <Carrinho>
        <h1>Carrinho</h1>
      </Carrinho>

      {currentSale.length === 0 ? (
        <Not>
          <h1>Não existe produto no carrinho</h1>
        </Not>
      ) : (
        <Main>
          <ul>
            {currentSale.map(item => (
              <li key={item.id}>
                <img src={item.img}></img>
                <h2>{item.name}</h2>
                <h3>Quantidade</h3>
                <h4>1</h4>
                <h3>Preço</h3>
                <h5>R$ {item.price}</h5>
                <Botoes>
                  <img src={iconMenos}></img>
                  <img src={iconMais}></img>
                </Botoes>
                <Lixo>
                  <img src={iconLixo}></img>
                </Lixo>
              </li>
            ))}
          </ul>
          <Total>
            <h2>Total({currentSale.length} item) R$ </h2>
            <button onClick={CleanCar} type="button">
              Limpar o carrinho
            </button>
          </Total>
        </Main>
      )}
    </Todo>
  );
};
