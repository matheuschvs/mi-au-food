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

  input {
    background: transparent;
    position: absolute;
    padding: 0 25px;
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
  }

  &:focus-within {
    label {
      font-size: 12px;
      top: -15px;
      left: 5px;
    }
  }
`;

export default InputStyled;
