import styled, { keyframes } from 'styled-components';

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

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  font-family: 'Ubuntu';
  margin-top: 13rem;
  animation: ${appearFromLeft} 1s;
  height: 1200px;
  @media (max-width: 1280px) {
    flex-direction: column;
    padding: 1rem;
  }
  @media (max-width: 600px) {
    margin-top: 18rem;
  }
`;

export const BoasVindas = styled.h1`
  text-align: center;
  font-size: 45px;
  margin-top: 20px;
  @media (max-width: 798px) {
    font-size: 25px;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

  h2 {
    font-size: 40px;
  }
  h3 {
    font-size: 30px;
  }
  h4 {
    font-size: 30px;
  }
  @media (max-width: 1280px) {
    margin-top: 5.93rem;
  }
  @media (max-width: 570px) {
    align-items: center;
  }
`;

export const PetContainer = styled.div`
  background-color: var(--secondary-color);
  display: flex;
  align-items: center;
  margin-left: 4vw;
  width: 300px;
  border-radius: 100px 0px 0px 100px;
  img {
    margin-left: 3px;
    margin-top: 5px;
    width: 89px;
    height: 88px;
    border-radius: 250px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }

  p {
    padding: 5px;
  }
  @media (max-width: 1296px) {
    width: 100%;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  background-color: var(--secondary-color-2);
`;
export const ButtonAdicionar = styled.p`
  font-size: 30px;
  padding: 5px;
  color: white;

  &:hover {
    background-color: var(--secondary-color);
  }
  background-color: var(--secondary-color-1);

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
`;
