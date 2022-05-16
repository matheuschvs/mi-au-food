/* eslint-disable no-shadow */
/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
import useContext from 'react';
import { CartContext } from '../../Providers/cart';
import { Main, Header, Botoes, Lixo } from './Main';

import botaoMenor from '../../img/Button Primary (1).svg';

import botaoMaior from '../../img/Button Primary.svg';

import lixoIcone from '../../img/trash-2.svg';

const cart = [
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
];

export const ShoppingCartPage = () => {
  console.log(useContext(CartContext));

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
