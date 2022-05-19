import { ToastContainer } from 'react-toastify';

import { GlobalStyle } from './styles/global';
import { DarkGlobalStyle } from './styles/darkGlobalStyle';
import { useTheme } from './context/theme';

import { Router } from './routes';

import 'react-toastify/dist/ReactToastify.min.css';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';

const App = () => {
  const { theme } = useTheme();

  return (
    <>
      <ToastContainer />
      {theme === 'light' ? <GlobalStyle /> : <DarkGlobalStyle />}
      <Router />
    </>
  );
};

export default App;
