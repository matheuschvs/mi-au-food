import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
  useEffect,
} from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('@mi-au-food:theme', newTheme);
  }, [theme]);

  const value = useMemo(() => ({ theme, toggleTheme }), [theme, toggleTheme]);

  useEffect(() => {
    const localTheme = localStorage.getItem('@mi-au-food:theme');

    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
