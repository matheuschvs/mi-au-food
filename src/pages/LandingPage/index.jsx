import { defaultAnimation, defaultTransition } from '../../utils/defaultMotion';

import { Container } from './style';

export const LandingPage = () => {
  return (
    <Container animate={defaultAnimation} transition={defaultTransition}>
      <h1>Landing Page</h1>
    </Container>
  );
};
