import styled from 'styled-components';

export const InputStyled = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid #cddfe3;
  width: 70%;
  max-height: 35px;
  margin-top: 1.4rem;
  position: relative;
  padding-left: 2rem;
  transition: 0.8s;
  background: #fff5f5;
  box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  div {
    margin-bottom: 3.2rem;
    margin-left: 2.2rem;
    span {
      font-weight: bold;
      color: var(--secondary-color-1);
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
  }

  label {
    color: var(--title);
    position: absolute;
    left: 25px;
    top: 3px;
    transition: 0.8s;
    top: ${props => (props.valid ? '-15px' : '3px')};
    left: ${props => (props.valid ? '5px' : '25px')};
    font-size: 0.7rem;
    padding-top: 5px;
  }

  &:focus-within {
    label {
      font-size: 0.7rem;
      top: -15px;
      left: 5px;
      font-weight: bold;
    }
  }
`;
