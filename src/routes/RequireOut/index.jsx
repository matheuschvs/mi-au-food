import { Navigate } from 'react-router-dom';

import { useAuth } from '../../context/auth';

export const RequireOut = ({ children }) => {
  const { user, token } = useAuth();

  if (user && token) {
    if (user.type === 'user') {
      return <Navigate to="/perfil/usuario" replace />;
    }
    return <Navigate to="/perfil/loja" replace />;
  }

  return children;
};
