/* eslint-disable */
import { useNavigate } from "react-router-dom";
import { Container } from "./style";

export const Card = ({product, cartSize, addTocart}) =>{
  const navigate = useNavigate()
  
  return (
  <Container key={product.id} cartSize={cartSize} >
    <figure onClick={()=> navigate(`../produto/${product.id}`)}>
      <img alt="" src={product.img}  />
    </figure>
    <section>
    <p className="name" onClick={()=> navigate(`../produto/${product.id}`)}>{product.name}</p>
    {!!cartSize?(
    <>
      <div>
        <p>Qtd: </p>
        <span>1</span>        
      </div>
      <div>
        <span>R$ {product.price.toFixed(2)}</span>
        <button> - </button>
      </div>
    </>
      ):(
    <>
    <div>
      <span>R$ {product.price.toFixed(2)}</span>
      <button  onClick={() =>addTocart(product)}> + </button>
    </div> 
    </>
      )}
    </section>         
  </Container>
  )
};