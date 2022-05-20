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
  transition : all 0.3s ease-in-out;`;

export const FadingBackground = styled(BaseModalBackground)`
  opacity: ${props => props.opacity};
  transition: all 0.3s ease-in-out;
`;

export const Adicionar = styled.p`
  font-size: 30px;
  padding: 5px;
  color: white;
  margin-top: 5px;
  &:hover {
    background-color: var(--secondary-color);
    border: solid var(--secondary-color-1);
    border-width: 0px 0px 5px 5px;
  }
  background-color: var(--secondary-color-1);

  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  cursor: pointer;
`;
