import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 9.93rem;
  font-family: 'Ubuntu';

  @media (max-width: 1280px) {
    flex-direction: column;
    margin-left: 50px;
    margin-right: 50px;
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

  &:hover {
    background-color: #fcdede;
  }

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

  h2 {
    font-size: 40px;
    margin: 10px;
  }
  h3 {
    font-size: 30px;
    margin: 20px;
  }
  h4 {
    font-size: 30px;
    margin: 10px;
  }
  @media (max-width: 570px) {
    align-items: center;
  }
`;

export const PetContainer = styled.div`
  background-color: #ffa459;
  display: flex;
  align-items: center;
  margin-left: 4vw;
  width: 300px;
  border-radius: 100px 0px 0px 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
    width: 95%;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 20px;
  background-color: #ffa459;
`;
export const ButtonAdicionar = styled.p`
  font-size: 30px;
  padding: 5px;
  color: white;

  &:hover {
    background-color: #e76900;
  }
  background-color: #ffa459;

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
`;
