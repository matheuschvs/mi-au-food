import styled from 'styled-components';

export const OrderBox = styled.div`
  background-color: #ffa459;
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  
  div {
    width: 350px;
    padding-left: 30px;
  }&:hover {
    background-color: #fa9948;
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  
  }
  h3 {
    padding: 20px;
  }
  @media (max-width: 1296px) {
    div{
      width: 100%;;
    }
    
  }
 
`;

export const Order = styled.div`
@media (max-width: 1296px) {
  flex-direction: row;
}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  margin-top: 2px;
  
  background-color: #fff5f5;
  padding: 10px;
  p {
    margin-top: 5px;
    
  }&:hover {
    background-color: #fcdede;
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  
  }
`;
