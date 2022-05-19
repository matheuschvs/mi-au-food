import { Sun, Moon } from 'react-feather';

import { useTheme } from '../../context/theme';

import { Container } from './style';

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container onClick={() => toggleTheme()}>
      {theme === 'light' ? <Sun /> : <Moon />}
    </Container>
  );
};
