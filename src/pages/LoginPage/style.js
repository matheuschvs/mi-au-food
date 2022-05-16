import styled, { keyframes } from 'styled-components';
import { ifProp } from 'styled-tools';
import { slideInDown, fadeIn } from 'react-animations';

const slideInAnimation = keyframes`${slideInDown}`;
const fadeAnimation = keyframes`${fadeIn}`;

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    height: 100vh;
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    justify-content: flex-end;
    background: linear-gradient(
      180deg,
      rgba(255, 245, 245, 0.8) 39.84%,
      rgba(231, 105, 0, 0.24) 76.04%,
      rgba(231, 0, 0, 0.8) 100%
    );
  }
  @media (max-width: 750px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff5f5;
    border-radius: 5px;
  }
`;

export const IMG = styled.img`
  @media (min-width: 1024px) {
    position: absolute;
    width: 510px;
    height: 514px;
    left: 300px;
    top: 143px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    animation: 1s ${fadeAnimation};
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;

export const Form = styled.form`
  @media (min-width: 1024px) {

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: var(--primary-color);
      margin-top: 3vh;
      width: 50vw;
      height: 58vh;
      border-radius: 550px 0px 0px 550px;
      div {
        padding: 10px;
        width: 850px;
      }
      h1 {
        height: 90px;
        text-align: center;
        color: #fff5f5;
        font-size: 30px;
      }
      h3 {
        line-height: 120px;
        text-align: center;
        color: #fff5f5;
        font-size: 15px;
      }
    }
    h3 {
      text-align: center;
      font-size: 15px;
    }
    animation: 1s ${slideInAnimation};
    display: ${ifProp('isActive', 'block', 'none')} @media (min-width: 1024px);
  }
  {
  @media (max-width: 1023px) {
    display: flex;
    width: 258px;
    height: 308px;
  }
`;

export const Box = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    margin-top: 10vh;
    width: 50%;
    margin-left: 20%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: none;
  }
  @media (max-width: 1023px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #e70000f2;
    width: 258px;
    height: 308px;
    border-radius: 8px;
    margin-top: 50%;

    h1 {
      height: 30px;
      font-family: 'Ubuntu';
      font-style: normal;
      font-weight: 700;
      font-size: 15px;
      line-height: 17px;
      text-align: center;
      color: #ffffff;
    }
    h3 {
      font-family: 'Roboto';
      font-style: normal;
      font-weight: 400;
      font-size: 10px;
      line-height: 12px;
      text-align: center;
      color: #ffffff;
    }
  }
`;

export const Input = styled.input`
  @media (min-width: 1024px) {
    width: 45%;
  }
  height: 5vh;
  background: #fff5f5;
  margin-bottom: 3vh;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  border: none;
  font-size: 1rem;
  &:hover,
  &:focus-within {
    label {
      color: var(--title);
    }
  }
  label {
    color: var(--title);
    font-size: 12px;
    top: -15px;
    left: 5px;
  }
  &:focus {
    outline: none;
  }
  @media (max-width: 1023px) {
    width: 149px;
    height: 21px;
    background: #ffffff;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    margin-left: 0;
    padding-left: 0;
  }
`;
