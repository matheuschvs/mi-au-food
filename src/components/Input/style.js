import styled from 'styled-components';

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #cddfe3;
  width: 70%;
  max-height: 5vh;
  margin-top: 1.4rem;
  position: relative;
  padding-left: 2rem;
  transition: 0.8s;
  background: #fff5f5;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  div {
    margin-bottom: -4.5rem;
    span {
      font-weight: bold;
      width: 9rem;
      font-size: 1rem;
      color: var(--secondary-color-1);
      margin-left: 7rem;
    }
  }
  input {
    background: transparent;
    position: absolute;
    border: none;
    outline: none;
    width: 100%;
    font-size: 1rem;
    color: var(--title);
    
    &::placeholder {
      color: var(--title);
    }
  }
  label {
    color: var(--title);
    position: absolute;
    left: 25px;
    top: 3px;
    transition: 0.8s;
    top: ${props => (props.valid ? '-2rem' : '3px')};
    left: ${props => (props.valid ? '5px' : '25px')};
    font-size: 1rem;
    padding-top: 15px;
  }
  &:focus-within {
    label {
      font-size: 1rem;
      top: -2rem;
      left: 5px;
      font-weight: bold;
    }
  }
`;
