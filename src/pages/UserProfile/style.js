import styled from 'styled-components';

export const Main = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-around;
    margin-top: 3vw;
  }
  h3 {
    margin: 1vw;
    text-align: right;
  }
  h4 {
    margin: 1vw;
    text-align: right;
  }
`;

export const BoasVindas = styled.h1`
  text-align: center;
`;

export const InfoContainer = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const UserContainer = styled.div`
  @media (min-width: 1024px) {
    background-color: #ffa459;
    display: flex;
    align-items: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 100px 0px 0px 100px;

    width: 463px;
    height: 199px;
    img {
      margin-left: 10px;
      width: 171px;
      height: 181px;
      border-radius: 250px;
      filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    }
    div {
      display: flex;
      flex-direction: column;
    }
    p {
      padding: 5px;
    }
  }
`;

export const PetContainer = styled.div`
  @media (min-width: 1024px) {
    background-color: #ffa459;
    display: flex;
    align-items: center;
    margin-left: 4vw;
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
    }

    button {
    }

    p {
      padding: 5px;
    }
  }
`;
export const OrderBox = styled.div`
  background-color: #ff5959;
  border-radius: 15px;
  padding: 2vw;
  margin-top: 3vw;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  div {
    width: 20vw;
  }
`;

export const Order = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 5vw;
  background-color: #fff5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  p {
    margin-left: 1vw;
  }
`;
