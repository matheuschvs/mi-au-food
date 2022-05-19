/* eslint-disable */

import styled from "styled-components";

export const Container= styled.li`
width: ${(props)=>props.cartSize? "94%":"200px"};
height: ${(props)=>props.cartSize? "90px":"400px"};
margin: 7px;
display: flex;
flex-direction: ${(props)=>props.cartSize? "row":"column"};
justify-content: space-around;
background: white;
padding: 0.5rem;
border-radius: 1rem;
box-shadow: 0px 4px 4px 0px #00000040;

  img{
    width: 12rem;
    width: ${(props)=>props.cartSize? "4rem":"12rem"};
    height: ${(props)=>props.cartSize? "4rem":"12rem"};
  }
  section{
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-around;
    }
  p{
    font-size:  ${(props)=>props.cartSize? "1rem":"1.5rem"};
    font-family: "Ubuntu";
    font-weight: normal;
    max-width: ${(props)=>props.cartSize? "18ch":"100ch"};
    text-overflow: ellipsis;
    white-space: ${(props)=>props.cartSize? "nowrap":"wrap"};
    overflow: ${(props)=>props.cartSize? "hidden":""};
  }
  p.name:hover{
    text-decoration: underline;
    cursor: pointer;
  }
  button:hover{
    background-color: var( --secondary-color-2);
  }
  img:hover{
    cursor: pointer;
  }
  span{
    font-family: "Ubuntu";
    font-size:  ${(props)=>props.cartSize? "1rem":"1.5rem"};
    font-weight:700;
  }
  svg{
    font-size: 0.8rem;
  }
  div{
    display: flex;
    align-items: center;
    justify-content: space-between;  
  }

    @media (min-width: 850px){
     
    }
`
export const CardButton = styled.button`

    width: 2rem;
    height: 2rem;
    border-radius: 1rem;
    border: none;
    background-color: var( --secondary-color);
    color: var(--background);
    padding: 0;
    font-size: 1.5rem;
    margin: 0;
    font-weight: bold;
  
`
