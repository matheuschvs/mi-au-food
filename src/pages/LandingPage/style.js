import { motion } from 'framer-motion';
import styled from 'styled-components';

import dogBackground from '../../assets/dog-face-mobile.png';

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

export const Cards = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  margin-top: 4.14rem;
  margin-bottom: 11.43rem;

  article {
    width: 18.43rem;
    height: 18.714rem;

    padding: 2.5rem 1.71rem;

    border-radius: 5px;

    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    h3 {
      font-size: 1.57rem;
      color: var(--background);
      text-align: center;
      margin-bottom: 1.571rem;
    }

    &:first-child {
      background: var(--secondary-color);

      & > div {
        display: flex;
        align-items: flex-start;

        button {
          margin-top: 0.5rem;
          margin-left: -2rem;
        }
      }
    }

    &:last-child {
      margin-top: 6.857rem;
      background: var(--tertiary-color);
      align-self: flex-end;

      & > div {
        display: flex;
        align-items: flex-end;
        justify-content: space-between;

        button {
          background: var(--tertiary-color-1);
          margin-right: -2rem;

          &:hover {
            background: var(--tertiary-color-2);
          }
        }
      }
    }
  }
`;

export const Partners = styled.section`
  background: var(--secondary-color-1);
  background-image: url(${dogBackground});
  background-blend-mode: darken;
  background-size: 120vw 100%;
  background-position: center;

  padding: 4.643rem 0.714rem;
  width: 100vw;
  margin-left: -1.143rem;

  h3 {
    color: var(--title);
    text-align: center;
  }
`;
