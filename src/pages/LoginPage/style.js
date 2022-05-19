import styled from 'styled-components';

import backMobile from '../../assets/cachorro-piscando.svg';

export const MainContainer = styled.div`
  background: linear-gradient(180deg, rgba(255, 245, 245, 0.8) 39.84%, rgba(231, 105, 0, 0.24) 76.04%, rgba(231, 0, 0, 0.8) 100%);
  min-height: 100vh;

  header {
    margin-top: 2rem;
    margin-left: 6.25rem;
    margin-bottom: 80px;
  }

  button {
    border-radius: 0.5rem;
    font: 400 1rem 'Ubuntu', sans-serif;
  }

  @media (max-width: 1024px) {
    background: url(${backMobile}) !important;
    background-repeat: no-repeat !important;
    background-size: cover !important;

    header {
      margin: 0;
      margin-bottom: 1rem;

      h2 {
        text-shadow: 2px 0 var(--title), -2px 0 var(--title), 0 -2px var(--title), 0 2px var(--title);
      }
    }
  }
  @media (max-width: 1562px) {
    header {
      margin: 0;
      margin-bottom: 3rem;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 1562px) {
    background: transparent;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 37.5rem;
  width: 56.25rem;
  background-color: var(--primary-color);
  border-radius: 550px 0px 0px 550px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  padding: 8.125rem 6.125rem 6.125rem;

  input {
    height: 45px;
  }
  h1 {
    color: white;
    font-size: 50px;
  }

  div:last-of-type {
    margin-bottom: 2rem;
  }

  button {
    margin-bottom: 1rem;
    transition: all 0.3s;

    &:hover {
      background: var(--primary-color-1);
    }
  }

  a {
    text-decoration: none;
    color: var(--background);
  }

  @media (max-width: 1024px) {
    background: rgba(231, 40, 0, 0.7);
    backdrop-filter: blur(10px);
  }

  @media (max-width: 1562px) {
    border-radius: 10px;
    width: 16.25rem;
    padding: 4.375rem 2.5rem;
    max-height: 23rem;

    box-shadow: inset 0px 2px 4px 6px rgba(0, 0, 0, 0.5);

    h1 {
      color: white;
      font-size: 1.14rem;
    }

    div {
      width: 100%;
    }

    a {
      font-size: 0.9rem;
    }

    input {
      height: 45px;
    }
  
  }
`;
export const IMG = styled.img`
  width: 26%;
  height: 100%;
  margin-left: 15%;
  @media (max-width: 1562px) {
    display: none;
  }
`;
