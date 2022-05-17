/* eslint-disable */

import styled from 'styled-components';

export const StyledDisplay = styled.ul`

display: flex;
width: 90%;
flex-wrap: nowrap;
overflow-x: auto;
scroll-snap-type: x mandatory;
margin: auto;

    @media (min-width: 850px){
      max-width: 1200px;
        flex-wrap: wrap;
        width: 80%;
    }
`;