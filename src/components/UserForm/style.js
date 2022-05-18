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
  }
`;

export const Input = styled.input`
  height: 40px;
  background: #ffa459;
  margin-bottom: 3vh;
  border-radius: 10px;
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
