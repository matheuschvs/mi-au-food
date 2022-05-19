import { StyledDisplay } from './style';
import { Card } from '../Card';
import { useCatalogue } from '../../context/catalogue';

export const Display = () => {
  const { catalogue } = useCatalogue();

  return (
    <StyledDisplay>
      {catalogue.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </StyledDisplay>
  );
};
