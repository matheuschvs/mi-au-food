import styled from 'styled-components';

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  input {
    margin: 5px;
  }
  p {
    text-align: center;
    font-size: 30px;
    cursor: pointer;
    
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    
    }
  }
  
`;

export const ButtonStyled = styled.button`
  background-color: var(--secondary-color-1);
  border-width: 0px;
  height: 50px;
  &:hover {
    background-color: var(--secondary-color);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  border-radius: 5px;
  p {
    font-style: Roboto;
  }
`;

export const Input = styled.input`
  height: 40px;
  background: none;
  margin-bottom: 3vh;
  border: solid 2px var(--secondary-color-1);
  font-family: Roboto;
  text-align: center;
  border-radius: 5px;
  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`;

export const DivInput = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 20px;
  p {
    text-align: center;
    margin-bottom: 15px;
  }
`;
