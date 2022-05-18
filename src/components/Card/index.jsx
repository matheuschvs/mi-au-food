/* eslint-disable */

import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart';
import { QuantityController } from '../QuantityController';
import { Container, CardButton } from './style';

export const Card = ({ product, cartSize }) => {
  const navigate = useNavigate();
  const { addToCart, removeFromCart } = useCart();

  return (
    <Container key={product.id} cartSize={cartSize}>
      <figure onClick={() => navigate(`../produto/${product.id}`)}>
        <img alt="" src={product.img} />
      </figure>
      <section>
        {cartSize ? (
          <>
            <div>
              <p
                className="name"
                onClick={() => navigate(`../produto/${product.id}`)}
              >
                {product.name}
              </p>
              <CardButton onClick={() => removeFromCart(product)}>
                {' '}
                T
              </CardButton>
            </div>
            <div>
              <QuantityController product={product} />
              <span>R$ {product.price.toFixed(2)}</span>
            </div>
          </>
        ) : (
          <>
            <p
              className="name"
              onClick={() => navigate(`../produto/${product.id}`)}
            >
              {product.name}
            </p>
            <div>
              <span>R$ {product.price.toFixed(2)}</span>
              <CardButton onClick={() => addToCart(product)}> + </CardButton>
            </div>
          </>
        )}
      </section>
    </Container>
  );
};
