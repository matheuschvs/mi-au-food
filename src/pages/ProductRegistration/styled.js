/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-no-undef */
import styled from 'styled-components';

export const Container = styled.main`
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 8.25rem 6.25rem;
  margin-bottom: 6rem;

  @media only screen and (max-width: 768px) {
    padding: 8.25rem 1rem;
  }
`;

export const Form = styled.div`
  background-color: var(--primary-color);
  height: 610px;
  width: 31.25rem;
  position: relative;

  text-align: center;
  border-radius: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 3rem 6rem;

  h1 {
    font-size: 30px;
    color: var(--background);
    margin-bottom: 2rem;
  }
  h3 {
    color: var(--background);
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 0.5rem;
  }
  h6 {
    color: var(--backround);
    margin-top: 5px;
    font-size: 15px;
    font-weight: bold;
  }

  & > div > button {
    position: absolute;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 1rem;
    right: 1rem;
  }

  form,
  input {
    width: 100%;
  }

  input {
    padding: 0.2rem 1rem;
    border-radius: 0.3rem;
    border: none;
  }

  button {
    display: grid;
    margin: 0 auto;
    margin-top: 2rem;
    height: 30px;
    width: 100px;
    align-items: center;
    border-radius: 8px;
    border: 0px;
    background-color: var(--background);
    color: red;
  }

  @media only screen and (max-width: 768px) {
    width: 21.4rem;
    padding: 3rem 1rem;
  }
`;

export const BotaoModal = styled.div`
  button {
    border-radius: 0.5rem;
    border: none;
    background-color: var(--primary-color);
    color: var(--background);
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: 700;

    margin-bottom: 2rem;
  }
`;

export const List = styled.div`
  width: 100%;
  max-width: 56rem;

  img {
    width: 150px;
    height: 150px;
    margin-top: 30px;
    margin-left: 50px;
  }
  li {
    display: flex;
    justify-content: space-between;
    position: relative;
    top: 120px;
  }
  h4 {
    margin-top: 50px;
    margin-left: 20px;
    width: 250px;
  }

  @media only screen and (max-width: 768px) {
    li {
      flex-direction: column;
      align-items: center;
    }

    img {
      margin-left: 0;
    }
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

  @media only screen and (max-width: 768px) {
    img {
      position: unset;
      width: 50px;
    }
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
