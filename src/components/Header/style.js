import styled from 'styled-components';

export const HeaderBar = styled.header`
  @media (max-width: 1023px) {
    display: none;
  }
  @media (min-width: 1024px) {
    display: flex;
    justify-content: flex-around;
    width: 1920px;
    height: 83px;
    background: #e70000;
  }
`;
