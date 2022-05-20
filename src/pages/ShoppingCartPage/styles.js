/* eslint-disable no-unused-vars */
import styled from 'styled-components';
import { CardButton } from '../../components/Card/style';

export const DivTudo = styled.div`
  padding: 5.93em;
`;

export const Titulo = styled.h1``;

export const Carrinho = styled.h1`
  margin-top: 80px;
`;

export const Lista = styled.div`
  ul {
  }
  li {
    display: flex;
    background-color: white;
    border-radius: 1px;
    border: 1px solid #00000040;
    width: 1000px;
    margin-top: 20px;
    margin-bottom: 10px;
  }
  img {
    width: 192px;
    height: 192px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  h2 {
    font-size: 20px;
    font-family: 'Ubuntu';
    padding-top: 15px;
    margin-left: 20px;
    width: 1000px;
  }
  h3 {
    height: 10px;
  }
  h5 {
    padding-top: 40px;
    width: 120px
    
    font-size: 20px;
  }
`;

export const Botoes = styled.div`
  button {
  }
  display: flex;
  margin-top: 50px;
  width: 10px;
  height: 10px;
  cursor: pointer;
`;
export const Lixo = styled.div`
  padding-top: 100px;

  position: relative;
  right: 85px;

  img {
    width: 50px;
    height: 30px;
    cursor: pointer;
  }
`;
export const Total = styled.div`
  display: flex;
  margin-left: 100px;
  h2 {
  }
`;
export const Esconder = styled.div`
  display: none;
`;
export const BotaoDiv = styled.div`
  display: flex;
  padding-top: 240px;
`;
export const Button = styled.button`
  background: var(--secondary-color-1);
  margin-right: 80px;
  color: #fff5f5;
  border-bottom: 2px solid var(--secondary-color);
  border: 0px;
  border-radius: 20px;
  text-align: center;
  font-family: 'Ubuntu';
  width: 250px;
  height: 60px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
`;
export const BotaoeTotal = styled.div`
  display: flex;
  h2 {
    margin-top: 10px;
  }
`;
