/* eslint-disable */

import { Container } from "./style";
import { Card } from "../Card";
import { useCatalogue } from "../../context/catalogue";

export const Display = ({ addTocart}) => {
  const { catalogue } = useCatalogue()

  return(
    <Container>
      {catalogue.map((product) => <Card product={product} addTocart={addTocart} /> )}
    </Container>
  )
}

