import styled, { keyframes } from 'styled-components';

import backMobile from '../../assets/cachorro-piscando.svg';

const appearFromLeft = keyframes`
    from{
        opacity: 0;
        transform: translateX(-50px)
    }
    to{
        opacity: 0.8;
        transform: translateX(0px)
    }
`;

const appearFromTop = keyframes`
    from{
        opacity: 0;
        transform: translateY(-150px)
    }
    to{
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const MainContainer = styled.div`
  background: var(--gradient);
  min-height: 100vh;
  animation: ${appearFromLeft} 1s;
  header {
    padding-top: 2rem;
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
        text-shadow: 2px 0 var(--title), -2px 0 var(--title),
          0 -2px var(--title), 0 2px var(--title);
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

  & > div {
    padding: 0 2rem;

    &:last-of-type {
      margin-bottom: 2rem;
    }
  }

  input {
    height: 45px;
    max-width: 90%;
  }
  h1 {
    color: var(--background);
    font-size: 50px;
  }

  div > div {
    margin-bottom: -1.5rem;
    width: 90%;
    text-align: right;

    span {
      margin-left: 0;
      font-size: 0.8rem;
    }
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
      color: var(--background);
      font-size: 1.14rem;
    }

    & > div {
      padding: 0 0.5rem;
      min-height: 2.5rem;
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
