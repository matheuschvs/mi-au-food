import styled from 'styled-components';

export const Container = styled.button`
  padding: 0.3928rem 1rem;

  display: inline-flex;
  align-items: center;
  justify-content: space-between;

  border: none;
  border-radius: 0.571rem;

  color: var(--text);
  font: 400 0.857rem 'Ubuntu', sans-serif;

  background: var(--secondary-color-1);

  svg {
    margin-left: 0.714rem;
  }

  &:hover {
    background: var(--secondary-color-2);
    color: var(--background);
  }
`;
