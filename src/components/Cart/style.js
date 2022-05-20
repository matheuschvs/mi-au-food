/* eslint-disable */

import styled, { keyframes } from 'styled-components';

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateY(-150px)
    }
    to{
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const Container = styled.div`
  footer {
    position: fixed;
    bottom: 0px;
    left: 0;
    background: var(--primary-color);
    width: 100vw;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1rem 1rem 0 0;
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
  }
  aside {
    display: none;
  }
  h2,
  h3 {
    color: var(--background);
  }
  section {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  dialog {
    z-index: auto;
    display: ${props => (props.modal ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
  }
  .close {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 24px;
    height: 24px;
    border: none;
    background: none;
    color: white;
  }
  dialog div.modal {
    display: block;
    max-width: 350px;
    width: 90%;
    background: var(--primary-color);
    height: min-content;
    max-height: 500px;
    margin: 10px;
    border-radius: 1rem;
    text-align: center;
    padding: 0.6rem 0;
    position: relative;
  }
  dialog div.modal h2 {
    margin: 10px;
  }
  dialog div.modal ul {
    background-color: var(--background);
    max-width: 95%;
    height: 300px;
    border-radius: 1rem;
    overflow-y: auto;
    margin: 10px auto;
  }
  dialog div.modal ul h4 {
    font-size: 1.2rem;
    margin: 20px;
    color: var(--text);
  }
  dialog div.modal div {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  @media (min-width: 850px) {
    footer {
      display: none;
    }
    dialog {
      display: none;
    }
    aside {
      display: block;
      width: 350px;
      background: var(--primary-color);
      height: min-content;
      max-height: 500px;
      margin: 10px;
      border-radius: 1rem;
      text-align: center;
      padding: 0.6rem 0;
      filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
      animation: ${appearFromLeft} 1s;
    }
    aside h2 {
      margin: 10px;
    }
    aside ul {
      background-color: var(--background);
      max-width: 90%;
      height: 300px;
      border-radius: 1rem;
      overflow-y: auto;
      margin: 10px auto;
    }
    aside ul h4 {
      font-size: 1.2rem;
      margin: 20px;
      color: var(--text);
    }
    aside div {
      display: flex;
      width: 100%;
      justify-content: space-around;
    }
  }
`;
export const CartButton = styled.button`
  background: var(--secondary-color-1);
  border-radius: 1.5rem;
  border: none;
  padding: 0.5rem 2rem;
  margin: 10px;
  height: 3rem;
  font-family: 'Ubuntu';
  font-size: 1.2rem;
  color: var(--background);
`;

export const CartDialog = styled.dialog``;
