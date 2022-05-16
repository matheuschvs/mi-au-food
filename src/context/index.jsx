/* eslint-disable */
import { AuthProvider } from './auth';
import { CatalogueProvider } from './catalogue';

export const ContextProvider = ({ children }) => {
  return (
  <AuthProvider>
    <CatalogueProvider>
      {children}
    </CatalogueProvider>
  </AuthProvider>
  );
};
