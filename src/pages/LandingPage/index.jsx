import { useAuth } from '../../context/auth';

import { defaultAnimation, defaultTransition } from '../../utils/defaultMotion';

import { Container } from './style';

export const LandingPage = () => {
  const { signIn, signUp } = useAuth();

  return (
    <Container animate={defaultAnimation} transition={defaultTransition}>
      <h1>Landing Page</h1>
      <button
        type="button"
        onClick={() =>
          signUp({
            name: 'lojaTeste',
            email: 'lojaTeste@gmail.com',
            password: '123456',
            type: 'shop',
          })
        }
      >
        User Sign Up
      </button>
      <button
        type="button"
        onClick={() =>
          signIn({ email: 'lojaTeste@gmail.com', password: '123456' })
        }
      >
        Sign In
      </button>
    </Container>
  );
};
