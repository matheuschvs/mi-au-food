/* eslint-disable */


import styled from 'styled-components';

export const Container = styled.main`
max-width: 1500px;
width: 95%;
position: relative;
margin: auto;
nav{ 
  display:flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  margin: auto;
  border-bottom: 1px solid var(--title)
}
div{ 
  display: flex;
}


nav button{ 
  border: none;
  font-family: "Ubuntu";
  background: none;
  margin: 1rem;
  font-size: 1.5rem;
}

`;