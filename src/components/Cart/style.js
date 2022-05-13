/* eslint-disable */

import styled from 'styled-components';

export const Container = styled.div`
footer{ 
  position: fixed;
  bottom:0px;
  left: 0;
  background:var(--primary-color);
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem 1rem 0 0;
}
aside{ 
  display: none;
}

h2, h4{ color: var(--background);}

@media (min-width: 850px){

      footer{
        display: none;
      }
      aside{ 
        display: block;
        width: 350px;
        background: var(--primary-color);
        height: min-content;
        max-height: 500px;
        margin: 10px;
        border-radius: 1rem;
        text-align: center;
      }
      aside h2{
        margin: 10px;
      }
      aside ul{ 
        background-color: var(--background);
        max-width: 90%;
        height: 300px;
        border-radius: 1rem;
        overflow-y: auto;
        margin: 10px auto;
      }
      aside ul h3{
        margin: 20px;
      }
      aside button{
        margin: 10px;
      }

      aside div{
      display: flex;
      width: 100%;
      justify-content: space-around;
      }
    }
`