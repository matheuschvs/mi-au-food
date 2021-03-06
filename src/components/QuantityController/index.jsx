import { useCart } from '../../context/cart';
import { RangeButton } from './style';

export const QuantityController = ({ product }) => {
  const { addToCart, reduceQuantity } = useCart();

  return (
    <>
      <RangeButton onClick={() => reduceQuantity(product)}> - </RangeButton>
      <span>{product.quantity}</span>
      <RangeButton onClick={() => addToCart(product)}> + </RangeButton>
    </>
  );
};
