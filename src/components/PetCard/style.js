import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 30%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  opacity: ${props => props.opacity};
  transition : all 0.3s ease-in-out;`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const PetContainer = styled.div`
  background-color: #ffa459;
  display: flex;
  align-items: center;
  margin-left: 4vw;
  width: 400px;
  height: 130px;
  margin-bottom: 10px;
  border-radius: 100px 0px 0px 100px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    background-color: #fc943d;
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  
  }
  img {
    margin-left: 3px;
    margin-top: 5px;
    width: 119px;
    height: 118px;
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
  @media (max-width: 798px) {
    width: 95%;
  }
`;

export const ButtonEditar = styled.p`
  cursor: pointer;
  margin-right: 10px;
  font-size: 25px;
  background-color: #fc943d;
  &:not(:last-child) {
  }
  &:hover {
    color: ice;
  }
  background-color: #ffa459;
  color: #fff5f5;
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
`;

export const InfoDiv = styled.div``;
