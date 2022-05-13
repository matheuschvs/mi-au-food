/* eslint-disable */

import { Container } from "./style";
import { Card } from "../Card";
import { useCatalogue } from "../../context/catalogue";

export const Display = ({ addTocart}) => {
  const { products } = useCatalogue()

  return(
    <Container>
      {products.map((product) => <Card product={product} addTocart={addTocart} /> )}
    </Container>
  )
}

