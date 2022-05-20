import { Link } from 'react-router-dom';
import { Instagram, GitHub, Linkedin } from 'react-feather';

import { GoToButton } from '../../components/GoToButton';
import { Button } from '../../components/Button';
import { Carousel } from '../../components/Carousel';

import catImg from '../../assets/cat.svg';
import dogImg from '../../assets/dog.svg';

import {
  Container,
  Opening,
  Cards,
  Partners,
  PartnersCount,
  Footer,
  Devs,
  Contact,
} from './style';

const devs = [
  { name: 'Thiago Brandão', instagram: '/', github: '/', linkedin: '/' },
  { name: 'Beatriz Costa', instagram: '/', github: '/', linkedin: '/' },
  { name: 'Matheus Chaves', instagram: '/', github: '/', linkedin: '/' },
  { name: 'Adriano Nóbrega', instagram: '/', github: '/', linkedin: '/' },
  { name: 'Lucas Golle', instagram: '/', github: '/', linkedin: '/' },
];

export const LandingPage = () => {
  return (
    <>
      <Container animate={{ opacity: [0.5, 1], y: [-1800, 0] }}>
        <Opening>
          <h1>Mi-Au Food</h1>
          <h2>Seu pet feliz de verdade</h2>
        </Opening>
        <Carousel />
        <Cards>
          <article>
            <h3>Seu gato mais feliz com as rações premium</h3>
            <div>
              <img src={catImg} alt="um gato se espreguiçando" />
              <Link to="/inicio">
                <GoToButton>Ver opções</GoToButton>
              </Link>
            </div>
          </article>
          <article>
            <h3>Os melhores brinquedos para pets do mercado</h3>
            <div>
              <Link to="/inicio">
                <GoToButton>Eu quero</GoToButton>
              </Link>
              <img src={dogImg} alt="um cão atento" />
            </div>
          </article>
        </Cards>
        <Partners>
          <h3>Torne-se um parceiro e encontre os clientes mais próximos</h3>
          <Link to="/registro/loja">
            <Button text="Quero me registrar"></Button>
          </Link>
        </Partners>
        <PartnersCount>
          <h4>Já somos 2560 parceiros registrados!</h4>
        </PartnersCount>
      </Container>
      <Footer>
        <div>
          <Devs>
            <h4>Desenvolvido por:</h4>
            {devs.map(dev => (
              <div key={dev.name}>
                <p>{dev.name}</p>
                <Link target="_blank" to={dev.instagram}>
                  <Instagram />
                </Link>
                <Link target="_blank" to={dev.github}>
                  <GitHub />
                </Link>
                <Link target="_blank" to={dev.linkedin}>
                  <Linkedin />
                </Link>
              </div>
            ))}
          </Devs>
          <Contact>
            <h4>Entre em contato:</h4>
            <h5>E-mail</h5>
            <address>
              <a href="mailto:contact@miaufood.com">contact@miaufood.com</a>
            </address>
            <p>
              © Copyright 2022 - Mi-Au Food - Todos os direitos reservados Mi-Au
              Food
            </p>
          </Contact>
        </div>
        <div>
          <h4>#KenzieAcademy</h4>
        </div>
      </Footer>
    </>
  );
};
