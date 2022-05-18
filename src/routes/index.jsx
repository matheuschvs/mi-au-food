import { Routes, Route } from 'react-router-dom';

import { Layout } from '../layouts/Layout';
import { RequireAuth } from './RequireAuth';

import { LandingPage } from '../pages/LandingPage';
import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { UserProfile } from '../pages/UserProfile';
import { ShopProfile } from '../pages/ShopProfile';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { NoContent } from '../pages/NoContent';
import { LoginPage } from '../pages/LoginPage';
import { UserRegister } from '../pages/UserRegister';
import { ShopRegister } from '../pages/ShopRegister';
import { ProductRegistration } from '../pages/ProductRegistration';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="inicio" element={<Home />} />
        <Route path="registroProduto" element={<ProductRegistration />} />
        <Route path="produto/:productId" element={<Product />} />
        <Route path="perfil">
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
          <Route index element={<NoContent />} />
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
      <Route path="/entrar" element={<LoginPage />} />
      <Route path="/registro">
        <Route path="usuario" element={<UserRegister />} />
        <Route path="loja" element={<ShopRegister />} />
        <Route index element={<NoContent />} />
      </Route>
    </Routes>
  );
};
