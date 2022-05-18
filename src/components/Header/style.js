import styled from 'styled-components';

export const HeaderBar = styled.header`
  background: var(--primary-color);
  padding: 2rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
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
  display: none;
  background: var(--primary-color);
  padding: 2rem;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  position: fixed;
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
    h3 {
      margin-right: 100px;
      color: #ffffff;
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
    }
  }
`;

export const CartIcon = styled.img`
  display: block;
  margin-right: 13px;
  @media (min-width: 1024px) {
  }
`;

export const userIcon = styled.img`
  margin-right: 13px;
  width: 3rem;
  height: 1rem;
  background: white;
  @media (min-width: 1024px) {
  }
`;

export const MenuIcon = styled.img`
  display: block;
  margin-right: 10px;
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
  @media (min-width: 1024px) {
  }
`;
