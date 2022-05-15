import { Navigate, useLocation } from 'react-router-dom';

import { useAuth } from '../../context/auth';

export const RequireAuth = ({ children }) => {
  const { user, token } = useAuth();
  const location = useLocation();

  if (!user || !token) {
    return <Navigate to="/entrar" state={{ from: location }} replace />;
  }

  return children;
};
