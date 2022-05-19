import styled from 'styled-components';

export const MainContainer = styled.div`
  header {
    margin-top: 50px;
    margin-left: 24%;
    margin-bottom: 80px;
  }
  @media (max-width: 1024px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 1562px) {
    display: flex;
    flex-direction: column;
    align-items: center;

    header {
      margin-top: 50px;
      margin-left: 0px;
    }
  }
`;

export const MainDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 500px;
  width: 900px;
  background-color: red;
  border-radius: 550px 0px 0px 550px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  input {
    height: 45px;
  }
  h1 {
    color: white;
    font-size: 50px;
    margin-top: 40px;
  }
  @media (max-width: 1562px) {
    border-radius: 10px;
    width: 100%;
    margin-bottom: 120px;

    h1 {
      color: white;
      font-size: 35px;
      margin-top: 40px;
      margin-right: 70px;
      margin-left: 70px;
    }
  }

  input {
    height: 45px;
  }
  
  }
`;
export const IMG = styled.img`
  width: 26%;
  height: 100%;
  margin-left: 15%;
  @media (max-width: 1562px) {
    display: none;
  }
`;
