import styled from 'styled-components';

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: column-reverse;
  margin-bottom: 2rem;

  section {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    border-bottom: 1px solid var(--title);
  }
  button {
    color: var(--title);
    border: none;
    font-family: 'Ubuntu';
    background: none;
    margin: 1rem;
    font-size: 1.4rem;
    transition: all 0.3s;

    &:hover {
      color: var(--primary-color);
    }
  }

  div {
    background: none;
    border-radius: 1.5rem;
    border: 3px solid var(--primary-color);
    color: var(--primary-color);
    height: 2.5rem;
    margin: 1rem;
    padding: 0 5px;
    align-items: center;
  }
  div:focus-within {
    border: 3px solid var(--primary-color-2);
    color: var(--primary-color-2);
  }
  div input {
    background: none;
    outline: none;
    border: none;
    min-width: 200px;
    width: 100%;
    color: var(--title);
  }

  @media (min-width: 1100px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    div {
      width: 21.25rem;
    }
  }
`;
