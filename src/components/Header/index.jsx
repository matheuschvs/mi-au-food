/* eslint-disable */
import { useNavigate } from 'react-router-dom';
import {
  HeaderBar,
  CartIcon,
  MenuIcon,
  ContainerIMG,
  HeaderLogin,
  LogedIcons,
} from './style';
import cartIcon from '../../assets/shopcart.svg';
import menuIcon from '../../assets/menu1.svg';
import userIcon from '../../assets/userIcon.svg';
import { defaultAnimation, defaultTransition } from '../../utils/defaultMotion';

export const Header = () => {
  /* eslint-disable */

  const navigate = useNavigate();

  const goHome = () => {
    return navigate('/entrar', { replace: true });
  };

  const goRegister = () => {
    return navigate('/registro/loja', { replace: true });
  };

  return (
    <>
      {/* <HeaderBar animate={defaultAnimation} transition={defaultTransition}>
        <h1>Mi-Au Food</h1>
        <div>
          <button onClick={() => goHome()} type="button">
            Entrar
          </button>
          <h3 onClick={() => goRegister()}>Seja uma loja parceira</h3>
        </div>
        <ContainerIMG>
          <CartIcon src={cartIcon} alt="imagem carrinho" />
          <MenuIcon src={menuIcon} alt="imagem menu" />
        </ContainerIMG>
      </HeaderBar> */}
      <HeaderLogin>
        <h1>Mi-Au Food</h1>
        <LogedIcons>
          <CartIcon src={cartIcon} alt="imagem carrinho" />
          <h3>Fulano</h3>
          <userIcon src={userIcon} alt="imagem usuario" />
        </LogedIcons>
      </HeaderLogin>
    </>
  );
};
