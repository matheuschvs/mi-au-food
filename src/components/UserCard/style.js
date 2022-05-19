import styled from 'styled-components';
import Modal, { BaseModalBackground } from 'styled-react-modal';

export const StyledModal = Modal.styled`
  width: 30%;
  height: 60%;
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

export const Container = styled.div`
  background-color: var(--secondary-color);

    display: flex;
    align-items: center;
    
    border-radius: 100px 0px 0px 100px;
    height: 199px;
    width: 500px;
    margin-bottom: 30px;
    margin-right: 10px;
    margin-left: 20px;
  }
  img {
    margin-left: 10px;
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
    background-color: #fc943d;
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
    height: 300px;
    border-radius: 300px 0px 0px 300px;
    img {
      width: 280px;
      height: 288px;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
    p{
      font-size: 30px;
      margin-left: 20px;
      margin-top: 10px;
    }
 
  }
`;
export const InfoDiv = styled.div``;

export const ButtonEditar = styled.p`
  cursor: pointer;

  margin-right: 10px;
  margin-left: 10px;
  font-size: 30px;
  background-color: #e76900;
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

export const EmptyUser = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  margin-left: 10px;
  width: 171px;
  height: 181px;
  border-radius: 250px;
`;
