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
    &:hover {
      background-color: none;
      color:#4AD44A;
    }
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    
    }
  }
`;

export const Input = styled.input`
  height: 40px;
  background: #ffa459;
  margin-bottom: 3vh;
  border: none;
  font-family: Roboto;
  text-align: center;
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
