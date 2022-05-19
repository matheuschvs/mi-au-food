/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import styled from 'styled-components';

export const Form = styled.div`
  background-color: red;
  height: 610px;
  width: 500px;

  position: absolute;
  top: 220px;
  left: 800px;
  text-align: center;
  border-radius: 8px;

  h1 {
    margin-top: 5px;
    font-size: 30px;
  }
  h3 {
    color: white;
    font-size: 20px;
    margin-top: 10px;
  }
  h6 {
    color: white;
    margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
  }
  button {
    display: grid;
    margin: 0 auto;
    margin-top: 10px;
    height: 30px;
    width: 100px;
    align-items: center;
    border-radius: 8px;
    border: 0px;
    background-color: white;
    color: red;
  }
`;

export const BotaoModal = styled.div`
  button {
    float: right;
    margin-right: 300px;
    position: relative;
    top: 150px;
    border-radius: 8px;
    border: 0px;
    background-color: red;
    color: white;
    height: 30px;
  }
`;

export const List = styled.div`
  img {
    width: 150px;
    height: 150px;
    margin-top: 30px;
    margin-left: 50px;
  }
  li {
    display: flex;
    position: relative;
    top: 120px;
  }
  h4 {
    margin-top: 50px;
    margin-left: 20px;
    width: 250px;
  }
`;
export const Botao = styled.div`
  img {
    width: 50px;
    height: 50px;
    position: relative;
    top: 100px;
    right: 120px;
  }
`;
export const ButtonClose = styled.div`
  button {
    width: 20px;
    height: 20px;
    float: right;
    margin-right: 10px;
  }
`;
