/* eslint-disable */

import styled from 'styled-components';

export const NavStyled = styled.nav`
  display:flex;
  flex-direction: column-reverse;
    section{
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      scroll-snap-type: x mandatory;
      border-bottom: 1px solid var(--title);
    }
      button{ 
      border: none;
      font-family: "Ubuntu";
      background: none;
      margin: 1rem;
      font-size: 1.4rem;
    }

    div{
      background: none;
      border-radius: 1.5rem;
      border: 3px solid var(--primary-color);
      color: var(--primary-color);
      max-width: 300px;
      height: 2.5rem;
      margin: 1rem;
      padding: 0 5px;
      align-items: center;
    }
    div:focus-within{
      border: 3px solid var(--primary-color-2);
      color: var(--primary-color-2);
    }
    div input{
        background: none;
        outline: none;
        border: none;
        margin: 0 1rem;
        min-width:200px
    }

    @media (min-width: 1100px) {
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
`