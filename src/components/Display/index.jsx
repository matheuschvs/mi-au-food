/* eslint-disable */

import { Container } from "./style";
import { Card } from "../Card";

export const Display = ({products, addTocart}) => {
  return(
    <Container>
      {products.map((product) => <Card product={product} addTocart={addTocart} /> )}
    </Container>
  )
}

