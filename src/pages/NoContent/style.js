import styled from 'styled-components';

export const Container = styled.main`
  padding: 6.25rem 1rem;
  min-height: 100vh;

  background: var(--gradient);

  text-align: center;

  h1 {
    margin-top: 5.125rem;
    font: var(--title-2);
    line-height: 2.375rem;
  }

  & > p {
    font: 400 2rem 'Ubuntu', sans-serif;
    line-height: 2.375rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 6.25rem;
  }
`;

export const Content = styled.section`
  margin-top: 2.375rem;
  padding: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  h2 {
    font: 700 9.75rem 'Ubuntu', sans-serif;
    line-height: 21.75rem;
    text-shadow: 6px 6px 6px rgba(0, 0, 0, 0.5);
  }

  button,
  a {
    font: var(--title-2);
    color: var(--title);
  }

  a {
    text-decoration: none;
  }

  button {
    display: flex;
    align-items: center;

    border: none;
    background: transparent;

    svg {
      margin-right: 3.125rem;
      display: none;
    }
  }

  p {
    font: 400 2rem 'Ubuntu', sans-serif;
    margin: 1rem 0;
  }

  @media only screen and (min-width: 1024px) {
    padding: 0 7.375rem;

    h2 {
      font: 700 18.75rem 'Ubuntu', sans-serif;
    }

    button svg {
      display: inline-block;
    }
  }

  @media only screen and (min-width: 1440px) {
    flex-direction: row;
  }
`;
