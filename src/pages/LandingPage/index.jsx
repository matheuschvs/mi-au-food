import { Instagram, GitHub, Linkedin } from 'react-feather';

import { Link } from 'react-router-dom';
import { defaultAnimation, defaultTransition } from '../../utils/defaultMotion';

import { GoToButton } from '../../components/GoToButton';
import { Button } from '../../components/Button';

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

export const LandingPage = () => {
  return (
    <>
      <Container animate={defaultAnimation} transition={defaultTransition}>
        <Opening>
          <h1>Mi-Au Food</h1>
          <h2>Seu pet feliz de verdade</h2>
        </Opening>
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
            <Button>Quero me registrar</Button>
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
            <p>Thiago Brandão</p>
            <Link target="_blank" to="/">
              <Instagram />
            </Link>
            <Link target="_blank" to="/">
              <GitHub />
            </Link>
            <Link target="_blank" to="/">
              <Linkedin />
            </Link>
            <p>Beatriz Costa</p>
            <Link target="_blank" to="/">
              <Instagram />
            </Link>
            <Link target="_blank" to="/">
              <GitHub />
            </Link>
            <Link target="_blank" to="/">
              <Linkedin />
            </Link>
            <p>Matheus Chaves</p>
            <Link target="_blank" to="/">
              <Instagram />
            </Link>
            <Link target="_blank" to="/">
              <GitHub />
            </Link>
            <Link target="_blank" to="/">
              <Linkedin />
            </Link>
            <p>Adriano Nóbrega</p>
            <Link target="_blank" to="/">
              <Instagram />
            </Link>
            <Link target="_blank" to="/">
              <GitHub />
            </Link>
            <Link target="_blank" to="/">
              <Linkedin />
            </Link>
            <p>Lucas Golle</p>
            <Link target="_blank" to="/">
              <Instagram />
            </Link>
            <Link target="_blank" to="/">
              <GitHub />
            </Link>
            <Link target="_blank" to="/">
              <Linkedin />
            </Link>
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
