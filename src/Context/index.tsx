import { ReactNode } from "react";
import { AuthProvider } from "./Auth/AuthContext";
import { CartProvider } from "./Cart/CartContext";
import { ProductProvider } from "./Product/ProductContext";

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => (
  <AuthProvider>
    <ProductProvider>
      <CartProvider>{children}</CartProvider>
    </ProductProvider>
  </AuthProvider>
);
