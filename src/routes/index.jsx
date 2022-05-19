import { Routes, Route } from 'react-router-dom';

import { Layout } from '../layouts/Layout';
import { RequireAuth } from './RequireAuth';
import { RequireOut } from './RequireOut';

import { LandingPage } from '../pages/LandingPage';
import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { NoContent } from '../pages/NoContent';
import { LoginPage } from '../pages/LoginPage';
import { UserRegister } from '../pages/UserRegister';
import { ShopRegister } from '../pages/ShopRegister';
import { UserProfile } from '../pages/UserProfile';
import { ShopProfile } from '../pages/ShopProfile';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="inicio" element={<Home />} />
        <Route path="produto/:productId" element={<Product />} />
        <Route path="perfil">
          <Route index element={<NoContent />} />
          <Route
            path="usuario"
            element={
              <RequireAuth>
                <UserProfile />
              </RequireAuth>
            }
          />
          <Route
            path="loja"
            element={
              <RequireAuth>
                <ShopProfile />
              </RequireAuth>
            }
          />
        </Route>
        <Route
          path="carrinho"
          element={
            <RequireAuth>
              <ShoppingCartPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NoContent />} />
      </Route>
      <Route
        path="/entrar"
        element={
          <RequireOut>
            <LoginPage />
          </RequireOut>
        }
      />
      <Route path="/registro">
        <Route
          path="usuario"
          element={
            <RequireOut>
              <UserRegister />
            </RequireOut>
          }
        />
        <Route
          path="loja"
          element={
            <RequireOut>
              <ShopRegister />
            </RequireOut>
          }
        />
        <Route
          index
          element={
            <RequireOut>
              <UserRegister />
            </RequireOut>
          }
        />
      </Route>
    </Routes>
  );
};
