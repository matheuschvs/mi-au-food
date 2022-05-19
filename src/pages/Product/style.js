import styled from 'styled-components';

export const StyledMain = styled.main`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 5rem 1rem;
  padding-top: 100px;

  div {
    height: 320px;
    width: 95%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 0 30px;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  figure {
    width: 300px;
    height: 300px;
  }
  img {
    width: inherit;
    border-radius: 1rem;
  }

  p {
    font-family: 'Ubuntu';
    font-size: 1rem;
  }

  span {
    font-family: 'Ubuntu';
    font-size: 1.5rem;
    font-weight: bold;
  }

  @media (min-width: 768px) {
    flex-direction: row;
    div {
      height: 360px;
    }
    figure {
      width: 360px;
      height: 360px;
    }
    section {
      flex-direction: row;
    }
  }

  @media only screen and (min-width: 1100px) {
    margin: 7rem;
  }
`;

export const ProductButton = styled.button`
  font-family: 'Ubuntu';
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  background-color: var(--secondary-color);
  color: var(--background);
  margin: 8px;

  &:hover {
    background-color: var(--secondary-color-2);
  }
`;
export const Head3 = styled.h3`
  text-align: center;
  margin: 20px;
`;
