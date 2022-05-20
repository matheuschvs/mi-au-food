import styled from 'styled-components';

export const OrderBox = styled.div`
  background-color: var(--secondary-color-1);
  margin-bottom: 8px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  
  div {
    width: 350px;
    padding-left: 30px;
  }&:hover {
    background-color: var(--secondary-color);
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
  background-color: var(--background);
  padding: 10px;

  p {
    margin-top: 5px;
  }&:hover {
    background-color: var(--quaternary-color-1);
  }
  -webkit-transition-duration: 0.4s; /* Safari */
  transition-duration: 0.4s;
  }
  @media (max-width: 340px) {
    flex-wrap: wrap;
  }
`;
export const MarginOrder = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;
`;
