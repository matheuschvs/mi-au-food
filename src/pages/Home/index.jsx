/* eslint-disable*/
import { Container } from './style';
import { Display } from '../../components/Display';
import { Cart } from '../../components/Cart';
import { NavBar } from '../../components/NavBar';

export const Home = () => {

  return(

    <Container>
      <NavBar/>
      <div>
      <Display />
      <Cart/>
      </div>
    </Container>     

  );
};
