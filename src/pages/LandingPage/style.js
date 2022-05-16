import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled(motion.main)`
  padding: 5.93rem 1.143rem;
`;

export const Opening = styled.section`
  text-align: center;

  background: var(--primary-color);

  width: 100vw;
  height: 13.14rem;
  padding-top: 2.14rem;
  margin-left: -1.143rem;

  border-bottom-left-radius: 10.7rem;
  border-bottom-right-radius: 10.7rem;

  h1 {
    font-size: 2.86rem;
    color: var(--background);
  }

  h2 {
    font-size: 1.43rem;
    max-width: 14.3rem;
    color: var(--background);

    margin: 0 auto;
  }
`;
