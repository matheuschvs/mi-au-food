import { Routes, Route } from 'react-router-dom';

import { Layout } from '../layouts/Layout';
import { LandingPage } from '../pages/LandingPage';
import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { UserProfile } from '../pages/UserProfile';
import { ShopProfile } from '../pages/ShopProfile';
import { Cart } from '../pages/Cart';
import { NoContent } from '../pages/NoContent';
import { Login } from '../pages/Login';
import { UserRegister } from '../pages/UserRegister';
import { ShopRegister } from '../pages/ShopRegister';

export const Router = () => {
  return (
    <Routes>
      <Route path="/a" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="inicio" element={<Home />} />
        <Route path="produto/:productId" element={<Product />} />
        <Route path="perfil">
          <Route path="usuario" element={<UserProfile />} />
          <Route path="loja" element={<ShopProfile />} />
        </Route>
        <Route path="carrinho" element={<Cart />} />
        <Route path="*" element={<NoContent />} />
      </Route>
      <Route path="/entrar" element={<Login />} />
      <Route path="/registro">
        <Route path="/" element={<UserRegister />} />
        <Route path="loja" element={<ShopRegister />} />
      </Route>
    </Routes>
  );
};
