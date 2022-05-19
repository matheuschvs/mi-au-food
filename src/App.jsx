import { GlobalStyle } from './styles/global';

import { Router } from './routes';

// eslint-disable-next-line import/no-unresolved
import 'swiper/css/bundle';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
};

export default App;
