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
import { useContext } from 'react';
import { AuthContext } from '../../context/auth';

export const Header = () => {
  /* eslint-disable */

  const { token } = useContext(AuthContext);

  const navigate = useNavigate();

  const goHome = () => {
    return navigate('/inicio', { replace: true });
  };

  const goLogin = () => {
    return navigate('/entrar', { replace: true });
  };

  const goRegister = () => {
    return navigate('/registro/loja', { replace: true });
  };

  return (
    <>
      {token ? (
        <HeaderLogin>
          <h1>Mi-Au Food</h1>
          <LogedIcons>
            <CartIcon src={cartIcon} alt="imagem carrinho" />
            <h3>Fulano</h3>
            <userIcon src={userIcon} alt="imagem usuario" />
          </LogedIcons>
        </HeaderLogin>
      ) : (
        <HeaderBar animate={defaultAnimation} transition={defaultTransition}>
          <h1 onClick={() => goHome()}>Mi-Au Food</h1>
          <div>
            <button onClick={() => goLogin()} type="button">
              Entrar
            </button>
            <h3 onClick={() => goRegister()}>Seja uma loja parceira</h3>
          </div>
          <ContainerIMG>
            <CartIcon src={cartIcon} alt="imagem carrinho" />
            <MenuIcon src={menuIcon} alt="imagem menu" />
          </ContainerIMG>
        </HeaderBar>
      )}
    </>
  );
};
