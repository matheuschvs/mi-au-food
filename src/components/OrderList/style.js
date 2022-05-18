import styled from 'styled-components';

export const OrderBox = styled.div`
  background-color: #ffa459;
  border-radius: 15px;
  padding: 3vw;
  margin-top: 3vw;
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  div {
    width: 20vw;
  }&:hover {
    background-color: #fa9948;
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  
  }
  @media (max-width: 798px) {
    div{
      width: 100%;;
    }
    
  }
 
`;

export const Order = styled.div`
@media (max-width: 798px) {
  flex-direction: row;
  
}
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 10px;
  background-color: #fff5f5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  p {
    margin: 7px;
  }&:hover {
    background-color: #fcdede;
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  
  }
  
`;
