/* eslint-disable*/

import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('@Mi-auFood:cart')) || []);

  const addToCart = (product) => {
  if(cart.find(elem => elem.id === product.id)){
    product.quantity = product.quantity + 1
    const list = [...cart]
    setCart(list)
    return localStorage.setItem('@Mi-auFood:cart', JSON.stringify(cart))

  } else{
      product.quantity = 1
      const list = [...cart, product]
      setCart(list);
      return localStorage.setItem('@Mi-auFood:cart', JSON.stringify(list))
  }
};

const removeFromCart = (product) => {
  const list = cart.filter(item => item !== product)
  setCart(list);
  return localStorage.setItem('@Mi-auFood:cart', JSON.stringify(list))
};

const reduceQuantity = (product) =>{
  if(product.quantity > 1){
    product.quantity = product.quantity - 1
    const list = [...cart]
    setCart(list)
    return localStorage.setItem('@Mi-auFood:cart', JSON.stringify(cart))
  }else{
    removeFromCart(product)
  }
}

const cartReducer = cart.reduce((vAn, vAt)=>{
  return vAn + Number(vAt.price * vAt.quantity)       
}, 0) 

return (
<CartContext.Provider
 value={{ cart, addToCart, removeFromCart, reduceQuantity, cartReducer }}>
{children}
</CartContext.Provider>
)
}

export const useCart = () => useContext(CartContext);
