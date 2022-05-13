import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 1024px) {
    display: flex;
    height: 100vh;
    width: 100vw;
    min-width: 100vw;
    max-width: 100vw;
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
    height: 80vh;
    margin-right: 0px;
    display: flex;
    flex-direction: column;
    border-radius: 550px 0px 0px 550px;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h1 {
      height: 107px;
      line-height: 68px;
      margin-left: 30%;
      margin-top: 120px;
      text-align: center;
      color: #fff5f5;
      margin-bottom: 70px;
    }

    h3 {
      height: 107px;
      line-height: 68px;
      margin-left: 30%;
      margin-top: 110px;
      text-align: center;
      color: #fff5f5;
      margin-bottom: 70px;
    }
  }
`;

export const DivTeste = styled.div`
  width: 318px;
  height: 318px;
  border-radius: 50%;
  margin: 5em auto;
  border: 1px solid #ffff;
  background: radial-gradient(circle at 50% 25%, black 5%, transparent 5%),
    radial-gradient(
      closest-side circle at 50% 25%,
      white 100%,
      transparent 100%
    ),
    radial-gradient(circle at 50% 75%, white 5%, transparent 5%),
    radial-gradient(
      closest-side circle at 50% 75%,
      black 100%,
      transparent 100%
    ),
    linear-gradient(to right, white 50%, black 50%);
`;

export const Input = styled.input`
  width: 50%;
  height: 5vh;
  background: #fff5f5;
  margin-bottom: 3vh;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  margin-left: 30%;
  padding-left: 20px;
  border: none;
  padding: 1rem;
  font-size: 1rem;

  label {
    color: #ffff;
    position: absolute;
    left: 25px;
    top: 3px;
    transition: 0.8s;
    top: ${props => (props.valid ? '-15px' : '3px')};
    left: ${props => (props.valid ? '5px' : '25px')};
    font-size: ${props => (props.valid ? '12px' : '16px')};
  }
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
