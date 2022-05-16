import { defaultAnimation, defaultTransition } from '../../utils/defaultMotion';

import { GoToButton } from '../../components/GoToButton';

import catImg from '../../assets/cat.svg';
import dogImg from '../../assets/dog.svg';

import { Container, Opening, Cards } from './style';

export const LandingPage = () => {
  return (
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
            <GoToButton>Ver opções</GoToButton>
          </div>
        </article>
        <article>
          <h3>Os melhores brinquedos para pets do mercado</h3>
          <div>
            <GoToButton>Eu quero</GoToButton>
            <img src={dogImg} alt="um cão atento" />
          </div>
        </article>
      </Cards>
    </Container>
  );
};
