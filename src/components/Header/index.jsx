import { useContext, useState } from 'react';
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
import cartIcon from '../../assets/shopcart.svg';
import menuIcon from '../../assets/menu1.svg';
import userIcon from '../../assets/UserIconRed.png';
import logoutIcon from '../../assets/logoutIcon.png';
import { defaultAnimation, defaultTransition } from '../../utils/defaultMotion';
import { AuthContext } from '../../context/auth';

export const Header = () => {
  /* eslint-disable */

  const { token, user, Logoff } = useContext(AuthContext);

  const [userModal, setUserModal] = useState(false);

  const [modalMobile, setModalMobile] = useState(false);

  const [modalLogoff, setModalLogoff] = useState(false);

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
    return navigate('/inicio', { replace: true });
  };

  const goStore = () => {
    return navigate('/loja', { replace: true });
  };

  const goCart = () => {
    return navigate('/carinho', { replace: true });
  };

  const goLogin = () => {
    return navigate('/entrar', { replace: true });
  };

  const goRegister = () => {
    return navigate('/registro/loja', { replace: true });
  };

  const goUserProfile = () => {
    return navigate('/perfil', { replace: true });
  };

  return (
    <>
      {token ? (
        <HeaderLogin>
          <h1 onClick={() => goHome()}>Mi-Au Food</h1>
          <LogedIcons>
            <CartIcon
              onClick={() => goCart()}
              src={cartIcon}
              alt="imagem carrinho"
            />
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
                Catálogo
              </h2>
              <div>
                <LogoutIcon src={logoutIcon} alt="ícone logout" />
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
            <MenuIcon
              onClick={showModalLogoff}
              src={menuIcon}
              alt="imagem menu"
            />
          </ContainerIMG>
        </HeaderBar>
      )}
      {modalMobile && (
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
            Catálogo
          </h2>
          <section>
            <LogoutIcon src={logoutIcon} alt="ícone logout" />
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
      )}
      {modalLogoff && (
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
            Catálogo
          </h2>
          <h3>Você ainda não está logado</h3>
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
      )}
    </>
  );
};
