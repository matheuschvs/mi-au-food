import styled from 'styled-components';

export const StyledDisplay = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  margin: auto;
  margin-bottom: 100px;

  @media (min-width: 850px) {
    max-width: 1200px;
    flex-wrap: wrap;
    width: 80%;
  }
`;
