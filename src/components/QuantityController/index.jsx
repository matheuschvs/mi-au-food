/* eslint-disable*/

import { useCart } from '../../context/cart';
import { RangeButton } from './style';

export const QuantityController = ({ product }) => {
  const { addToCart, reduceQuantity } = useCart();

  console.log(product);
  return (
    <>
      <RangeButton onClick={() => addToCart(product)}> + </RangeButton>
      <span>{product.quantity}</span>
      <RangeButton onClick={() => reduceQuantity(product)}> - </RangeButton>
    </>
  );
};
