import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 120px;
  max-width: 1200px;
  width: 95%;
  margin: auto;
  p {
    font-family: 'Ubuntu';
    padding: 0.5rem;
  }

  h2 {
    margin: 20px;
  }

  span {
    font-weight: 700;
  }
  ul {
    margin-bottom: 1rem;
  }
  li {
    border-bottom: 2px solid var(--secondary-color);
    margin: 4px;
    text-align: center;
    list-style: none;
    display: flex;
    justify-content: space-between;
  }
  @media (min-width: 800px) {
    li {
      text-align: left;
    }
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 200px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
  }

  @media (min-width: 800px) {
    height: 40px;
    div {
      flex-direction: row;
    }
  }
`;

export const Order = styled.div`
  border: 2px solid var(--secondary-color);
  max-width: 80%;
  margin: auto;
  padding: 0.5rem;
  margin-bottom: 2rem;
`;
