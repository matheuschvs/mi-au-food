import styled from 'styled-components';

const InputStyled = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #cddfe3;
  width: 50%;
  height: 5vh;
  margin: 5px;
  padding: 0 5px;
  margin-top: 18px;
  position: relative;
  transition: 0.8s;
  background: #fff5f5;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  input {
    background: transparent;
    position: absolute;
    border: none;
    height: 5vh;
    outline: none;
    width: 100%;
    font-size: 1rem;
    margin-bottom: 3vh;
    color: var(--title);
  }

  label {
    color: var(--title);
    position: absolute;
    left: 25px;
    top: 3px;
    transition: 0.8s;
    top: ${props => (props.valid ? '-15px' : '3px')};
    left: ${props => (props.valid ? '5px' : '25px')};
    font-size: 1rem;
    padding-top: 10px;
  }

  &:focus-within {
    label {
      font-size: 1rem;
      top: -25px;
      left: 5px;
    }
  }
`;

export default InputStyled;
