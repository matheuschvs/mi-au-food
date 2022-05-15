import { Route, Routes } from 'react-router-dom';
import { ShoppingCartPage } from '../pages/ShoppingCartPage';
import { LandingPage } from '../pages/LandingPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cart" element={<ShoppingCartPage />} />
    </Routes>
  );
};
