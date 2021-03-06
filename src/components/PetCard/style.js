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
  background-color: var(--secondary-color-1);
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 20px;;
  height: 170px;
  padding: 1rem;
  border-radius: 100px 0px 0px 100px;
  
  &:hover {
    background-color: var(--secondary-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  
  }
  img {
    height: 150px;
    width: 150px;
    border-radius: 258px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-width:  1px;

    &:hover {
      border: solid 2px var(--background);
    }
  
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
    width: 100%;
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

  h3 {
    font-size: 30px;
    text-align: right;
  }

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

  @media (max-width: 1296px) {
    width: 100%;
    p {
      font-size: 20px;
    }
    h3 {
      margin: 20px;
    }
  }
  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const ButtonEditar = styled.p`
  cursor: pointer;
  margin-top: 30px;
  width: 100px;
  font-size: 20px;
  background-color: var(--secondary-color-1);
  &:not(:last-child) {
  }
  &:hover {
    background-color: var(--secondary-color);
  }
  color: var(--background);
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
`;

export const InfoDiv = styled.div``;
