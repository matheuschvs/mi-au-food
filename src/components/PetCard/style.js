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
  margin: 20px 30px 20px 30px;
  height: 170px;
  
  border-radius: 100px 0px 0px 100px;
  
  &:hover {
    background-color: #fc943d;
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  
  }
  img {
    margin-left: 10px;
    height: 150px;
    width: 150px;
    border-radius: 258px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin: 20px;
  }

  p {
    padding: 5px;
    margin: 5px;
    font-size: 20px;
    
  }
  @media (max-width: 1296px) {
    width: 95%;
    height: 200px;
    margin: 20px 30px 20px 30px;
    img {
      border-radius: 200px;
      height: 190px;
      width: 190px;
    }
  }
`;

export const PetsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h3 {
    font-size: 30px;
    text-align: right;
    margin: 20px;
  }
  background-color: #fff5f5;
  &:hover {
    background-color: #fcdede;
  }

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  @media (max-width: 1296px) {
    margin: 50px;
    p {
      font-size: 25px;
    }
    h3 {
      margin: 20px;
    }
  }
`;

export const ButtonEditar = styled.p`
  cursor: pointer;
  margin: 20px 30px 20px 30px;
  font-size: 20px;
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
