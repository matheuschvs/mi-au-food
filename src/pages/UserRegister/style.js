import styled, { keyframes } from 'styled-components';
import RegisterBG from '../../assets/imageBackground.png';

export const Container = styled.div`
  align-items: center;
  height: 100vh;
  width: 100vw;
  min-width: 100vw;
  max-width: 100vw;
  background: url(${RegisterBG}) no-repeat;
  background-size: cover;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: center;
    background: linear-gradient(
      180deg,
      rgba(255, 245, 245, 0.8) 39.84%,
      rgba(231, 105, 0, 0.24) 76.04%,
      rgba(231, 0, 0, 0.8) 100%
    );
  }
`;

export const Title = styled.h1`
  position: absolute;
  font-style: normal;
  text-align: center;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 2rem;
  line-height: 28px;
  text-shadow: -1px 0px #fff, 1px 0px #fff, 0px -1px #fff, 0px 1px #fff;
  color: rgba(231, 0, 0, 0.95);
  @media (min-width: 1024px) {
    top: 5%;
    left: 12%;
    transform: translate(-50%, -50%);
  }
`;

export const BackgroundIMG = styled.div`
  @media (max-width: 1024px) {
    flex: 1;
    background-size: cover;
    background-position-y: 30%;
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

export const IMG5 = styled.img`
  width: 318px;
  height: 333px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const IMG6 = styled.img`
  @media (min-width: 1024px) {
    margin-left: -85px;
  }
  @media (min-width: 1200px) {
    margin-left: 0px;
    width: 234px;
    height: 226px;
    margin-left: -100px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const IMG7 = styled.img`
  width: 208px;
  height: 205px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export const IMG8 = styled.img`
  @media (min-width: 1024px) {
    margin-top: 50px;
    margin-left: 20px;
  }
  @media (min-width: 1200px) {
    width: 235px;
    height: 239px;
    margin-top: 0px;
    margin-left: 0px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const ContainerIMG = styled.section`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    column-count: 2;
    margin: 0 auto;
    max-width: 580px;
    margin-left: 5vw;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1200px) {
    display: block;
    column-count: 2;
    margin: 0 auto;
    max-width: 700px;
    margin-left: 5vw;
    justify-content: center;
    align-items: center;
  }
`;

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

export const Form = styled.form`
  animation: ${appearFromLeft} 1s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  max-width: 350px;
  height: 50vh;
  margin: 0 auto;
  margin-top: 260px;
  background: var(--primary-color);
  mix-blend-mode: normal;
  opacity: 0.8;
  box-shadow: inset 0px 3px 4px 3px rgba(255, 245, 245, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0;
    height: 100%;
  }
  h1 {
    line-height: 20px;
    text-align: center;
    width: 60vw;
    max-width: 290px;
    color: #ffffff;
    font-size: 1.2rem;
  }
  button {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px;
    gap: 10px;
    width: 94px;
    height: 40px;
    left: 1225px;
    top: 597.4px;
    background: rgba(231, 0, 0, 0.95);
    border: 1px dashed rgba(231, 0, 0, 0.95);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: #fff5f5;
    margin-top: 1.2rem;
    &:hover {
      background: rgba(200, 0, 0, 0.95);
    }
  }
  h3 {
    text-align: center;
    color: #fff5f5;
    font-size: 0.8rem;
    margin-top: 1.4rem;
  }
  a {
    text-decoration: none;
    text-align: center;
    color: #fff5f5;
    font-size: 0.8rem;
    margin-top: 1.4rem;
    cursor: pointer;
  }
  @media (min-width: 1024px) {
    animation: none;
    background: var(--primary-color);
    width: 50vw;
    max-width: 50vw;
    height: 60vh;
    border-radius: 550px 0px 0px 550px;
    margin: 0px;
    opacity: 1;
    box-shadow: none;
    backdrop-filter: none;
    div,
    h1,
    h3,
    button {
      margin-left: 15%;
    }
  }
  @media (min-width: 1200px) {
    animation: none;
    background: var(--primary-color);
    width: 45vw;
    max-width: 50vw;
    height: 60vh;
    border-radius: 550px 0px 0px 550px;
    margin: 0px;
    opacity: 1;
    box-shadow: none;
    backdrop-filter: none;
    div {
      margin-left: 10%;
    }
    h1 {
      line-height: 38px;
      margin-left: 10%;
      width: 25vw;
      max-width: 25vw;
      font-size: 1.8rem;
    }
    h3 {
      margin-left: 10%;
    }
    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 15px;
      gap: 10px;
      width: 94px;
      height: 40px;
      left: 1225px;
      top: 597.4px;
      background: rgba(231, 0, 0, 0.95);
      border: 1px dashed rgba(231, 0, 0, 0.95);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      color: #fff5f5;
      margin-left: 10%;
      margin-top: 1.8rem;
    }
  }
`;
