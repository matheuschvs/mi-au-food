import { Route, Routes } from 'react-router-dom';

import { LandingPage } from '../pages/LandingPage';
import { LoginPage } from '../pages/LoginPage';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="login" element={<LoginPage />} />
    </Routes>
  );
};
