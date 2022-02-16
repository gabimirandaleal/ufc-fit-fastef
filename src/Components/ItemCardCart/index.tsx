import { Box } from "@mui/material";
import { useCart } from "../../Context/Cart/CartContext";
import { useStyles } from "./style";
import { IoClose } from "react-icons/io5";
interface Cart{
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
  quantidade:number;
  userId: number;
}

interface ItemCardCartProps{
  product: Cart;
}

function ItemCardCart({product}:ItemCardCartProps) {
  const styles = useStyles();
  const {addQuantidade, subQuantidade, deleteProduct} = useCart();


  return (
    <Box className={styles.container}>
      <img src={product.img} alt={product.name} />
      <Box className={styles.product}>
        <h2>{product.name}</h2>
        <span>{product.category}</span>
        <Box className={styles.quantity}>
          <span>Quantidade</span>
          <Box className={styles.btnSumSub}>
            <button onClick={() => addQuantidade(product)} className={styles.btnSum}>+</button>
            <span>{product.quantidade}</span>
            <button onClick={() => subQuantidade(product)} className={styles.btnSub}>-</button>
          </Box>
        </Box>
      </Box>
      <button onClick={() => deleteProduct(product)} className={styles.btnRemove}><IoClose/></button>
    </Box>
  );
}

export default ItemCardCart;
