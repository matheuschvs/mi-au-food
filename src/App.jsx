import { ToastContainer } from 'react-toastify';
import { GlobalStyle } from './styles/global';

import { Router } from './routes';

import 'react-toastify/dist/ReactToastify.min.css';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';

const App = () => {
  return (
    <>
      <ToastContainer />
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
