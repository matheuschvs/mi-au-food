/* eslint-disable*/
import { Card } from "../Card"
import { Container } from "./style"

export const Cart = ({cart}) =>{
  return(
    <Container>
    <footer>
    <h2>Carrinho</h2>
   </footer>
   <aside>
    <h2>Carrinho</h2> 
    {cart.length > 0?(
      <>
        <ul>
          {cart.map(product =><Card product={product} cartSize/>)}
        </ul>
             <div>
             <h4>Total:</h4>
             <h4> R$ 100,00</h4>
             </div>
             <button>Finalizar Compra</button>
      </>
    ):(
      <ul>
         <h3>Carrinho vazio</h3>
      </ul>
    )}

   </aside>
   </Container>
  )
}