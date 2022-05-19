import styled from 'styled-components';

export const Carrinho = styled.div``;

export const Main = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding: 170px 150px;

  li {
    display: flex;
    background-color: white;
    border-radius: 1px;
    border: 1px solid #00000040;
    width: 1000px;
    margin-top: 20px;
  }
  img {
    width: 192px;
    height: 192px;
    margin-top: 5px;
  }
  h2 {
    font-size: 20px;
    font-family: 'Ubuntu';
    padding-top: 15px;
  }
  h3 {
    padding-left: 10px;
    font-size: 20px;
    font-family: 'Ubuntu';
    position: relative;
    left: 100px;
  }
  h5 {
    padding-top: 40px;
    width: 90px;
    position: relative;
    left: 50px;
    font-size: 20px;
  }
`;

export const Botoes = styled.div`
  display: flex;
  padding-top: 40px;
  position: relative;
  right: 120px;
`;
export const Lixo = styled.div`
  padding-top: 100px;

  position: relative;
  right: 60px;

  img {
    width: 50px;
    height: 30px;
  }
`;
export const Total = styled.div`
  float: right;
  padding: 20px 210px;
`;
export const Not = styled.div``;

export const Todo = styled.div``;

export const Esconder = styled.div`
  display: none;
`;
export const Final = styled.div`
  padding-top: 15px;

  button {
    background-color: #ffa459;
    padding: 8px 32px;
    color: #fff5f5;
    border-bottom: 2px solid var(--secondary-color);
    border: 0px;
    border-radius: 20px;
    font-family: 'Ubuntu';
    width: 209, 38px;
    height: 48px;
    font-size: 18px;
    font-weight: bold;
  }
`;
export const CleanCar = styled.div`
padding-top: 5px;

button{
  background-color: #ffa459;
    padding: 8px 32px;
    color: #fff5f5;
    border-bottom: 2px solid var(--secondary-color);
    border: 0px;
    border-radius: 20px;
    font-family: 'Ubuntu';
    width: 209, 38px;
    height: 48px;
    font-size: 18px;
    font-weight: bold;
  }
}

`;
