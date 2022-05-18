import { motion } from 'framer-motion';
import styled from 'styled-components';

import dogBackground from '../../assets/dog-face-mobile.png';

export const Container = styled(motion.main)`
  padding: 5.93rem 1.143rem 0;

  a {
    text-decoration: none;
  }

  .swiper {
    display: none;

    width: 64vw;
    height: 25.125rem;
    margin-top: -15.5rem;
  }

  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .swiper-button-prev,
  .swiper-button-next {
    top: 1.3rem;
    height: 100%;
    padding: 1.5rem;
    background: var(--secondary-color);
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-button-prev:after,
  .swiper-button-next:after {
    font-size: 1rem;
    font-weight: 700;
    color: var(--background);
  }

  @media only screen and (min-width: 1024px) {
    padding: 5.187rem 6.25rem 0;

    .swiper {
      display: block;
    }
  }
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

  @media only screen and (min-width: 1024px) {
    height: 32.5rem;
    border-bottom-left-radius: 34.375rem;
    border-bottom-right-radius: 34.375rem;
    margin-left: -6.25rem;

    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2rem;
    }
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

    button {
      transition: all 0.2s;
    }

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

  @media only screen and (min-width: 580px) {
    flex-direction: row;
    justify-content: space-around;

    &:last-child {
      margin-top: 8.25rem;
    }
  }

  @media only screen and (min-width: 768px) {
    justify-content: space-between;

    article {
      border-radius: 3.125rem;
      width: 48%;
      max-width: 43.125rem;

      h3 {
        max-width: 28.75rem;
        margin: 0 auto 1.571rem;
      }

      &:first-child {
        & > div {
          button {
            margin-top: 0;
            margin-bottom: 3rem;
          }
        }
      }

      &:first-child,
      &:last-child {
        & > div {
          img {
            height: 10rem;
          }

          align-items: center;
          justify-content: space-between;
        }
      }
    }
  }

  @media only screen and (min-width: 1024px) {
    margin: 10rem 0 21.875rem;

    article {
      height: unset;
      padding: 4rem 1.5rem 1rem;

      h3 {
        padding: 0 2rem 0;
        font-size: 2rem;
      }

      &:first-child,
      &:last-child {
        & > div {
          img {
            width: 50%;
            height: unset;
          }

          button {
            /* padding: 0.875rem 3.125rem; */
            font-size: 1rem;
          }
        }
      }

      &:first-child {
        & > div {
          button {
            /* margin-right: 1.5rem; */
          }
        }
      }

      &:last-child {
        & > div {
          button {
            /* margin-left: 2rem; */
          }
        }
      }
    }
  }

  @media only screen and (min-width: 1300px) {
    article {
      &:first-child,
      &:last-child {
        & > div {
          button {
            padding: 0.875rem 3.125rem;
          }
        }
      }

      &:first-child {
        & > div {
          button {
            margin-right: 2rem;
          }
        }
      }

      &:last-child {
        & > div {
          button {
            margin-left: 2rem;
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
  text-align: center;

  h3 {
    color: var(--title);
    max-width: 30rem;
    margin: 0 auto;
  }

  button {
    display: inline-flex;
    min-width: 13rem;
    background: var(--secondary-color-2);
    border-radius: 0.5rem;
    border-color: var(--secondary-color-2);
    font: 400 1.143rem 'Ubuntu', sans-serif;

    margin-top: 1.143rem;
    transition: all 0.3s;

    &:hover {
      background: var(--secondary-color-1);
      border-color: var(--secondary-color-1);
      color: var(--title);
    }
  }

  @media only screen and (min-width: 580px) {
    background-size: cover;
  }

  @media only screen and (min-width: 1024px) {
    padding: 11.875rem 0;
    margin-left: -6.25rem;

    h3 {
      max-width: unset;
      font-size: 2rem;
    }

    button {
      margin-top: 4rem;
    }
  }
`;

export const PartnersCount = styled.section`
  padding: 7.143rem 0;

  h4 {
    text-align: center;
    font-size: 1.143rem;
  }

  @media only screen and (min-width: 1024px) {
    padding: 16.25rem 0;

    h4 {
      font-size: 2rem;
    }
  }
`;

export const Footer = styled.footer`
  border-top: 3px solid var(--secondary-color-2);

  & > div:first-child {
    background: var(--secondary-color);
    padding: 1.57rem 1.143rem;
  }

  & > div:last-of-type {
    background: var(--secondary-color-2);
    padding: 1.143rem 0;

    text-align: center;
    color: var(--tertiary-color-1);
  }

  @media only screen and (min-width: 768px) {
    & > div:first-child {
      display: flex;
      justify-content: space-between;
    }
  }

  @media only screen and (min-width: 1024px) {
    & > div:first-child {
      flex-direction: column;
      padding: 7.5rem 6.25rem;
    }

    & > div:last-of-type {
      padding: 3.43rem 0;

      h4 {
        font-size: 2rem;
      }
    }
  }

  @media only screen and (min-width: 1300px) {
    & > div:first-child {
      flex-direction: row;
    }
  }
`;

export const Devs = styled.section`
  h4 {
    font-size: 1rem;
    color: var(--title);
    margin-bottom: 1rem;
  }

  p {
    display: inline-block;
    width: 12rem;
    margin-left: 1rem;
    margin-bottom: 0.5rem;

    font: 700 0.857rem 'Ubuntu', sans-serif;
    line-height: 1rem;
    vertical-align: top;
  }

  div:last-of-type > p {
    margin-bottom: 1rem;
  }

  svg {
    width: 1rem;
    height: 1rem;
    color: var(--title);
  }

  a + a {
    margin-left: 0.3rem;
  }

  @media only screen and (min-width: 580px) {
    p {
      width: 20rem;
    }
  }

  @media only screen and (min-width: 768px) {
    p {
      width: 15rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    h4 {
      font-size: 2rem;
      margin-bottom: 2.19rem;
    }

    p {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      margin-left: 8.125rem;
    }

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }

    div:last-of-type > p {
      margin-bottom: 2.19rem;
    }
  }

  @media only screen and (min-width: 1300px) {
    div {
      display: flex;
      margin-bottom: 1rem;

      p {
        width: 25rem;
      }
    }
  }
`;

export const Contact = styled.footer`
  font-weight: 700;
  font-family: 'Ubuntu', sans-serif;
  text-align: center;

  h4 {
    text-align: left;
    font-size: 1rem;
    color: var(--title);
    margin-bottom: 1rem;
  }

  h5 {
    color: var(--subtitle);
    font-size: 0.857rem;
    margin-bottom: 0.5rem;
  }

  address {
    margin-bottom: 1.3rem;
  }

  a {
    text-decoration: none;
    color: var(--primary-color-2);
  }

  p {
    line-height: 1rem;
    max-width: 20rem;
    margin: 0 auto;
  }

  @media only screen and (min-width: 768px) {
    address {
      margin-bottom: 3rem;
    }
  }

  @media only screen and (min-width: 1024px) {
    font-size: 1.5rem;

    h4 {
      font-size: 2rem;
    }

    h5 {
      font-size: 1.5rem;
    }

    p {
      line-height: 1.7rem;
    }

    h5,
    address,
    p {
      margin-left: 8.125rem;
    }

    p {
      max-width: 48rem;
    }
  }

  @media only screen and (min-width: 1300px) {
    margin-left: 8.375rem;

    address {
      margin-bottom: 8rem;
    }
  }
`;
