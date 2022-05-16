/* eslint-disable*/
import { useState } from 'react';
import { Container } from './style';
import { Display } from '../../components/Display';
import { Cart } from '../../components/Cart';
import { NavBar } from '../../components/NavBar';

export const Home = () => {
  const [ cart, setCart] = useState([])
  const addTocart = (product) =>{
    setCart([...cart, product]);
  }
  return(

    <Container>
      <NavBar/>
      <div>
      <Display addTocart={addTocart} />
      <Cart cart={cart}/>
      </div>
    </Container>     

  );
};
