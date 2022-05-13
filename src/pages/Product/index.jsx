import { useParams } from 'react-router-dom';

export const Product = () => {
  const params = useParams();

  return <h1>Produto {params.productId}</h1>;
};
