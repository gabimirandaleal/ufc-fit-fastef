import { Box } from "@mui/material";
import { useCart } from "../../Context/Cart/CartContext";
import Button from "../Button";
import ItemCardCart from "../ItemCardCart";
import { useStyles } from "./style";

export const Cart = ({}) => {
  const styles = useStyles();
  const {cart, deleteAll} = useCart();
  
  return (
    <Box className={styles.container}>
      <Box className={styles.cart}>
        <Box className={styles.titleCart}>
          <h1>Carrinho de compras</h1>
        </Box>
        <Box>
          {
            cart.length === 0 ? (
              <Box className={styles.itemCartEmpty}>
                <h2>Sua sacola está vazia</h2>
                <span>Adicione items</span>
              </Box>
            )
            :
            (
              <Box>
                 { 
                  cart.map((item) => (
                    <ItemCardCart key={item.id} product={item}/>
                  ))
                 }
              </Box>
            )
            
          }
        </Box>
        { cart.length > 0 &&
        <Box className={styles.containerPrice}>
          <Box className={styles.infoPrice}>
            <span>Total</span>
            <span>R$40,00</span>
          </Box>
          <Button color="#E0E0E0" text="Remover todos" onClick={deleteAll}/>
        </Box>
        }
      </Box>
    </Box>
  );
}

