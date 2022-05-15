import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    height: 100vh;
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
    justify-content: flex-end;
    background: linear-gradient(
      180deg,
      rgba(255, 245, 245, 0.8) 39.84%,
      rgba(231, 105, 0, 0.24) 76.04%,
      rgba(231, 0, 0, 0.8) 100%
    );
  }
`;

export const Form = styled.form`
  @media (min-width: 1024px) {
    background: var(--primary-color);
    margin-top: 10vh;
    width: 50vw;
    height: 65vh;
    border-radius: 550px 0px 0px 550px;
    div {
      padding: 10px;
      width: 850px;
    }
    h1 {
      height: 107px;
      margin-left: 30%;
      text-align: center;
      color: #fff5f5;
    }
    h3 {
      line-height: 120px;
      margin-left: 185px;
      text-align: center;
      color: #fff5f5;
      font-size: 15px;
    }
  }
`;

export const Box = styled.div`
  margin-top: 10vh;
  margin-right: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  padding: 15px;
  gap: 10px;
  width: 120px;
  height: 50px;
  margin-left: 200px;
  margin-top: 20px;
  background: rgba(231, 0, 0, 0.95);
  border: 1px dashed rgba(231, 0, 0, 0.95);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  transform: matrix(1, 0, 0, 1, 0, 0);
  color: white;
  font-size: 20px;
`;

export const Input = styled.input`
  height: 5vh;
  background: #fff5f5;
  margin-bottom: 3vh;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 30%;
  border: none;
  font-size: 1rem;

  &:hover,
  &:focus-within {
    label {
      color: var(--title);
    }
  }
  label {
    color: var(--title);
    font-size: 12px;
    top: -15px;
    left: 5px;
  }
  &:focus {
    outline: none;
  }
  @media (min-width: 1024px) {
    width: 45%;
    margin-left: 30%;
    padding-left: 20px;
  }
`;
