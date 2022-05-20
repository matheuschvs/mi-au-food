/* eslint-disable*/
import styled from 'styled-components';

export const DivTudo = styled.main`
  padding-top: 6.93em;
  font-family: 'Ubuntu';
  max-width: 1200px;
  margin: auto;
  width: 85%;
  h2{
    text-align: center;
  }
`;

export const Lista = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  li {
    display: flex;
    border-radius: 1rem;
    border: 1px solid #00000040;
    width: 100%;
    height: 130px;
    margin-top: 0.5rem;
    max-width: 600px;
    margin: auto;
    justify-content: space-between;
    margin: 0.5rem;
  }
  div{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  img {
    width: 90px;
    height: 90px;
    margin: 0.5rem;
    border-radius: 1rem;
  }
  section {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
  }
  h3{
    font-size:14px;
  }
  @media (min-width: 768px) {
    h3{
      font-size:24px;
    }
  }
`;

export const DeleteButton = styled.button`
  width: 3rem;
  height: 3rem;
  border-radius: 1.5rem;
  border: none;
  margin: 0.5rem;
  background: var(--secondary-color-1);
  color: var(--background)
`

export const Total = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-direction: row;
  }
`;
export const Esconder = styled.div`
  display: none;
`;
export const BotaoDiv = styled.div`
  display: flex;
  padding-top: 240px;
`;
export const Button = styled.button`
  background: var(--secondary-color-1);
  color: var(--background);
  border-bottom: 2px solid var(--secondary-color);
  border: none;
  border-radius: 20px;
  text-align: center;
  font-family: 'Ubuntu';
  width: 250px;
  height: 40px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  margin: 0.5rem auto;
`;
export const BotaoeTotal = styled.div`
  display: flex;
`;
