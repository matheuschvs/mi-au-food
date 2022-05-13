/* eslint-disable */
import { Container } from "./style";

export const Card = ({product, cartSize, addTocart}) =>{
  return (
  <Container key={product.id} cartSize={cartSize} >
    <figure>
      <img alt="" src={product.img}  />
    </figure>
    <section>
    <p>{product.name}</p>
    {/* <div>
      <input type="number" />
    </div> */}
    <div>
      <h3>R$ {product.price.toFixed(2)}</h3>
      <button  onClick={() =>addTocart(product)}> + </button>
    </div>    
    </section>
            
  </Container>
  )
};