/* eslint-disable*/

import { useParams } from 'react-router-dom';
import { useCatalogue } from '../../context/catalogue'
import { StyledMain, ProductButton, Head3 } from './style';
import { Card } from '../../components/Card'
import { StyledDisplay } from '../../components/Display/style';
import { useCart } from '../../context/cart';
import { QuantityController } from '../../components/QuantityController';

export const Product = () => {
  const params = useParams();
  const { catalogue } = useCatalogue();
  const {addToCart} = useCart();

  const item = catalogue.find(product =>Number(product.id) === Number(params.productId))
  const options = catalogue.filter(product => product.type === item.type && product.petType === item.petType && product.id !== item.id)
  return <>
  {!!item?( 
  <StyledMain>
    <figure>
      <img src={item.img}/>
    </figure>
    <div>
      <h2>{item.name}</h2>
      <h4>Descrição:</h4>
      <p>{item.description}</p>
        <section>
          <span>R$ {item.price.toFixed(2)}</span>
          <ProductButton  onClick={() =>addToCart(item)}>Adicionar ao Carrinho</ProductButton>
        </section>
    </div>
  </StyledMain>
  ):("") }
      {options.length > 0?(
        <>
        <Head3>Achamos que seu pet também vai gostar:</Head3>
        <StyledDisplay>
          
          {options.map(product => <Card product={product}/>)}
        </StyledDisplay>
        </>
      ):(<></>)}


  </> 
};
