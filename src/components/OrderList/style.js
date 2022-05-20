import styled from 'styled-components';

export const OrderBox = styled.div`
  background-color: var(--secondary-color-1);
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  height: fit-content;
  font-family: 'Ubuntu';

  div {
    width: 350px;
  }
  &:hover {
    background-color: var(--secondary-color);
  }

  li {
    padding: 0.5rem;
    border-top: 3px solid var(--background);
  }

  .Aguardando {
    background-color: var(--secondary-color-1);
  }

  .Andamento {
    background-color: var(--tertiary-color-1);
  }

  .Entregue {
    background-color: var(--quaternary-color-1);
  }

  .Cancelado {
    background-color: var(--primary-color-1);
  }

  h3 {
    padding: 20px;
  }
  @media (max-width: 1296px) {
    div {
      width: 100%;
    }
  }
`;

export const Order = styled.div`

@media (max-width: 1296px) {
  flex-direction: row;
}

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2px;
  
  background-color: var(--background);

  p {
    margin-top: 5px;
  }&:hover {
    background-color: var(--quaternary-color-1);
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  }
`;
