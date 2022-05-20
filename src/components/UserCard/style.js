import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const StyledModal = Modal.styled`
  min-width: 310px;
  width: 30%;
  height: 60%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
  opacity: ${props => props.opacity};
  transition : all 0.3s ease-in-out;
 `;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const Container = styled.div`
    background-color: var(--secondary-color);
    display: flex;
    align-items: center;
    border-radius: 100px 0px 0px 100px;
    height: 199px;
    width: 500px;
    padding: 10px;

  }
  img {
    width: 171px;
    height: 181px;
    border-radius: 250px;
  }
  div {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  &:hover {
    background-color: var(--secondary-color-1);
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  
  }
  p {
    padding: 5px;
    margin-left: 20px;
    font-size: 20px;
  }

  @media (max-width: 1296px) {
    width: 100%;
    height: 100%;
    border-radius: 300px 0px 0px 300px;
    
    
    img {
      width: 280px;
      height: 288px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    
    padding: 8px;
    p{
      font-size: 25px;
    }
    
 @media (max-width: 570px) {
  
  display: flex;
    align-items: flex-start;
    flex-direction: column;
    border-radius: 0px 0px 0px 0px;

  img {
    width: 100%;
    height: 200px;
    border-radius: 0px;
    margin-left: 0px;
  }
  p{
    font-size: 25px;
  }
 }
  }
  
`;
export const InfoDiv = styled.div``;

export const ButtonEditar = styled.p`
  cursor: pointer;
  margin-right: 10px;
  margin-left: 10px;
  width: 100px;
  font-size: 30px;

  &:not(:last-child) {
  }
  &:hover {
    color: ice;
    background-color: var(--secondary-color);
  }
  background-color: var(--secondary-color-1);
  color: var(--background);
  text-align: center;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;

  @media (max-width: 570px) {
    width: 90%;
  }
`;

export const EmptyUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
  width: 171px;
  height: 181px;
  border-radius: 250px;
`;
