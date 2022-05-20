import styled from 'styled-components';

export const ButtonStyled = styled.button`
  @media (min-width: 1024px) {
    gap: 10px;
    background: rgba(231, 0, 0, 0.95);
    border: 1px dashed rgba(231, 0, 0, 0.95);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    transform: matrix(1, 0, 0, 1, 0, 0);
    color: var(--background-2);
    margin-right: 10px;
    height: 50px;
    width: 150px;
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  background: rgba(231, 0, 0, 0.95);
  /* primary-color */
  border: 1px dashed rgba(231, 0, 0, 0.95);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 25px;

  color: var(--background);
`;
