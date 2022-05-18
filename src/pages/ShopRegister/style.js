/* eslint-disable */
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import RegisterBG from '../../assets/imageBackground.png';


export const Container = styled(motion.div)`
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
  margin-top: 170px;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: 400;
  font-size: 2rem;
  line-height: 28px;
  text-shadow: -1px 0px #fff, 1px 0px #fff, 0px -1px #fff, 0px 1px #fff;
  color: rgba(231, 0, 0, 0.95);
  @media (min-width: 1024px) {
    margin-top: 0px;
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
  width: 32rem;
  height: 32rem;
  margin-left: 6vw;
  margin-top: 18vh;
  transform: rotate(15deg);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  @media (min-width: 1024px) {
  }
`;

export const IMG6 = styled.img`
  transform: rotate(-20deg);
  @media (min-width: 1024px) {
    position: absolute;
    margin-bottom: 5vh;
    margin-left: -3vw;
    width: 23rem;
    height: 23rem;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
`;

export const ContainerIMG = styled.section`
  display: none;
  @media (min-width: 1024px) {
    display: block;
    column-count: 2;
    margin: 0 auto;
    max-width: 500px;
    margin-left: 5vw;
    justify-content: center;
    align-items: center;
  }
  @media (min-width: 1200px) {
    display: block;
    column-count: 2;
    margin: 0 auto;
    max-width: 500px;
    margin-left: 4vw;
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
  max-width: 380px;
  min-width: 320px;
  min-height: 600px;
  height: 65vh;
  margin: 0 auto;
  margin-top: 200px;
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

  section {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 70%;

    select {
      height: 45px;
      margin-top: 1.4rem;
      border-bottom: 2px solid #cddfe3;
      width: 50%;
      max-height: 45px;
      position: relative;
      padding-left: 1.4rem;
      transition: 0.8s;
      background: #fff5f5;
      box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 20px;
      border: none;
      outline: none;
      color: var(--title);
      font-size: 1rem;
      border-right: 10px solid transparent;
      margin-right: 8px;
    }

    div {
      width: 50%;
    }
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
    width: 10vh;
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
    background: var(--primary-color);
    width: 60vw;
    max-width: 60vw;
    height: 70vh;
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

    section {
      margin-left: 22.5%;
    }
  }
  @media (min-width: 1200px) {
    width: 50vw;
    max-width: 55vw;
    position: absolute;
    height: 75vh;
    right: 0%;
    div {
      margin-left: 10%;
    }
    h1 {
      line-height: 30px;
      margin-bottom: 0.7rem;
      margin-left: 10%;
      width: 20vw;
      max-width: 25vw;
      font-size: 2rem;
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
      width: 12vh;
      height: 45px;
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
    section {
      margin-left: 20%;
    }
  }
`;
