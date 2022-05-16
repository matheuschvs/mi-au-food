import { defaultAnimation, defaultTransition } from '../../utils/defaultMotion';

import { Container, Opening } from './style';

export const LandingPage = () => {
  return (
    <Container animate={defaultAnimation} transition={defaultTransition}>
      <Opening>
        <h1>Mi-Au Food</h1>
        <h2>Seu pet feliz de verdade</h2>
      </Opening>
    </Container>
  );
};
