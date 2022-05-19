import styled from 'styled-components';

export const Container = styled.main`
  padding: 5.93rem 1.143rem 0;
  max-width: 1500px;
  position: relative;
  margin: auto;
  padding-top: 100px;

  div {
    display: flex;
  }

  @media only screen and (min-width: 1100px) {
    padding: 6.25rem;
    margin: 0;
    max-width: unset;
  }
`;
