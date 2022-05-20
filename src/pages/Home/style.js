import styled, { keyframes } from 'styled-components';

const appearFromTop = keyframes`
    from{
        opacity: 0;
        transform: translateY(-150px)
    }
    to{
        opacity: 1;
        transform: translateY(0px)
    }
`;

export const Container = styled.main`
  animation: ${appearFromTop} 1s;
  padding: 5.93rem 1.143rem 0;
  max-width: 1500px;
  position: relative;
  margin: auto;
  padding-top: 100px;
  div {
    display: flex;
  }

  @media only screen and (min-width: 1100px) {
    padding: 9.25rem 6.25rem;
    margin: 0;
    max-width: unset;
  }
`;
