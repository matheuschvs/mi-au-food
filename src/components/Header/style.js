import styled from 'styled-components';

export const HeaderBar = styled.header`
  background: var(--primary-color);
  padding: 2rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0%;
  left: 0;
  z-index: 20;
  box-shadow: ${props => props.boxShadow};

  h1 {
    font-size: 2rem;
    color: #ffffff;
    font-style: var(--title-1);
    cursor: pointer;
    font-weight: 500;
    margin-left: 10px;
  }
  div {
    display: none;
  }
  @media (min-width: 1024px) {
    h1 {
      margin-left: 100px;
    }
    div {
      display: flex;
      align-items: center;
    }
    button {
      display: flex;
      box-sizing: border-box;
      padding: 15px;
      gap: 10px;
      width: 4rem;
      height: 40px;
      background: var(--background);
      border: 1px dashed var(--primary-color);
      border-radius: 8px;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
      margin-right: 1rem;
      cursor: pointer;
      &:hover {
        background: var(--primary-color-2);
        color: var(--background);
        border: 1px dashed var(--background);
      }
    }
    h3 {
      margin-right: 100px;
      color: #ffffff;
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
    }
  }
`;

export const HeaderLogin = styled.header`
  background: var(--primary-color);
  padding: 2rem;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0%;
  left: 0;
  z-index: 20;
  box-shadow: ${props => props.boxShadow};

  h1 {
    font-size: 1.2rem;
    color: #ffffff;
    font-style: var(--title-1);
    cursor: pointer;
    font-weight: 500;
    margin-left: 10px;
  }
  @media (min-width: 420px) {
    h1 {
      font-size: 2rem;
    }
  }

  p {
    display: flex;
    background-color: var(--background);
    border-radius: 100%;
    width: 1.5rem;
    font-size: 1rem;
    padding-top: 0.3rem;
    font-weight: 600;
    height: 1.5rem;
    margin-left: -20px;
    margin-top: -22px;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  h3 {
    display: none;
    margin-right: 13px;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 400;
  }
  @media (min-width: 1024px) {
    h1 {
      margin-left: 100px;
    }
    div {
      display: flex;
      align-items: center;
    }
    h3 {
      display: block;
    }
  }
`;

export const CartIcon = styled.img`
  display: block;
  margin-right: 13px;
  cursor: pointer;
  @media (min-width: 1024px) {
  }
`;

export const IconUser = styled.img`
  display: none;
  margin-right: 10px;
  width: 2rem;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: block;
    margin-right: 100px;
  }
`;

export const LogoutIcon = styled.img`
  width: 1.2rem;
  cursor: pointer;
`;

export const MenuIcon = styled.img`
  display: block;
  margin-right: 10px;
  cursor: pointer;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const ContainerIMG = styled.section`
  display: flex;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export const LogedIcons = styled.section`
  display: flex;
  align-items: center;
  @media (min-width: 1024px) {
  }
`;

export const UserModal = styled.div`
  background: var(--background);
  border-radius: 15px;
  width: 200px;
  height: auto;
  color: var(--title);
  position: fixed;
  padding: 20px 0px 20px 0px;
  top: 10%;
  right: 0%;
  margin-right: 18px;
  display: none;
  flex-direction: column;
  align-items: flex-start;
  border: solid 2px var(--primary-color);

  h2 {
    font-size: 1rem;
    padding: 5px;
    cursor: pointer;
    width: 100%;
    padding-left: 20px;
    font-weight: 500;

    &:hover {
      background-color: var(--secondary-color);
      color: var(--secondary-color-2);
    }
  }

  div {
    padding-left: 20px;
    width: 100%;

    &:hover {
      background-color: var(--secondary-color);
      color: var(--secondary-color-2);
    }
  }

  :after {
    content: '';
    width: 0;
    height: 0;
    position: absolute;
    align-items: flex-start;
    border-left: 20px solid var(--primary-color);
    border-right: 20px solid var(--primary-color);
    border-bottom: 20px solid var(--background);
    top: -20px;
    right: 6%;
  }

  @media (min-width: 1024px) {
    display: flex;

    margin-right: 7.1875rem;
    margin-top: 0.625rem;
    right: 0%;
  }
`;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: var(--background);
  padding: 20px;
  border: solid 1px var(--primary-color);

  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: var(--title-1);
  }

  p {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 1.7rem;
    cursor: pointer;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    width: 100%;
    color: var(--title-1);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12vh;
  }

  section {
    display: flex;
    margin-top: 100px;

    img {
      margin-right: 10px;
      width: 2rem;
    }
  }
`;

export const ContainerModalLogoff = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: 30;
  background-color: var(--background);
  padding: 20px;
  border: solid 1px var(--primary-color);

  h1 {
    font-size: 2rem;
    font-weight: 500;
    color: var(--title-1);
  }

  p {
    color: var(--primary-color);
    font-weight: 500;
    font-size: 1.7rem;
    cursor: pointer;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 400;
    width: 100%;
    color: var(--title-1);
  }
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12vh;
  }

  h3 {
    margin: 0 auto;
    margin-top: 80px;
    width: 50vw;
    font-weight: 400;
    text-align: center;
  }

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 100px;

    button {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      padding: 15px;
      gap: 10px;
      font-size: 1.2rem;
      width: 100%;
      height: 40px;
      left: 1225px;
      top: 597.4px;
      background: rgba(231, 0, 0, 0.95);
      border: 1px dashed rgba(231, 0, 0, 0.95);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      color: #fff5f5;
      margin-top: 1.2rem;
      &:hover {
        background: rgba(200, 0, 0, 0.95);
      }
    }

    a {
      text-decoration: none;
      color: var(--title-1);
      cursor: pointer;
      font-size: 1.2rem;
      margin-top: 15px;
    }
  }
`;
