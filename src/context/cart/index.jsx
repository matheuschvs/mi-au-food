import {
  createContext,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem('@mi-au-food:cart')) || [],
  );

  const addToCart = useCallback(
    product => {
      const cartItem = cart.find(elem => elem.id === product.id);

      if (cartItem) {
        cartItem.quantity += 1;
        const list = [...cart];
        setCart(list);
        return localStorage.setItem('@mi-au-food:cart', JSON.stringify(cart));
      }
      cartItem.quantity = 1;
      const list = [...cart, product];
      setCart(list);
      return localStorage.setItem('@mi-au-food:cart', JSON.stringify(list));
    },
    [cart],
  );

  const removeFromCart = useCallback(
    product => {
      const list = cart.filter(item => item !== product);
      setCart(list);
      return localStorage.setItem('@mi-au-food:cart', JSON.stringify(list));
    },
    [cart],
  );

  const reduceQuantity = useCallback(
    product => {
      const cartItem = cart.find(elem => elem.id === product.id);

      if (cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        const list = [...cart];
        setCart(list);
        return localStorage.setItem('@mi-au-food:cart', JSON.stringify(cart));
      }
      removeFromCart(product);
      return null;
    },
    [cart, removeFromCart],
  );

  const cartReducer = cart.reduce((vAn, vAt) => {
    return vAn + Number(vAt.price * vAt.quantity);
  }, 0);

  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, reduceQuantity, cartReducer }),
    [addToCart, removeFromCart, reduceQuantity, cart, cartReducer],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
