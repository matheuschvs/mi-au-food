import { HeaderBar, CartIcon, MenuIcon, ContainerIMG } from './style';
import cartIcon from '../../assets/shopcart.svg';
import menuIcon from '../../assets/menu1.svg';

export const Header = () => {
  return (
    <HeaderBar>
      <h1>Mi-Au Food</h1>
      <div>
        <button type="button">Entrar</button>
        <h3>Seja uma loja parceira</h3>
      </div>
      <ContainerIMG>
        <CartIcon src={cartIcon} alt="imagem carrinho" />
        <MenuIcon src={menuIcon} alt="imagem menu" />
      </ContainerIMG>
    </HeaderBar>
  );
};
