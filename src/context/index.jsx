import { AuthProvider } from './auth';
import { CartProvider } from './cart';
import { CatalogueProvider } from './catalogue';
import { ThemeProvider } from './theme';

export const ContextProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <CatalogueProvider>
          <CartProvider>{children}</CartProvider>
        </CatalogueProvider>
      </AuthProvider>
    </ThemeProvider>
  );
};
