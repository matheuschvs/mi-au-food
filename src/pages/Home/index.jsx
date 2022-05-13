/* eslint-disable*/

import axios from 'axios';
import { useState} from 'react';
import { Container } from './style';
import { Display } from '../../components/Display';
import { Cart } from '../../components/Cart';
import { NavBar } from '../../components/NavBar';


export const Home = () => {
  const [products, setProducts] = useState([])
  const [ cart, setCart] = useState([])
  const addTocart = (product) =>{
    setCart([...cart, product]);
  }
  axios.get("https://json-server-kenziegroup.herokuapp.com/product")
  .then((response) => {setProducts(response.data)})

  return(
  <main>
    <h1>Home</h1> 
    <Container>
      <NavBar/>
      <div>
      <Display products={products}  addTocart={addTocart} />
      <Cart cart={cart}/>
      </div>
    </Container>     
  </main>
  );
};
