import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 25rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: white;
  opacity: ${props => props.opacity};
  transition : all 0.3s ease-in-out;
  border-radius: 10px;

  span {
    margin-top: 1rem;
    
  }

  button {
    gap: 10px;
    width: 100$;
    height: 100$;
    background: rgba(231, 0, 0, 0.95);
    border: 1px dashed rgba(231, 0, 0, 0.95);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    transform: matrix(1, 0, 0, 1, 0, 0);
    color: white;
    font-size: 15px;
  }

`;

export const EditX = styled.div`
  display: flex;
`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const Main = styled.div`
  
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
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const UserContainer = styled.div`
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
    width: 100%;
  }
  p {
    padding: 5px;
  }
`;

export const PetContainer = styled.div`
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
    width: 100%;
  }

  button {
  }

  p {
    padding: 5px;
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
  height: 100px;
  background-color: #fff5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  p {
    margin-left: 1vw;
  }
`;

export const ButtonEditar = styled.p`
  cursor: pointer;
  color: white;
  font-size: 2vh;
  text-align: right;
`;

export const Input = styled.input`
  height: 40px;
  width: 300px;
  background: #fff5f5;
  margin-bottom: 3vh;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  border: none;
  font-family: Roboto;
`;

export const DivInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 80%;
`;
