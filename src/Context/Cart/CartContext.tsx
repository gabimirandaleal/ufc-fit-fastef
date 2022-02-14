import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import toast from "react-hot-toast";
import { api } from "../../Services/api";
import { useAuth } from "../Auth/AuthContext";

interface CartProvidersProps {
    children: ReactNode;
}

interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}
interface Cart{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    quantidade:number;
    userId: number;
}

interface Carts{
  item: Cart[];
}

interface CartProviderData {
  cart: Cart[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Cart) => void;
  subQuantidade: (product: Cart) => void;
  addQuantidade: (product: Cart) => void;
  deleteAll: () => void;
  setRefresh:(text:boolean)=>void;
  refresh: boolean;
}

const CartContext = createContext<CartProviderData>({} as CartProviderData);

export const CartProvider = ({ children }: CartProvidersProps) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const { user, accessToken } = useAuth();
  const [refresh, setRefresh] = useState(false)

  const addProduct = (product: Product) => {
    if(cart.filter((item)=>item.name===product.name).length === 0){
      const cartSend = {...{category:product.category, img:product.img, name:product.name, price:product.price}, ...{quantidade:1, userId:user.id}}
      api
      .post("/cart/", cartSend, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => setRefresh(!refresh))
  }
  };

  const addQuantidade = (product: Cart) => { 
    product.quantidade = product.quantidade+1;
    const cardSend = {...product}
    api
    .patch(`/cart/${product.id}`, cardSend, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((_) => {
      toast.success("Bora comer, que faz bem!", {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },})
      setRefresh(!refresh)
    })
    .catch(err => {
      toast.error("Opa, tenta de novo!", {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },})
    })
  };
  const subQuantidade = (product: Cart) => {
    if(product.quantidade > 1){
      product.quantidade = product.quantidade-1;
    const cartSend = {...product}
   api
      .patch(`/cart/${product.id}`, cartSend, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((_) => {
        toast("Tá magrinho, bora comer!", {style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },})
        setRefresh(!refresh)
      })
      .catch((err) =>{
        toast.error("Opa, tenta de novo!", {style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },})
      })
    }
  };

  const deleteProduct = (productToBeDeleted: Cart) => {
    setCart([...cart.filter((item)=> item.id!==productToBeDeleted.id)])
    api
    .delete(`/cart/${productToBeDeleted.id}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((_) => {
      setRefresh(!refresh)
    })
    .catch((err) =>{
      toast.error("Sinal do universo, melhor comprar!", {style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },})
    })
  };

  const deleteAll = () =>{
    
    cart.forEach(function(item){
      setTimeout(function() {
        toast.success("R.I.P carrinho ⚰️", {style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },})
        deleteProduct(item)
        setCart([])
      }, 1);
    });
    setCart([])
  }
  

  useEffect(()=>{
    api
    .get(`/cart`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
    .then((response) => {
      setCart(response.data.filter((item:Cart)=>Number(item.userId) == Number(user.id)))
    })
    .catch(error => setCart(cart)) 
  }, [refresh])
  

  return (
    <CartContext.Provider value={{cart, deleteAll, addQuantidade, subQuantidade, addProduct, deleteProduct, setRefresh, refresh}}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);