import { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {
  HeaderBar,
  CartIcon,
  MenuIcon,
  ContainerIMG,
  HeaderLogin,
  LogedIcons,
  IconUser,
  UserModal,
  LogoutIcon,
  ContainerModal,
  ContainerModalLogoff,
} from './style';
import { ToggleTheme } from '../ToggleTheme';
import cartIcon from '../../assets/shopcart.svg';
import menuIcon from '../../assets/menu1.svg';
import userIcon from '../../assets/UserIconRed.png';
import logoutIcon from '../../assets/logoutIcon.png';
import { AuthContext } from '../../context/auth';
import { useCart } from '../../context/cart';

export const Header = () => {
  /* eslint-disable */

  const { token, user, Logoff } = useContext(AuthContext);
  const { cart } = useCart();

  const [userModal, setUserModal] = useState(false);
  const [modalMobile, setModalMobile] = useState(false);
  const [modalLogoff, setModalLogoff] = useState(false);
  const [boxShadow, setBoxShadow] = useState('none');

  const showModal = () => {
    setUserModal(!userModal);
  };

  const showModalLogoff = () => {
    setModalLogoff(!modalLogoff);
  };

  const showModalMob = () => {
    setModalMobile(!modalMobile);
  };

  const navigate = useNavigate();

  const goHome = () => {
    return navigate('/inicio');
  };

  const goStore = () => {
    return navigate('/loja');
  };

  const goCart = () => {
    return navigate('/carrinho');
  };

  const goLogin = () => {
    return navigate('/entrar');
  };

  const goRegister = () => {
    return navigate('/registro/loja');
  };

  const goUserProfile = () => {
    if (user.type === 'user') {
      return navigate('/perfil/usuario');
    }

    if (user.type === 'shop') {
      return navigate('/perfil/loja');
    }
  };

  const handleScroll = () => {
    if (document.documentElement.scrollTop > 10) {
      setBoxShadow('0px 4px 4px rgba(0, 0, 0, 0.25)')
    } else {
      setBoxShadow('none')
    }
  }

  useEffect(() => {
    window.onscroll = () => handleScroll();
  }, []);

  return (
    <>
      {token ? (
        <HeaderLogin boxshadow={boxShadow}>
          <h1 onClick={() => goHome()}>Mi-Au Food</h1>
          <LogedIcons>
            <ToggleTheme />
            <CartIcon
              onClick={() => goCart()}
              src={cartIcon}
              alt="imagem carrinho"
            />
            {cart.length > 0 && <p>{cart.length}</p>}
            <MenuIcon onClick={showModalMob} src={menuIcon} alt="imagem menu" />
            <h3>{user.name}</h3>
            <IconUser onClick={showModal} src={userIcon} alt="imagem usuario" />
          </LogedIcons>
          {userModal && (
            <UserModal>
              <h2
                onClick={() => {
                  goUserProfile();
                  showModal();
                }}
              >
                Meu perfil
              </h2>
              <h2
                onClick={() => {
                  goHome();
                  showModal();
                }}
              >
                Cat??logo
              </h2>
              <div>
                <LogoutIcon src={logoutIcon} alt="??cone logout" />
                <h2
                  onClick={() => {
                    Logoff();
                    showModal();
                  }}
                >
                  Sair
                </h2>
              </div>
            </UserModal>
          )}
        </HeaderLogin>
      ) : (
        <HeaderBar boxshadow={boxShadow}>
          <h1 onClick={() => goHome()}>Mi-Au Food</h1>
          <div>
            <ToggleTheme />
            <button onClick={() => goLogin()} type="button">
              Entrar
            </button>
            <h3 onClick={() => goRegister()}>Seja uma loja parceira</h3>
          </div>
          <ContainerIMG>
            <MenuIcon
              onClick={showModalLogoff}
              src={menuIcon}
              alt="imagem menu"
            />
          </ContainerIMG>
        </HeaderBar>
      )
      }
      {
        modalMobile && (
          <ContainerModal>
            <div>
              <h1>Mi-Au Food</h1>
              <p onClick={showModalMob}>x</p>
            </div>
            <h2
              onClick={() => {
                goUserProfile();
                showModalMob();
              }}
            >
              Meu perfil
            </h2>
            {user.type === 'user' ? (
              <h2
                onClick={() => {
                  goCart();
                  showModalMob();
                }}
              >
                Meu carrinho
              </h2>
            ) : (
              <h2
                onClick={() => {
                  goStore();
                  showModalMob();
                }}
              >
                Meus pedidos
              </h2>
            )}
            <h2
              onClick={() => {
                goHome();
                showModalMob();
              }}
            >
              Cat??logo
            </h2>
            <section>
              <LogoutIcon src={logoutIcon} alt="??cone logout" />
              <h2
                onClick={() => {
                  showModalMob();
                  Logoff();
                }}
              >
                Sair
              </h2>
            </section>
          </ContainerModal>
        )
      }
      {
        modalLogoff && (
          <ContainerModalLogoff>
            <div>
              <h1>Mi-Au Food</h1>
              <p onClick={showModalLogoff}>x</p>
            </div>
            <h2
              onClick={() => {
                goUserProfile();
                showModalLogoff();
              }}
            >
              Cat??logo
            </h2>
            <h3>Voc?? ainda n??o est?? logado</h3>
            <section>
              <button
                onClick={() => {
                  showModalLogoff();
                  goLogin();
                }}
              >
                Entrar
              </button>
              <Link
                to="/registro/usuario"
                onClick={() => {
                  showModalLogoff();
                }}
              >
                Crie sua conta
              </Link>
              <Link
                to="/registro/loja"
                onClick={() => {
                  showModalLogoff();
                }}
              >
                Seja uma loja parceira
              </Link>
            </section>
          </ContainerModalLogoff>
        )
      }
    </>
  );
};
