/* eslint-disable*/

import styled from "styled-components";

export const Dialog = styled.dialog`
width: 100vw;
height: 100vh;
position: absolute;
border: none;
top: 0;
background: none;
left: 0;
display: ${props => (props.modal ? 'flex' : 'none')};
justify-content: center;
align-items: center;

div{
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--secondary-color);
    width: 300px;
    height: 450px;
    border-radius: 1rem;
}
form{
  display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
}

editor-squiggler{
  display:none;
}
input{
  margin-bottom: 0.5rem;
    padding: 0.5rem;
    border: none;
    border-radius: 1rem;
    width: 90%;
}

`