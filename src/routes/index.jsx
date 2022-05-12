import { Route, Routes } from 'react-router-dom';

import { LandingPage } from '../pages/LandingPage';

import { RegisterUser } from '../pages/RegisterUser';

export const Router = () => {
  return (
    <Routes>
      <Route path="/a" element={<LandingPage />} />
      <Route path="/" element={<RegisterUser />} />
    </Routes>
  );
};
