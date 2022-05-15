import styled from 'styled-components';

export const Main = styled.div`
  h2 {
    margin-top: 50px;
    margin-left: 100px;
    font-size: 32px;
  }
  li {
    display: flex;
    border: 1px solid red;
    border-radius: 20px;
    margin-left: 100px;
    margin-top: 50px;
    background-color: white;
  }
  img {
    width: 257px;
    height: 228px;
  }
  h3 {
    font-size: 32px;
    width: 700px;
    margin-top: 20px;
  }
  h4 {
    position: relative;
    top: 50px;
    right: 125px;
    width: 200px;
    font-size: 32px;
  }
  h5 {
    margin-left: 60px;
    margin-right: 30px;
    font-size: 32px;
    font-weight: bold;
  }
`;
export const Header = styled.div`
  background-color: red;
  width: 1600px;
  height: 83px;
`;

export const Botoes = styled.div`
  display: flex;
  width: 0px;

  img {
    width: 29.65px;
    height: 29.65;
    margin-right: 65px;
    position: relative;
    bottom: 50px;
    right: 165px;
  }
  h2 {
    font-size: 12px;
  }
`;
export const Lixo = styled.div`
  background-color: #ffa459;
  width: 70px;
  height: 67px;
  border-radius: 30px;
  position: relative;
  top: 150px;
  right: 200px;
  text-align: center;
  img {
    width: 40px;
    height: 40px;
    text-align: center;
    margin-top: 10px;
  }
`;
