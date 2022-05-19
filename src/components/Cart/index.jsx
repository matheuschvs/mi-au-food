/* eslint-disable*/
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/cart';
import { Card } from '../Card';
import { Container, CartButton } from './style';

const Contend = () => {
  const { cart, cartReducer } = useCart();
  const navigate = useNavigate();
  return (
    <>
      {cart.length > 0 ? (
        <>
          <ul>
            {cart.map(product => (
              <Card key={product.id} product={product} cartSize />
            ))}
          </ul>
          <div>
            <h3>Total:</h3>
            <h3> R$ {cartReducer.toFixed(2)}</h3>
          </div>
          <CartButton onClick={() => navigate(`../carrinho`)}>
            Finalizar Compra
          </CartButton>
        </>
      ) : (
        <ul>
          <section>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="60"
              height="60"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="feather feather-shopping-bag"
            >
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <h4>Carrinho vazio</h4>
          </section>
        </ul>
      )}
    </>
  );
};

export const Cart = ({ cart }) => {
  const [modal, setModal] = useState(false);

  return (
    <Container modal={modal}>
      <footer onClick={() => setModal(true)}>
        <h2>Carrinho</h2>
      </footer>
      <dialog>
        <div className="modal">
          <h2>Carrinho</h2>
          <button onClick={() => setModal(false)} className="close">
            {' '}
            X
          </button>
          <Contend cart={cart} />
        </div>
      </dialog>
      <aside>
        <h2>Carrinho</h2>
        <Contend />
      </aside>
    </Container>
  );
};
