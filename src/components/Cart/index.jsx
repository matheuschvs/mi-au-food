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
             <h3>Total:</h3>
             <h3> R$ 100,00</h3>
             </div>
             <button>Finalizar Compra</button>
      </>
    ):(
      <ul>
         <h4>Carrinho vazio</h4>
      </ul>
    )}

   </aside>
   </Container>
  )
}