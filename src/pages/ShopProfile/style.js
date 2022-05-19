import styled from 'styled-components';

export const Main = styled.main`
  padding-top: 120px;
  max-width: 1200px;
  width: 95%;
  margin: auto;
  p {
    font-family: 'Ubuntu';
  }

  h2 {
    margin: 20px;
  }

  span {
    font-weight: 700;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 4px;
  border-bottom: 2px solid var(--secondary-color);
  height: 40px;
`;
