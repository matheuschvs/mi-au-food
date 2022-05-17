import { ChevronRight } from 'react-feather';

import { Container } from './style';

export const GoToButton = ({ children, ...rest }) => {
  return (
    <Container type="button" {...rest}>
      {children}
      <ChevronRight />
    </Container>
  );
};
