/* eslint-disable */
import { AuthProvider } from './auth';
import { CartProvider } from './cart';
import { CatalogueProvider } from './catalogue';

export const ContextProvider = ({ children }) => {
  return (
  <AuthProvider>
    <CatalogueProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </CatalogueProvider>
  </AuthProvider>
  );
};
