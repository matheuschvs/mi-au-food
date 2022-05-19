import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const StyledModal = Modal.styled`
  min-width: 310px;
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
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;;
  height: 170px;
  padding: 10px;
  
  border-radius: 100px 0px 0px 100px;
  
  &:hover {
    background-color: #fc943d;
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  
  }
  img {
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

    font-size: 20px;
    
  }
  @media (max-width: 600px) {
    width: 300px;
    height: 100%;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: row;
    border-radius: 0px 0px 0px 0px;

  img {
    width: 100%;
    height: 100px;
    border-radius: 0px;
    margin-left: 0px;
  }
  p{
    font-size: 25px;
  }
  }

`;

export const PetsMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    p {
      font-size: 20px;
    }
    h3 {
      margin: 20px;
    }
    width: 100%;
  }
`;

export const ButtonEditar = styled.p`
  cursor: pointer;
  margin-top: 30px;
  width: 100px;
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
