import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import { api } from "../../Services/api";
import { useAuth } from "../Auth/AuthContext";

interface ProductProvidersProps {
    children: ReactNode;
}

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface ProductProviderData {
  product: Product[];
  productFilter: Product[];
  searchProduct: (text:String) => void;
}

const ProductContext = createContext<ProductProviderData>({} as ProductProviderData);

export const ProductProvider = ({ children }: ProductProvidersProps) => {
  const [product, setProduct] = useState<Product[]>([]);
  const [productFilter, setProductFilter] = useState<Product[]>([]);
  const {accessToken } = useAuth();
  const [refresh] = useState(false)

  const searchProduct = (text:String) =>{
    setProductFilter(
      product.filter((item) => {
        return (
          (item.name.toLowerCase().indexOf(text.toLowerCase()) > -1 ||
            item.category.toLowerCase().indexOf(text.toLowerCase()) > -1) &&
          item.name
        );
      })
    );
  }

  useEffect(()=>{
    api
    .get(`/products`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setProduct(response.data)
      setProductFilter(response.data)
    })
    .catch() 
  }, [refresh])



  return (
    <ProductContext.Provider value={{product, productFilter, searchProduct}}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => useContext(ProductContext);